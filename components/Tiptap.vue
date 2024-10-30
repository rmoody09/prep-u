<template>
    <div class='tiptap-container'>
        <div v-if="editor">
            <UButton 
                icon="i-lucide-bold"
                @click="editor.chain().focus().toggleBold().run()"
                :variant="editor.isActive('bold') ? 'solid' : 'outline'"
                size="2xs"
            ></UButton>
            <UButton 
                icon="i-lucide-italic"
                @click="editor.chain().focus().toggleItalic().run()"
                :variant="editor.isActive('italic') ? 'solid' : 'outline'"
                size="2xs"
            ></UButton>
            
            <UButton 
                icon="i-lucide-image"
                @click="addImage"
                variant="outline"
                size="2xs"
            ></UButton>
            
            <UButton 
                icon="i-lucide-list"
                @click="editor.chain().focus().toggleBulletList().run()"
                :variant="editor.isActive('bulletList') ? 'solid' : 'outline'"
                size="2xs"
            ></UButton>
            
            <UButton 
                icon="i-lucide-underline"
                @click="editor.chain().focus().toggleUnderline().run()"
                :variant="editor.isActive('underline') ? 'solid' : 'outline'"
                size="2xs"
            ></UButton>
            <UButton 
                icon="i-lucide-table"
                @click="addTableClick"
                variant="outline"
                size="2xs"
            ></UButton>
            <UButton 
                icon="i-lucide-square-radical"
                @click="addMath"
                variant="outline"
                size="2xs"
            ></UButton>
            
            
        </div>
        <editor-content :editor="editor" />
        <UModal v-model="addTableOpen">
            <AddTableModal @addTable="addTable" />
        </UModal>
    </div>
</template>


  
<script setup>
    import 'katex/dist/katex.min.css'
    import { useEditor, EditorContent } from '@tiptap/vue-3'
    import StarterKit from '@tiptap/starter-kit'
    //import { Mathematics } from '@tiptap-pro/extension-mathematics'
    import Image from '@tiptap/extension-image'
    import Underline from '@tiptap/extension-underline'
    import ImageResize from 'tiptap-extension-resize-image';
    import Table from '@tiptap/extension-table'
    import TableCell from '@tiptap/extension-table-cell'
    import TableHeader from '@tiptap/extension-table-header'
    import TableRow from '@tiptap/extension-table-row'
    import mathExtension from '~/assets/modules/tiptap-extensions/math/math-extension.js';
    import AddTableModal from '~/components/AddTableModal.vue';


    const { init_content } = defineProps(['init_content'])

    const addTableOpen = ref(false);


  
    const editor = useEditor({
      content: init_content,
      extensions: [StarterKit, 
        Image, ImageResize, Underline, Table.configure({
          resizable: true
        }), TableCell, TableHeader, TableRow, mathExtension],
    })

    const addImage = () => {
      const url = window.prompt('Enter the URL of the image:')
      if (url) {
        editor.value.chain().focus().setImage({ src: url }).run()
      }
    }

    const addMath = () => {
      const math = window.prompt('Enter the latex math:')
      if (math) {
        editor.value.chain().focus().addMathComponent({ latex: math }).run()
      }
    }

    const addTableClick = () => {
      addTableOpen.value = true;
    }

    const addTable = (table) => {
      editor.value.chain().focus().insertTable({
        rows: table.rows,
        cols: table.columns,
        withHeaderRow: table.includeHeader
      }).run()
      addTableOpen.value = false;
    }
    
    onBeforeUnmount(() => {
        unref(editor).destroy();
    });


    defineExpose({
        editor
    });

  </script>

<style scoped>


.tiptap-container :deep(.tiptap) {
    border: solid 1px gray;
    border-radius: 5px;
    padding: 1rem;

    ul, ol {
        padding: 0 1rem;
        list-style-type: disc;

        li p {
        margin-top: 0.25em;
        margin-bottom: 0.25em;
        }

    
  }

  ul ul {
    list-style-type: circle;
  }

  ul ul ul {
    list-style-type: square;
  }

  table {
    border-collapse: collapse;
    margin: 0;
    overflow: hidden;
    table-layout: fixed;
    width: 100%;

    td,
    th {
      border: 1px solid;
      @apply border-gray-300;
      box-sizing: border-box;
      min-width: 1em;
      padding: 6px 8px;
      position: relative;
      vertical-align: top;

      > * {
        margin-bottom: 0;
      }
    }

    th {
      background-color: #e0e0e0;
      @apply bg-gray-100;
      font-weight: bold;
      text-align: left;
    }

    .selectedCell:after {
      @apply bg-gray-200;
      content: "";
      left: 0; right: 0; top: 0; bottom: 0;
      pointer-events: none;
      position: absolute;
      z-index: 2;
    }

    .column-resize-handle {
      background-color: purple;
      bottom: -2px;
      pointer-events: none;
      position: absolute;
      right: -2px;
      top: 0;
      width: 4px;
    }
  }

  .tableWrapper {
    margin: 1.5rem 0;
    overflow-x: auto;
  }

  &.resize-cursor {
    cursor: ew-resize;
    cursor: col-resize;
  }

}


</style>
