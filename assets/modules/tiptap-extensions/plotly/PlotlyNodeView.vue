<!-- components/PlotlyNodeView.vue -->
<template>
        <node-view-wrapper class="plotly-node">
            <div class="plotly-wrapper"
                @click="handleClick"
            >
                <div class="plotly-container-outer">
                  <div 
                      class="plotly-aspect-container" 
                      :style="plotAspectContainerStyle"
                  >
                      <div class="plotly-container"
                          ref="plotContainer"
                      ></div>
                  </div>
                </div>
            </div>
        </node-view-wrapper>

        <!-- Add the PlotlyModal for editing -->
        <PlotlyModal
            v-model="showModal"
            :edit-data="editData"
            @save="savePlot"
        />
  </template>
  
  <script setup>
  import { ref, onMounted, watch, computed, onBeforeUnmount } from 'vue'
  import { nodeViewProps, NodeViewWrapper } from '@tiptap/vue-3'
  import PlotlyModal from '~/components/PlotlyModal.vue'
  
  const props = defineProps(nodeViewProps)
  const plotContainer = ref(null)
  const legendContainer = ref(null)
  const showModal = ref(false)
  const editData = ref(null)
  let Plotly = null
  let resizeObserver = null

  const handleClick = () => {
    if (!props.editor.view.editable) return
    
    // Set up the edit data
    editData.value = {
      type: props.node.attrs.type,
      data: {
        data: props.node.attrs.data,
        layout: props.node.attrs.layout
      },
      width: props.node.attrs.width,
      height: props.node.attrs.height
    }
    
    // Show the modal
    showModal.value = true
  }
  
  const savePlot = (plotData) => {
    // Update the node attributes
    props.node.attrs.type = plotData.type
    props.node.attrs.data = plotData.data.data
    props.node.attrs.layout = plotData.data.layout
    props.node.attrs.width = plotData.width
    props.node.attrs.height = plotData.height
    
    // Close the modal
    showModal.value = false

    const modifiedLayout = modifyLayout(plotData.data.layout)
        
    console.log('Updating plot with data:', plotData.data.data)
    console.log('Updating plot with layout:', JSON.stringify(modifiedLayout))
    
    Plotly.react(
      plotContainer.value,
      plotData.data.data,
      modifiedLayout,
      plotOptions
    )
  }
  
  const plotData = computed(() => {
    return props.node.attrs.data
  })
  
  const plotLayout = computed(() => {
    return props.node.attrs.layout
  })

  const plotWrapperStyle = computed(() => {
    return {
      maxWidth: `${props.node.attrs.width}px`,
    }
  })


  const plotAspectContainerStyle = computed(() => {
    const width = props.node.attrs.width || 400
    const height = props.node.attrs.height || 300
    const pb = (height / width) * 100 // Calculate padding-bottom as percentage to maintain aspect ratio
    return {
      paddingBottom: `${pb}%`,
    }
  })

  /*
  const plotContainerStyle = computed(() => {
    const width = props.node.attrs.width || 400
    const height = props.node.attrs.height || 300
    return {
      width: '100%',
      height: `${height}px`,
    }
  })
  */

  const legendContainerStyle = computed(() => {
    const width = props.node.attrs.width || 400
    return {
        width: '100%',
        height: '50px',
    }
  })
  
  const plotOptions = {
    responsive: true,
    displayModeBar: false,
    staticPlot: true,
    editable: false,
    autosizable: true
  }

  const updatePlotSize = () => {
    if (plotContainer.value && Plotly) {
      Plotly.relayout(plotContainer.value, {
        width: plotContainer.value.offsetWidth,
        height: plotContainer.value.offsetHeight
      })
    }
  }

  /*
  const updateLegendSize = () => {
    if (legendContainer.value && Plotly) {
      Plotly.relayout(legendContainer.value, {
        width: legendContainer.value.offsetWidth,
        height: legendContainer.value.offsetHeight
      })
    }
  }
  */

  const modifyLayout = (layout) => {
    const modifiedLayout = { ...layout }
  
    if (modifiedLayout.title) {
      modifiedLayout.title.yref = 'paper'
      modifiedLayout.title.automargin = true
      modifiedLayout.title.pad = {b: 20}
    }
    
    //delete modifiedLayout.title
    //modifiedLayout.showlegend = false
    modifiedLayout.automargin = true
    if (!modifiedLayout.xaxis) {
      modifiedLayout.xaxis = {}
    }
    if (!modifiedLayout.yaxis) {
      modifiedLayout.yaxis = {}
    }
    modifiedLayout.xaxis.automargin = true
    modifiedLayout.yaxis.automargin = true
    if (modifiedLayout.xaxis.title && !modifiedLayout.xaxis.title.standoff) {
      modifiedLayout.xaxis.title.standoff = 20
    }
    if (modifiedLayout.yaxis.title && !modifiedLayout.yaxis.title.standoff) {
      modifiedLayout.yaxis.title.standoff = 20
    }

    modifiedLayout.autosize = true
    
    // Adjust margins to remove extra top padding
    if (modifiedLayout.margin) {
        modifiedLayout.margin = {
            //...modifiedLayout.margin,
            t: 0,  // Reduced top margin since we handle title separately
            b: 0,
            l: 0,
            r: 0
        }
    }
    
    return modifiedLayout
  }
  
  // Initialize plot
  onMounted(async () => {
    // Add this before using Plotly
    if (typeof window !== 'undefined') {
        window.self = window
    }
    if (plotContainer.value) {
      Plotly = (await import('plotly.js-dist-min')).default
      
      // Remove title from layout since we're handling it separately
      const modifiedLayout = modifyLayout(plotLayout.value)

      console.log('Plotting with data:', plotData.value)
      console.log('Plotting with layout:', modifiedLayout)
      
      Plotly.newPlot(
        plotContainer.value,
        plotData.value,
        modifiedLayout,
        plotOptions
      )

      

      // Set up resize observers
      resizeObserver = new ResizeObserver(() => {
        updatePlotSize()
        
      })
      resizeObserver.observe(plotContainer.value)
      if (legendContainer.value) {
        resizeObserver.observe(legendContainer.value)
      }
    }
  })
  
  // Update plot when data changes
  /*
  watch(
    () => [plotData.value, plotLayout.value],
    async () => {
      if (plotContainer.value && Plotly) {
        // Remove title from layout since we're handling it separately
        const modifiedLayout = modifyLayout(plotLayout.value)
        
        console.log('Updating plot with data:', plotData.value)
        console.log('Updating plot with layout:', JSON.stringify(modifiedLayout))
        
        Plotly.react(
          plotContainer.value,
          plotData.value,
          modifiedLayout,
          plotOptions
        )

        
      }
    },
    { deep: true }
  )
  */
  // Cleanup
  onBeforeUnmount(() => {
    if (resizeObserver) {
      resizeObserver.disconnect()
    }
    if (plotContainer.value && Plotly) {
      Plotly.purge(plotContainer.value)
    }
  })
  </script>
  
  <style scoped>
  .plotly-wrapper {
    width: 100%;
    max-width: 600px;
    position: relative;
    padding-bottom: 20px;
  }
  
  .plotly-container-outer {
    width: 100%;
    position: relative;
    padding: 5px;
  }
  .plotly-aspect-container {
    width: 100%;
    height: 0;
    position: relative;
    box-sizing: border-box;
    
  }
  .plotly-container {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;
  }
  
  .plotly-node {
    display: block;
    position: relative;
    width: 100%;
  }
  </style>