<!-- components/PlotlyModal.vue -->
<template>
    <UModal v-model="isOpen">
      <div class="p-4">
        <h3 class="text-lg font-semibold mb-4">{{ isEditing ? 'Edit Plot' : 'Add Plot' }}</h3>
        
        <div class="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label class="block text-sm font-medium mb-2">Width (px)</label>
            <UInput
              v-model="width"
              type="number"
              placeholder="e.g., 600"
            />
          </div>
          <div>
            <label class="block text-sm font-medium mb-2">Height (px)</label>
            <UInput
              v-model="height"
              type="number"
              placeholder="e.g., 400"
            />
          </div>
        </div>
  
        <div class="mb-4">
          <label class="block text-sm font-medium mb-2">Plot Data (JSON)</label>
          <UTextarea
            v-model="plotData"
            rows="6"
            class="w-full font-mono"
            placeholder='{
    "data": [{
      "x": [1, 2, 3, 4],
      "y": [10, 15, 13, 17],
      "type": "scatter"
    }],
    "layout": {
      "title": "My Plot"
    }
  }'
          />
        </div>
  
        <div class="flex justify-end gap-2">
          <UButton
            variant="outline"
            @click="close"
          >
            Cancel
          </UButton>
          <UButton
            @click="savePlot"
          >
            {{ isEditing ? 'Update Plot' : 'Add Plot' }}
          </UButton>
        </div>
      </div>
    </UModal>
  </template>
  
  <script setup>
  const props = defineProps({
    modelValue: Boolean,
    editData: {
      type: Object,
      default: null
    }
  })
  
  const emit = defineEmits(['update:modelValue', 'save'])
  
  const isOpen = computed({
    get: () => props.modelValue,
    set: (value) => emit('update:modelValue', value)
  })

  const isEditing = computed(() => !!props.editData)
  
  const plotData = ref('')
  const width = ref('600')  // Default width
  const height = ref('400') // Default height

  // Watch for editData changes to populate the form
  watch(() => props.editData, (newData) => {
    if (newData) {
      plotData.value = JSON.stringify({
        data: newData.data.data,
        layout: newData.data.layout
      }, null, 2)
      width.value = newData.width.toString()
      height.value = newData.height.toString()
    }
  }, { immediate: true })
  
  const close = () => {
    plotData.value = ''
    width.value = '600'
    height.value = '400'
    isOpen.value = false
  }
  
  const savePlot = () => {
    try {
      const data = JSON.parse(plotData.value)
      emit('save', {
        data: data,
        width: parseInt(width.value) || 600,
        height: parseInt(height.value) || 400
      })
      close()
    } catch (e) {
      // Handle JSON parse error
      console.error('Invalid JSON:', e)
    }
  }
  </script>