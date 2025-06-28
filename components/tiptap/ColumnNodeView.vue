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
              <USelect
                v-model="localWidth"
                :options="widthOptions"
                size="xs"
                @update:model-value="updateWidth"
              />
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
const localWidth = ref(props.node.attrs.width)

const widthOptions = [
  { label: '25%', value: '25%' },
  { label: '33%', value: '33.33%' },
  { label: '50%', value: '50%' },
  { label: '66%', value: '66.66%' },
  { label: '75%', value: '75%' },
  { label: '100%', value: '100%' },
]

const columnStyle = computed(() => {
  console.log('updating columnStyle');
  const style =  {
    flex: `1 1 ${props.node.attrs.width || '0%'}`,
    flexBasis: props.node.attrs.width || '0%',
    minWidth: 0,
    boxSizing: 'border-box',
  }
  if (props.editor.view.editable) {
    style.border = '1px dashed #d1d5db';
  }
  return style;
})

const updateWidth = (width) => {
  props.editor.chain().focus().setColumnWidth(width).run()
}

// Watch for external changes to sync local state
watch(() => props.node.attrs.width, (newWidth) => {
  localWidth.value = newWidth
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
  z-index: 20;
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
  z-index: 20;
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