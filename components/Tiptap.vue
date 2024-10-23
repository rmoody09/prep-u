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
            
        </div>
        <editor-content :editor="editor" />
    </div>
</template>


  
<script setup>
    import 'katex/dist/katex.min.css'
    import { useEditor, EditorContent } from '@tiptap/vue-3'
    import StarterKit from '@tiptap/starter-kit'
    import { Mathematics } from '@tiptap-pro/extension-mathematics'
    import Image from '@tiptap/extension-image'
    import Underline from '@tiptap/extension-underline'
    import ImageResize from 'tiptap-extension-resize-image';


    const { init_content } = defineProps(['init_content'])


  
    const editor = useEditor({
      content: init_content,
      extensions: [StarterKit, 
        Mathematics.configure({delimiters: 'bracket'}), 
        Image, ImageResize, Underline],
    })

    const addImage = () => {
      const url = window.prompt('Enter the URL of the image:')
      if (url) {
        editor.value.chain().focus().setImage({ src: url }).run()
      }
    }

    onBeforeUnmount(() => {
        unref(editor).destroy();
    });

    const testVal = "test";

    defineExpose({
        testVal, 
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
}

.tiptap-container :deep(.Tiptap-mathematics-editor) {
    background: #202020;
    color: #fff;
    font-family: monospace;
    padding: 0.2rem 0.5rem;
}

.tiptap-container :deep(.Tiptap-mathematics-render) {
    padding: 0 0.25rem;

    &--editable {
        cursor: pointer;
        transition: background 0.2s;

        &:hover {
            background: #eee;
        }
    }
}

.tiptap-container :deep(.Tiptap-mathematics-editor, .Tiptap-mathematics-render) {
    border-radius: 0.25rem;
    display: inline-block;
  }

</style>
