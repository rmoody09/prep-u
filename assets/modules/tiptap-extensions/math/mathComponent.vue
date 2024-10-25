<template>
    <node-view-wrapper ref="latex_el" v-html="renderMath" 
        class="tiptap-latex inline-block bg-gray-100 rounded-md cursor-pointer hover:bg-primary-100" 
        @click="latexClick">
    </node-view-wrapper>
</template>
  
<script setup>
import { nodeViewProps, NodeViewWrapper } from '@tiptap/vue-3'
import katex from 'katex';
import 'katex/dist/katex.min.css';
const props = defineProps(nodeViewProps)
const latex_el = ref(null);

const latexClick = () => {
    const math = window.prompt('Enter the latex math:');
    if (math) {
        props.node.attrs.latex = math;
        //katex.render(math, latex_el.value.element);
    }
}

const renderMath = computed(() => {
    console.log('render math');
    console.log(props.node.attrs.latex);
    let html = katex.renderToString(props.node.attrs.latex);
    console.log(html);
    return html;
    //return katex.render(props.node.attrs.latex);
})
</script>
