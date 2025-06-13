<!-- components/Plotly.vue -->
<template>
    <div class="plotly-container" ref="plotContainer"></div>
  </template>
  
  <script setup>
  import { ref, onMounted, watch, computed } from 'vue'
  
  const props = defineProps({
    type: {
      type: String,
      required: true
    },
    data: {
      type: Object,
      required: true
    },
    layout: {
      type: Object,
      default: () => ({})
    }
  })
  
  const plotContainer = ref(null)
  let Plotly = null
  
  const plotData = computed(() => {
    // Handle the nested data structure from Tiptap
    if (Array.isArray(props.data)) {
      return props.data
    }
    // If data is already in the correct format, return it
    if (props.data && props.data.data) {
      return props.data.data
    }
    // Otherwise, wrap the data in the expected format
    return [{
      ...props.data,
      type: props.type
    }]
  })
  
  const plotLayout = computed(() => {
    // Handle the nested layout structure from Tiptap
    if (props.data && props.data.layout) {
      return props.data.layout
    }
    return {
      ...props.layout,
      autosize: true,
      margin: { l: 50, r: 50, t: 50, b: 50 }
    }
  })
  
  const plotOptions = {
    responsive: true,
    displayModeBar: true
  }
  
  // Initialize plot
  onMounted(async () => {
    if (plotContainer.value) {
      // Dynamically import Plotly only on client side
      Plotly = (await import('plotly.js-dist-min')).default
      
      console.log('Plotting with data:', plotData.value)
      console.log('Plotting with layout:', plotLayout.value)
      
      Plotly.newPlot(
        plotContainer.value,
        plotData.value,
        plotLayout.value,
        plotOptions
      )
    }
  })
  
  // Update plot when data changes
  watch(
    () => [plotData.value, plotLayout.value],
    async () => {
      if (plotContainer.value && Plotly) {
        console.log('Updating plot with data:', plotData.value)
        console.log('Updating plot with layout:', plotLayout.value)
        
        Plotly.react(
          plotContainer.value,
          plotData.value,
          plotLayout.value,
          plotOptions
        )
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
  .plotly-container {
    width: 100%;
    min-height: 300px;
    margin: 1rem 0;
  }
  </style>