<script setup>
    import 'katex/dist/katex.min.css'
    import { useEditor, EditorContent } from '@tiptap/vue-3'
    import StarterKit from '@tiptap/starter-kit'
    //import { Mathematics } from '@tiptap-pro/extension-mathematics'
    import Image from '@tiptap/extension-image'
    import Underline from '@tiptap/extension-underline'
    import ImageResize from 'tiptap-extension-resize-image';
    import mathExtension from '~/assets/modules/tiptap-extensions/math/math-extension.js';

    const { init_content } = defineProps(['init_content'])

    const editor = useEditor({
      content: init_content,
      editable: false,
      extensions: [StarterKit, 
        mathExtension,
        Image, ImageResize, Underline],
    })

    onBeforeUnmount(() => {
        unref(editor).destroy();
    });

</script>

<template>
    <editor-content :editor="editor" />
</template>

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
}


</style>