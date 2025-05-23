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
                icon="i-lucide-quote"
                @click="editor.chain().focus().toggleBlockquote().run()"
                :variant="editor.isActive('blockquote') ? 'solid' : 'outline'"
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
                @click="addMathClick"
                variant="outline"
                size="2xs"
            ></UButton>
            
            
        </div>
        <editor-content :editor="editor" />
        <UModal v-model="addTableOpen">
            <AddTableModal @addTable="addTable" />
        </UModal>
        <MathEditorModal
            v-model="addMathOpen"
            :initial-value="selectedAddMathText"
            @save="addMath"
        />
    </div>
</template>


  
<script setup>
    import 'katex/dist/katex.min.css'
    import { useEditor, EditorContent } from '@tiptap/vue-3'
    import StarterKit from '@tiptap/starter-kit'
    //import { Mathematics } from '@tiptap-pro/extension-mathematics'
    import Image from '@tiptap/extension-image'
    import Underline from '@tiptap/extension-underline'
    import Blockquote from '@tiptap/extension-blockquote'
    import ImageResize from 'tiptap-extension-resize-image';
    import Table from '@tiptap/extension-table'
    import TableCell from '@tiptap/extension-table-cell'
    import TableHeader from '@tiptap/extension-table-header'
    import TableRow from '@tiptap/extension-table-row'
    import mathExtension from '~/assets/modules/tiptap-extensions/math/math-extension.js';
    import AddTableModal from '~/components/AddTableModal.vue';
    import MathEditorModal from '~/components/MathEditorModal.vue';


    const { init_content } = defineProps(['init_content'])

    const addTableOpen = ref(false);
    const addMathOpen = ref(false);
    const selectedAddMathText = ref('');


  
    const editor = useEditor({
      content: init_content,
      extensions: [StarterKit, 
        Image, ImageResize, Underline, Blockquote, 
        Table.configure({
          resizable: true
        }), TableCell, TableHeader, TableRow, mathExtension],
    })

    const addImage = () => {
      const url = window.prompt('Enter the URL of the image:')
      if (url) {
        editor.value.chain().focus().setImage({ src: url }).run()
      }
    }

    const addMathClick = () => {
      // Get the selected text from the editor
      const { from, to } = editor.value.state.selection;
      if (from !== to) {
          selectedAddMathText.value = editor.value.state.doc.textBetween(from, to)
              .replace(/\$latex_start/g, '')
              .replace(/\$latex_end/g, '')
              .trim();
      } else {
          selectedAddMathText.value = '';
      }
      addMathOpen.value = true;
    }

    const addMath = (latex) => {
      editor.value.chain().focus().addMathComponent({ latex }).run()
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

  blockquote {
    border-left: 3px solid;
    margin: 1.5rem 0;
    padding-left: 1rem;
    @apply border-l-gray-300;
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
