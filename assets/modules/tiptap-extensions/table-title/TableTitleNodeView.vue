<template>
  <node-view-wrapper class="table-title-node">
    <div 
      class="table-title"
      :contenteditable="props.editor.view.editable"
      @click="handleClick"
    >
      <node-view-content />
    </div>
  </node-view-wrapper>
</template>

<script setup>
import { nodeViewProps, NodeViewWrapper, NodeViewContent } from '@tiptap/vue-3'

const props = defineProps(nodeViewProps)

const handleClick = () => {
  if (!props.editor.view.editable) return
  // You could add editing functionality here if needed
}
</script>

<style scoped>
.table-title {
  text-align: center;
  font-size: 1.1em;
  font-weight: 400;
  margin-bottom: 0.5em;
}

.table-title:empty::before {
  content: 'Table Title';
  color: #6c757d;
  font-style: italic;
}
</style> 