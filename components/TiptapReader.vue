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

    const { init_content } = defineProps(['init_content'])

    const editor = useEditor({
      content: init_content,
      editable: false,
      extensions: [StarterKit, Blockquote, 
        Table, TableCell, TableHeader, TableRow, 
        Image, ImageResize, Underline, 
        mathExtension],
    })

    onBeforeUnmount(() => {
        unref(editor).destroy();
    });

</script>

<template>
    <div class='tiptap-container'>
        <editor-content :editor="editor" />
    </div>
</template>

<style scoped>


.tiptap-container :deep(.tiptap) {

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

  
}


</style>