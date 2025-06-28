import { Node } from '@tiptap/core'
import { VueNodeViewRenderer } from '@tiptap/vue-3'
import ColumnNodeView from '~/components/tiptap/ColumnNodeView.vue'

export const ColumnExtension = Node.create({
  name: 'column',

  group: 'block',

  content: 'block+',

  addAttributes() {
    return {
      width: {
        default: '50%',
        parseHTML: element => element.getAttribute('data-width') || '50%',
        renderHTML: attributes => {
          return {
            'data-width': attributes.width,
          }
        },
      }
    }
  },

  parseHTML() {
    return [
      {
        tag: 'div[data-column]',
      },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return ['div', { 'data-column': 'true', ...HTMLAttributes }, 0]
  },

  addCommands() {
    return {
      setColumnWidth: (width) => ({ commands }) => {
        return commands.updateAttributes(this.name, { width })
      },
    }
  },

  addNodeView() {
    return VueNodeViewRenderer(ColumnNodeView)
  },
}) 