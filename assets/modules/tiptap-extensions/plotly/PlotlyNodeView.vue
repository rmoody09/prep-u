<!-- components/PlotlyNodeView.vue -->
<template>
        <node-view-wrapper class="plotly-node">
            <div class="plotly-wrapper"
                :style="wrapperStyle"
                @click="handleClick"
            >
                <div 
                    v-if="plotLayout?.title?.text"
                    class="plotly-title"
                >
                    {{ plotLayout.title.text }}
                </div>
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
                <div 
                    v-if="hasLegend"
                    class="plotly-legend-container" 
                    ref="legendContainer"
                ></div>
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
  }
  
  const plotData = computed(() => {
    return props.node.attrs.data
  })
  
  const plotLayout = computed(() => {
    return props.node.attrs.layout
  })
  
  const hasLegend = computed(() => {
    return plotData.value?.some(trace => trace.name)
  })
  
  // Compute container style with max-width constraint
  const wrapperStyle = computed(() => {
    const width = props.node.attrs.width || 400
    const height = props.node.attrs.height || 300
    return {
      width: '100%',
      maxWidth: `${width}px`,
      minHeight: `${height}px`,
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

  const updateLegendSize = () => {
    if (legendContainer.value && Plotly) {
      Plotly.relayout(legendContainer.value, {
        width: legendContainer.value.offsetWidth,
        height: legendContainer.value.offsetHeight
      })
    }
  }

  const modifyLayout = (layout) => {
    const modifiedLayout = { ...layout }
    delete modifiedLayout.title
    modifiedLayout.showlegend = false
    modifiedLayout.automargin = true
    if (!modifiedLayout.xaxis) {
      modifiedLayout.xaxis = {}
    }
    if (!modifiedLayout.yaxis) {
      modifiedLayout.yaxis = {}
    }
    modifiedLayout.xaxis.automargin = true
    modifiedLayout.yaxis.automargin = true
    if (modifiedLayout.xaxis.title) {
      modifiedLayout.xaxis.title.standoff = 20
    }
    if (modifiedLayout.yaxis.title) {
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

      // Create legend-only plot if needed
      if (hasLegend.value && legendContainer.value) {
          const legendLayout = {
              showlegend: true,
              legend: plotLayout.value.legend,
              margin: {
                  t: 0,
                  b: 0,
                  l: 0,
                  r: 0
              },
              xaxis: {
                  showticklabels: false,
                  showgrid: false,
                  zeroline: false,
                  showline: false
              },
              yaxis: {
                  showticklabels: false,
                  showgrid: false,
                  zeroline: false,
                  showline: false
              }
          }

          // Create empty traces for legend
          const emptyTraces = plotData.value.map(trace => ({
              x: [0],
              y: [0],
              type: trace.type,
              mode: trace.mode,
              showlegend: true,
              name: trace.name,
              line: trace.line,
              marker: trace.marker,
              fill: trace.fill,
              fillcolor: trace.fillcolor,
              hoverinfo: 'none'
          }))

          Plotly.newPlot(
              legendContainer.value,
              emptyTraces,
              legendLayout,
              {
                  ...plotOptions,
                  staticPlot: true
              }
          )
      }

      // Set up resize observers
      resizeObserver = new ResizeObserver(() => {
        updatePlotSize()
        if (hasLegend.value) {
          updateLegendSize()
        }
      })
      resizeObserver.observe(plotContainer.value)
      if (legendContainer.value) {
        resizeObserver.observe(legendContainer.value)
      }
    }
  })
  
  // Update plot when data changes
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

        // Update legend plot if needed
        if (hasLegend.value && legendContainer.value) {
            const legendLayout = {
                showlegend: true,
                legend: plotLayout.value.legend,
                margin: {
                    t: 0,
                    b: 0,
                    l: 0,
                    r: 0
                },
                xaxis: {
                    showticklabels: false,
                    showgrid: false,
                    zeroline: false,
                    showline: false
                },
                yaxis: {
                    showticklabels: false,
                    showgrid: false,
                    zeroline: false,
                    showline: false
                }
            }

            // Create empty traces for legend
            const emptyTraces = plotData.value.map(trace => ({
                x: [0],
                y: [0],
                type: trace.type,
                mode: trace.mode,
                showlegend: true,
                name: trace.name,
                line: trace.line,
                marker: trace.marker,
                fill: trace.fill,
                fillcolor: trace.fillcolor,
                hoverinfo: 'none'
            }))

            Plotly.react(
                legendContainer.value,
                emptyTraces,
                legendLayout,
                {
                    ...plotOptions,
                    staticPlot: true
                }
            )
        }
      }
    },
    { deep: true }
  )
  
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
    display: flex;
    flex-direction: column;
    width: 100%;
    position: relative;
  }
  
  .plotly-title {
    width: 100%;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
    padding: 0 20px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }
  
  .plotly-container-outer {
    width: 100%;
    position: relative;
    padding: 5px;
    padding-bottom: 10px;
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
  
  .plotly-legend-container {
    max-width: 100%;
    width: 100%;
    position: relative;
    margin-top: 10px;
    min-height: 20px;
  }
  
  .plotly-node {
    display: block;
    position: relative;
    width: 100%;
  }
  </style>