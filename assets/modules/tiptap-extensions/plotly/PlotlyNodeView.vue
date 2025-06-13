<!-- components/PlotlyNodeView.vue -->
<template>
        <node-view-wrapper class="plotly-node">
            <div class="plotly-wrapper"
                :style="wrapperStyle"
            >
                <div 
                    v-if="plotLayout?.title?.text"
                    class="plotly-title"
                >
                    {{ plotLayout.title.text }}
                </div>
                <div 
                    class="plotly-container" 
                    ref="plotContainer"
                    :style="plotContainerStyle"
                ></div>
                <div 
                    v-if="hasLegend"
                    class="plotly-legend-container" 
                    ref="legendContainer"
                    :style="legendContainerStyle"
                ></div>
            </div>
        </node-view-wrapper>
  </template>
  
  <script setup>
  import { ref, onMounted, watch, computed } from 'vue'
  import { nodeViewProps, NodeViewWrapper } from '@tiptap/vue-3'
  
  const props = defineProps(nodeViewProps)
  const plotContainer = ref(null)
  const legendContainer = ref(null)
  let Plotly = null
  
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

  const plotContainerStyle = computed(() => {
    const width = props.node.attrs.width || 400
    const height = props.node.attrs.height || 300
    return {
      width: '100%',
      minHeight: `${height}px`,
    }
  })
  
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
    staticPlot: false,
    editable: false
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
      const layoutWithoutTitle = { ...plotLayout.value }
      delete layoutWithoutTitle.title
      
      // Remove legend from main plot
      layoutWithoutTitle.showlegend = false
      
      // Adjust margins to remove extra top padding
      if (layoutWithoutTitle.margin) {
          layoutWithoutTitle.margin = {
              ...layoutWithoutTitle.margin,
              t: 20  // Reduced top margin since we handle title separately
          }
      }
      
      console.log('Plotting with data:', plotData.value)
      console.log('Plotting with layout:', layoutWithoutTitle)
      
      Plotly.newPlot(
        plotContainer.value,
        plotData.value,
        layoutWithoutTitle,
        plotOptions
      )

      // Create legend-only plot if needed
      if (hasLegend.value && legendContainer.value) {
          const legendLayout = {
              showlegend: true,
              legend: {
                  orientation: 'h',
                  y: 0.5,
                  x: 0.5,
                  xanchor: 'center',
                  yanchor: 'middle'
              },
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
    }
  })
  
  // Update plot when data changes
  watch(
    () => [plotData.value, plotLayout.value],
    async () => {
      if (plotContainer.value && Plotly) {
        // Remove title from layout since we're handling it separately
        const layoutWithoutTitle = { ...plotLayout.value }
        delete layoutWithoutTitle.title
        
        // Remove legend from main plot
        layoutWithoutTitle.showlegend = false
        
        // Adjust margins to remove extra top padding
        if (layoutWithoutTitle.margin) {
            layoutWithoutTitle.margin = {
                ...layoutWithoutTitle.margin,
                t: 20  // Reduced top margin since we handle title separately
            }
        }
        
        console.log('Updating plot with data:', plotData.value)
        console.log('Updating plot with layout:', layoutWithoutTitle)
        
        Plotly.react(
          plotContainer.value,
          plotData.value,
          layoutWithoutTitle,
          plotOptions
        )

        // Update legend plot if needed
        if (hasLegend.value && legendContainer.value) {
            const legendLayout = {
                showlegend: true,
                legend: {
                    orientation: 'h',
                    y: 0.5,
                    x: 0.5,
                    xanchor: 'center',
                    yanchor: 'middle'
                },
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
  
  .plotly-container {
    max-width: 100%;
    position: relative;
    overflow: visible;
  }
  
  .plotly-legend-container {
    max-width: 100%;
    position: relative;
    margin-top: 10px;
  }
  
  .plotly-node {
    display: block;
    position: relative;
    width: 100%;
  }
  </style>