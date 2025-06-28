<script setup>
import Tiptap from '~/components/Tiptap.vue'
import TiptapReader from '~/components/TiptapReader.vue'

const outputFormat = ref('html') // 'html', 'json', or 'visualize'
const output = ref('')
const showOutput = ref(false)
const editorRef = useTemplateRef('editor');
const readerContent = ref('');

const getOutput = () => {
    console.log('getOutput:')
  if (!editorRef.value) return
  console.log('editorRef is defined');
  console.log(outputFormat.value);
  if (outputFormat.value === 'html') {
    console.log(editorRef.value.editor.getHTML());
    output.value = editorRef.value.editor.getHTML()
    showOutput.value = true
  } else if (outputFormat.value === 'json') {
    output.value = JSON.stringify(editorRef.value.editor.getJSON(), null, 2)
    showOutput.value = true
  } else if (outputFormat.value === 'visualize') {
    showOutput.value = true
    console.log('html:')
    console.log(editorRef.value.editor.getHTML());
    readerContent.value = editorRef.value.editor.getHTML()
  }
}

const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(output.value)
    alert('Copied to clipboard!')
  } catch (err) {
    console.error('Failed to copy:', err)
  }
}
</script>

<template>
  <div class="tiptap-output-container">
    <!-- Editor Section -->
    <div class="editor-section">
      <Tiptap 
        ref="editor"
        :init_content="''"
      />
    </div>

    <!-- Output Controls -->
    <div class="output-controls">
      <USelect
        v-model="outputFormat"
        :options="[
          { label: 'HTML', value: 'html' },
          { label: 'JSON', value: 'json' },
          { label: 'Visualize', value: 'visualize' }
        ]"
        size="sm"
      />
      <UButton
        @click="getOutput"
        icon="i-lucide-code"
        size="sm"
      >
        Get Output
      </UButton>
    </div>

    <!-- Visualize Output -->
    <div v-if="showOutput && outputFormat === 'visualize'" class="visualize-section">
      <div class="output-header">
        <h3 class="text-lg font-bold pb-2">Visualized Output</h3>
      </div>
      <TiptapReader :init_content="readerContent" :key="readerContent" />
    </div>

    <!-- Output Display -->
    <div v-if="showOutput && outputFormat !== 'visualize'" class="output-section">
      <div class="output-header">
        <h3>{{ outputFormat.toUpperCase() }} Output</h3>
        <UButton
          @click="copyToClipboard"
          icon="i-lucide-copy"
          size="xs"
        >
          Copy
        </UButton>
      </div>
      <pre class="output-content">{{ output }}</pre>
    </div>
  </div>
</template>

<style scoped>
.tiptap-output-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
}

.editor-section {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.output-controls {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.output-section {
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  padding: 1rem;
}

.visualize-section {
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  padding: 1rem;
}

.output-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.output-content {
  background-color: #f8fafc;
  padding: 1rem;
  border-radius: 0.25rem;
  overflow-x: auto;
  white-space: pre-wrap;
  word-wrap: break-word;
}
</style>
