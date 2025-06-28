<template>
  <node-view-wrapper class="columns-node" :class="{ 'is-editable': props.editor.view.editable }">
    <div 
      class="columns-container"
      :style="columnsContainerStyle"
    >
      <!-- Columns content -->
      <node-view-content class="columns-content"
        :style="columnsStyle"
      />
      
      <!-- Editing UI - only show in edit mode -->
      <div v-if="props.editor.view.editable" class="columns-editing-ui">
        <div class="columns-controls">
          <UButton
            size="xs"
            variant="ghost"
            @click="addColumn"
            class="add-column-btn"
            title="Add Column"
          >
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="columns-btn-svg">
              <circle cx="10" cy="10" r="9" fill="#e0e7ff"/>
              <rect x="9" y="5" width="2" height="10" rx="1" fill="#2563eb"/>
              <rect x="5" y="9" width="10" height="2" rx="1" fill="#2563eb"/>
            </svg>
          </UButton>
          <UButton
            size="xs"
            variant="ghost"
            @click="showControls = !showControls"
            class="columns-settings-btn"
            title="Column Settings"
          >
            <svg width="16" height="16" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" class="columns-btn-svg">
              <circle cx="11" cy="5.5" r="1.5" fill="#2563eb"/>
              <circle cx="11" cy="11" r="1.5" fill="#2563eb"/>
              <circle cx="11" cy="16.5" r="1.5" fill="#2563eb"/>
            </svg>
          </UButton>
          <div v-if="showControls" class="columns-controls-panel">
            <div class="control-group">
              <label>Gap between columns:</label>
              <USelect
                v-model="localGap"
                :options="gapOptions"
                size="xs"
                @update:model-value="updateGap"
              />
            </div>
            <div class="control-group">
              <label>Vertical Alignment:</label>
              <USelect
                v-model="localAlignItems"
                :options="alignItemsOptions"
                size="xs"
                @update:model-value="updateAlignItems"
              />
            </div>
            <div class="control-group">
              <label>Max Width (px):</label>
              <UInput
                v-model="localMaxWidth"
                type="number"
                min="0"
                size="xs"
                placeholder="No max width"
                @change="onMaxWidthChange"
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
const localGap = ref(props.node.attrs.gap)
const localAlignItems = ref(props.node.attrs.alignItems || 'stretch')
const localMaxWidth = ref(props.node.attrs.maxWidth || '')

const gapOptions = [
  { label: 'None', value: '0' },
  { label: 'Small (0.5rem)', value: '0.5rem' },
  { label: 'Medium (1rem)', value: '1rem' },
  { label: 'Large (1.5rem)', value: '1.5rem' },
  { label: 'Extra Large (2rem)', value: '2rem' },
]

const alignItemsOptions = [
  { label: 'Top', value: 'flex-start' },
  { label: 'Center', value: 'center' },
  { label: 'Bottom', value: 'flex-end' },
  { label: 'Stretch', value: 'stretch' },
]

const columnsContainerStyle = computed(() => {
  const style = {
  }
  if (props.node.attrs.maxWidth) {
    style.maxWidth = props.node.attrs.maxWidth + 'px'
  } else {
    style.maxWidth = '100%'
  }
  if (props.editor.view.editable) {
    style.paddingTop = '1.8rem';
    style.border = '2px dashed #e5e7eb';
    style.borderRadius = '0.5rem';
    style.backgroundColor = '#f8fafc';
    
  }
  return style;
})

const columnsStyle = computed(() => {
  console.log('updating columnsStyle');
  console.log(props.node.attrs.alignItems);
  console.log(props.node.attrs.maxWidth);
  const style = {
    gap: props.node.attrs.gap || '1rem',
    display: 'flex',
    minHeight: '10px',
    boxSizing: 'border-box',
    width: '100%',
    position: 'relative',
    alignItems: props.node.attrs.alignItems || 'stretch',
  }
  
  
  console.log('columnsStyle:')
  console.log(style);
  return style;
})

const addColumn = () => {
  props.editor.chain().focus().addColumn().run()
}

const updateGap = (gap) => {
  props.editor.chain().focus().setColumnsGap(gap).run()
}

const updateAlignItems = (align) => {
  props.editor.chain().focus().setNodeSelection(props.getPos()).setColumnsAlignItems(align).run()
}

const onMaxWidthChange = (e) => {
  let val = parseInt(localMaxWidth.value)
  if (isNaN(val) || val <= 0) val = null
  props.editor.chain().focus().setColumnsMaxWidth(val).run()
}

// Watch for external changes to sync local state
watch(() => props.node.attrs.gap, (newGap) => {
  localGap.value = newGap
})

watch(() => props.node.attrs.alignItems, (newVal) => {
  localAlignItems.value = newVal || 'stretch'
})

watch(() => props.node.attrs.maxWidth, (newVal) => {
  localMaxWidth.value = newVal || ''
})
</script>

<style scoped>
.columns-node {
  position: relative;
  margin: 1rem 0;
}

.columns-content {
  width: 100%;
  position: relative;
}

.columns-container {
  /* Remove flex styles from here */
  width: 100%;
  position: relative;
  display: inline-block;
}

.columns-container > :deep([data-node-view-content]) {
  /* Remove static gap and layout styles, now handled by columnsStyle */
}

.columns-editing-ui {
  position: absolute;
  top: 0.25rem;
  right: 0.25rem;
  z-index: 10;
  display: flex;
  gap: 0.25rem;
}

.add-column-btn,
.columns-settings-btn {
  background-color: #e0e7ff !important;
  border: none !important;
  box-shadow: none !important;
  border-radius: 50%;
  padding: 0 !important;
  width: 1.4rem;
  height: 1.4rem;
  min-width: 1.4rem;
  min-height: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.8;
  transition: opacity 0.2s, background 0.2s;
}

.add-column-btn:hover,
.columns-settings-btn:hover {
  opacity: 1;
  background-color: #c7d2fe !important;
}

.columns-btn-svg {
  width: 1.1rem;
  height: 1.1rem;
  display: block;
}

.columns-controls {
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 0.25rem;
}

.columns-controls-panel {
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