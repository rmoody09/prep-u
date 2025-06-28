<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Test Columns Functionality</h1>
    
    <div class="mb-4">
      <h2 class="text-lg font-semibold mb-2">Editor with Columns</h2>
      <Tiptap 
        ref="editor"
        :init_content="testContent"
      />
    </div>
    
    <div class="mb-4">
      <h2 class="text-lg font-semibold mb-2">Read-only Output</h2>
      <TiptapReader 
        :init_content="editorContent"
      />
    </div>
    
    <div class="mb-4">
      <h2 class="text-lg font-semibold mb-2">HTML Output</h2>
      <pre class="bg-gray-100 p-4 rounded text-sm overflow-x-auto">{{ htmlOutput }}</pre>
    </div>
  </div>
</template>

<script setup>
import Tiptap from '~/components/Tiptap.vue'
import TiptapReader from '~/components/TiptapReader.vue'

const editor = ref(null)
const editorContent = ref('')
const htmlOutput = ref('')

const testContent = `
<h1>Test Document with Columns</h1>
<p>This is a test document to verify the columns functionality works correctly.</p>
<p>Try clicking the columns button in the toolbar to add columns!</p>
`

// Watch for changes in the editor content
watch(() => editor.value?.editor?.getHTML(), (newHtml) => {
  if (newHtml) {
    editorContent.value = newHtml
    htmlOutput.value = newHtml
  }
}, { immediate: true })
</script> 