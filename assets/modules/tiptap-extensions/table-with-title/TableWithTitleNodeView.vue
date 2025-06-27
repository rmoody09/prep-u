<template>
  <node-view-wrapper class="table-with-title-wrapper">
    <div class="table-with-title-container">
      <node-view-content />
    </div>
  </node-view-wrapper>
</template>

<script setup>
import { nodeViewProps, NodeViewWrapper, NodeViewContent } from '@tiptap/vue-3'

const props = defineProps(nodeViewProps)
</script>

<style scoped>
.table-with-title-container {
  display: inline-block;
  text-align: center;
  width: auto;
  margin-left: auto;
  margin-right: auto;
}

/* Reduce gap between title and table */
.table-with-title-container :deep(.tableWrapper) {
  margin-top: 0 !important;
}

</style> 