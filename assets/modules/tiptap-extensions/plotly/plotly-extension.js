// extensions/plotly-extension.js
import { Node } from '@tiptap/core'
import { VueNodeViewRenderer } from '@tiptap/vue-3'
import PlotlyNodeView from './PlotlyNodeView.vue'



export const PlotlyExtension = Node.create({
  name: 'plotly',

  group: 'block',

  content: 'inline*',

  atom: true,

  addAttributes() {
    return {
      type: {
        default: 'scatter',
      },
      data: {
        default: null,
      },
      layout: {
        default: {},
      },
      width: {
        default: 600,
      },
      height: {
        default: 400,
      },
    }
  },

  parseHTML() {
    return [
      {
        tag: 'tt-plotly[data-plotly]',
        getAttrs: (node) => {
          if (typeof node === 'string') return {}
          const element = node
          const data = element.getAttribute('data-plotly')
          return data ? JSON.parse(data) : {}
        },
      },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return ['tt-plotly', { 'data-plotly': JSON.stringify(HTMLAttributes) }]
  },

  addNodeView() {
    return VueNodeViewRenderer(PlotlyNodeView)
  },
})