import { mergeAttributes, Node } from '@tiptap/core'
import { VueNodeViewRenderer } from '@tiptap/vue-3'

import mathComponent from './mathComponent.vue'

export default Node.create({
  name: 'mathComponent',

  group: 'inline', 
  inline: true,
  content: 'inline*',

  atom: true,

  addAttributes() {
    return {
      latex: {
        default: 'x+2',
      },
    }
  },

  parseHTML() {
    return [
      {
        tag: 'math-component',
      },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return ['math-component', mergeAttributes(HTMLAttributes)]
  },

  addCommands() {
    return {
        addMathComponent: options => ({ commands, editor }) => {
            return commands.insertContent(
                {
                    type: this.name,
                    attrs: options
                }
            );
        }
    }
  },

  addNodeView() {
    return VueNodeViewRenderer(mathComponent)
  },
})