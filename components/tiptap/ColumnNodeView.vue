<template>
  <node-view-wrapper class="column-node" :style="columnStyle">
    <div 
      class="column-container"
    >
      <!-- Column content -->
      <node-view-content />
      
      <!-- Editing UI - only show in edit mode -->
      <div v-if="props.editor.view.editable" class="column-editing-ui">
        <div class="column-controls">
          <UButton
            size="xs"
            variant="ghost"
            @click="showControls = !showControls"
            class="column-settings-btn"
            title="Column Settings"
          >
            <svg width="16" height="16" viewBox="0 0 22 22" fill="none"
                 xmlns="http://www.w3.org/2000/svg" class="column-settings-svg">
              <circle cx="11" cy="5.5" r="1.5" fill="currentColor"/>
              <circle cx="11" cy="11" r="1.5" fill="currentColor"/>
              <circle cx="11" cy="16.5" r="1.5" fill="currentColor"/>
            </svg>
          </UButton>
          <div v-if="showControls" class="column-controls-panel">
            <div class="control-group">
              <label>Width:</label>
              <div class="flex gap-2 items-center">
                <UInput
                  v-model="localWidthValue"
                  type="number"
                  size="xs"
                  min="0"
                  style="width: 5rem;"
                  :disabled="localWidthUnit === 'content'"
                  v-if="localWidthUnit !== 'content'"
                />
                <span v-else class="text-sm text-gray-500" style="width: 5rem;">content</span>
                <USelect
                  v-model="localWidthUnit"
                  :options="widthUnitOptions"
                  size="xs"
                  style="width: 4rem;"
                />
              </div>
            </div>
            <div class="control-group flex gap-4 items-center">
              <UCheckbox v-model="localGrow" label="Grow" size="xs" />
              <UCheckbox v-model="localShrink" label="Shrink" size="xs" />
            </div>
            <div class="flex justify-end mt-2">
              <UButton size="xs" color="primary" @click="applyColumnSettings">Apply</UButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </node-view-wrapper>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { nodeViewProps, NodeViewWrapper, NodeViewContent } from '@tiptap/vue-3'

const props = defineProps(nodeViewProps)

const showControls = ref(false)

// Width value and unit
const widthUnitOptions = [
  { label: '%', value: '%' },
  { label: 'px', value: 'px' },
  { label: 'content', value: 'content' },
]
const parseWidth = (width) => {
  if (!width) return { value: '', unit: '%' }
  if (width === 'content') return { value: 'content', unit: 'content' }
  if (width.endsWith('px')) return { value: parseInt(width), unit: 'px' }
  if (width.endsWith('%')) return { value: parseFloat(width), unit: '%' }
  return { value: width, unit: '%' }
}
const initialWidth = parseWidth(props.node.attrs.flexBasis)
const localWidthValue = ref(initialWidth.value)
const localWidthUnit = ref(initialWidth.unit)

const localGrow = ref(props.node.attrs.grow !== undefined ? props.node.attrs.grow : true)
const localShrink = ref(props.node.attrs.shrink !== undefined ? props.node.attrs.shrink : true)

const applyColumnSettings = () => {
  let width
  if (localWidthUnit.value === 'content') {
    width = 'content'
  } else {
    width = localWidthValue.value ? localWidthValue.value + localWidthUnit.value : ''
  }
  props.editor
    .chain()
    .setNodeSelection(props.getPos())
    .setColumnFlexBasis(width)
    .setColumnFlex({
      grow: localGrow.value,
      shrink: localShrink.value
    })
    .run()
  showControls.value = false
}

const columnStyle = computed(() => {
  const grow = props.node.attrs.grow !== undefined ? (props.node.attrs.grow ? 1 : 0) : 1
  const shrink = props.node.attrs.shrink !== undefined ? (props.node.attrs.shrink ? 1 : 0) : 1
  const basis = props.node.attrs.flexBasis || '0%'
  const style = {
    flex: `${grow} ${shrink} ${basis}`,
    flexBasis: basis,
    minWidth: 0,
    boxSizing: 'border-box',
    border: props.editor.view.editable ? '1px dashed #d1d5db' : undefined,
  }
  if (props.editor.view.editable) {
    style.border = '1px dashed #d1d5db';
  }
  return style;
})

// Watch for external changes to sync local state
watch(() => props.node.attrs.flexBasis, (newWidth) => {
  const parsed = parseWidth(newWidth)
  localWidthValue.value = parsed.value
  localWidthUnit.value = parsed.unit
})
watch(() => props.node.attrs.grow, (newGrow) => {
  localGrow.value = newGrow !== undefined ? newGrow : true
})
watch(() => props.node.attrs.shrink, (newShrink) => {
  localShrink.value = newShrink !== undefined ? newShrink : true
})
</script>

<style scoped>
.column-node {
  position: relative;
  display: inline-block;
  vertical-align: top;
  min-height: 10px;
  box-sizing: border-box;
}

.column-container {
  position: relative;
  
  
}

.column-editing-ui {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  z-index: 9;
}

.column-controls {
  position: relative;
}

.column-settings-btn {
  background-color: #e0e7ff !important;
  border: none !important;
  box-shadow: none !important;
  border-radius: 50%;
  padding: 0 !important;
  width: 1rem;
  height: 1rem;
  min-width: 1rem;
  min-height: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.8;
  transition: opacity 0.2s, background 0.2s;
}

.column-settings-btn:hover {
  opacity: 1;
  background-color: #c7d2fe !important;
}

.column-settings-svg {
  color: #2563eb;
  width: 1rem;
  height: 1rem;
  display: block;
}

.column-controls-panel {
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  padding: 0.75rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  min-width: 200px;
  z-index: 9;
}

.control-group {
  margin-bottom: 0.75rem;
}

.control-group:last-child {
  margin-bottom: 0;
}

.control-group label {
  display: block;
  font-size: 0.75rem;
  font-weight: 500;
  color: #374151;
  margin-bottom: 0.25rem;
}


</style> 