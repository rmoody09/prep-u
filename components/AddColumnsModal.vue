<template>
  <UCard>
    <template #header>
      <div class="flex justify-between items-center w-full">
        <h3 class="text-lg font-semibold">Add Columns</h3>
        <UButton
          color="gray"
          variant="ghost"
          icon="i-heroicons-x-mark"
          @click="$emit('close')"
        />
      </div>
    </template>
    
    <div class="p-4 space-y-4">
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">
          Number of Columns
        </label>
        <USelect
          v-model="columnCount"
          :options="columnCountOptions"
          placeholder="Select number of columns"
        />
      </div>
      
      <div v-if="columnCount > 1">
        <label class="block text-sm font-medium text-gray-700 mb-2">
          Column Widths
        </label>
        <div class="space-y-2">
          <div
            v-for="(width, index) in columnWidths"
            :key="index"
            class="flex items-center gap-2"
          >
            <span class="text-sm text-gray-600 w-8">Column {{ index + 1 }}:</span>
            <USelect
              v-model="columnWidths[index]"
              :options="widthOptions"
              size="sm"
              class="flex-1"
            />
          </div>
        </div>
      </div>
      
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">
          Gap Between Columns
        </label>
        <USelect
          v-model="gap"
          :options="gapOptions"
          placeholder="Select gap size"
        />
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">
          Max Width (px)
        </label>
        <UInput
          v-model="maxWidth"
          type="number"
          min="0"
          placeholder="No max width"
        />
      </div>
    </div>
    
    <template #footer>
      <div class="flex justify-end gap-2">
        <UButton
          color="gray"
          variant="outline"
          @click="$emit('close')"
        >
          Cancel
        </UButton>
        <UButton
          color="primary"
          @click="addColumns"
        >
          Add Columns
        </UButton>
      </div>
    </template>
  </UCard>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

const emit = defineEmits(['close', 'addColumns'])

const columnCount = ref(2)
const gap = ref('1rem')
const maxWidth = ref('')

const columnCountOptions = [
  { label: '2 Columns', value: 2 },
  { label: '3 Columns', value: 3 },
  { label: '4 Columns', value: 4 },
]

const widthOptions = [
  { label: '25%', value: '25%' },
  { label: '33%', value: '33.33%' },
  { label: '50%', value: '50%' },
  { label: '66%', value: '66.66%' },
  { label: '75%', value: '75%' },
  { label: '100%', value: '100%' },
]

const gapOptions = [
  { label: 'None', value: '0' },
  { label: 'Small (0.5rem)', value: '0.5rem' },
  { label: 'Medium (1rem)', value: '1rem' },
  { label: 'Large (1.5rem)', value: '1.5rem' },
  { label: 'Extra Large (2rem)', value: '2rem' },
]

const columnWidths = ref(['50%', '50%'])

// Update column widths when column count changes
watch(columnCount, (newCount) => {
  const newWidths = []
  const equalWidth = `${100 / newCount}%`
  
  for (let i = 0; i < newCount; i++) {
    newWidths.push(equalWidth)
  }
  
  columnWidths.value = newWidths
})

const addColumns = () => {
  console.log('addColumns from modal');
  console.log('maxWidth:');
  console.log(maxWidth.value);
  emit('addColumns', {
    columnCount: columnCount.value,
    widths: columnWidths.value,
    gap: gap.value,
    maxWidth: maxWidth.value ? parseInt(maxWidth.value) : null
  })
  emit('close')
}
</script> 