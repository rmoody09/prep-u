<template>
    <node-view-wrapper ref="latex_el" v-html="renderMath" 
        class="tiptap-latex inline-block rounded-md" 
        :class="{
            'bg-gray-100': props.editor.view.editable, 
            'cursor-pointer': props.editor.view.editable,
            'hover:bg-primary-100': props.editor.view.editable
        }"
        @click="latexClick">
    </node-view-wrapper>

    <MathEditorModal
        v-model="showModal"
        :initial-value="props.node.attrs.latex.toString()"
        @save="saveMath"
    />
</template>
  
<script setup>
import { nodeViewProps, NodeViewWrapper } from '@tiptap/vue-3'
import katex from 'katex';
import 'katex/dist/katex.min.css';
import MathEditorModal from '~/components/MathEditorModal.vue';

const props = defineProps(nodeViewProps)
console.log('math component');
console.log(props.editor.view.editable);
console.log(props.editor);

const latex_el = ref(null);
const showModal = ref(false);

const latexClick = () => {
    if (!props.editor.view.editable) {return;}
    showModal.value = true;
}

const saveMath = (latex) => {
    props.node.attrs.latex = latex;
}

const renderMath = computed(() => {
    console.log('render math');
    console.log(props.node.attrs.latex);
    let html = katex.renderToString(props.node.attrs.latex.toString());
    console.log(html);
    return html;
    //return katex.render(props.node.attrs.latex);
})
</script>
