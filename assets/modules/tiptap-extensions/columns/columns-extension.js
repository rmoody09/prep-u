import { Node } from '@tiptap/core'
import { VueNodeViewRenderer } from '@tiptap/vue-3'
import ColumnsNodeView from '~/components/tiptap/ColumnsNodeView.vue'

export const ColumnsExtension = Node.create({
  name: 'columns',

  group: 'block',

  content: 'column+',

  addAttributes() {
    return {
      gap: {
        default: '1rem',
        parseHTML: element => element.getAttribute('data-gap') || '1rem',
        renderHTML: attributes => {
          return {
            'data-gap': attributes.gap,
          }
        },
      },
	  alignItems: {
        default: 'stretch',
        parseHTML: element => element.getAttribute('data-align-items') || 'stretch',
        renderHTML: attributes => {
          return {
            'data-align-items': attributes.alignItems,
          }
        },
      }
    }
  },

  parseHTML() {
    return [
      {
        tag: 'div[data-columns]',
      },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return ['div', { 'data-columns': 'true', ...HTMLAttributes }, 0]
  },

  addCommands() {
    return {
      addColumns: (options = {}) => ({ commands }) => {
        const { columnCount = 2, widths = ['50%', '50%'] } = options
        
        const columns = []
        for (let i = 0; i < columnCount; i++) {
          columns.push({
            type: 'column',
            attrs: {
              width: widths[i] || '50%',
              wrap: true,
            },
            content: [{ type: 'paragraph' }]
          })
        }
        
        return commands.insertContent({
          type: this.name,
          content: columns
        })
      },
      
      addColumn: (options = {}) => ({ commands, state }) => {
        const { width = '50%', wrap = true } = options
        
        return commands.insertContent({
          type: 'column',
          attrs: { width, wrap },
          content: [{ type: 'paragraph' }]
        })
      },
      
      setColumnsGap: (gap) => ({ commands }) => {
        return commands.updateAttributes(this.name, { gap })
      },
	  setColumnsAlignItems: (align) => ({ commands }) => {
        return commands.updateAttributes(this.name, { alignItems: align })
      },
    }
  },

  addNodeView() {
    return VueNodeViewRenderer(ColumnsNodeView)
  },
}) 