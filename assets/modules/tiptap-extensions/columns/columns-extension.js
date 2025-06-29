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
      maxWidth: {
        default: null,
        parseHTML: element => {
          const val = element.getAttribute('data-max-width')
          return val ? parseInt(val) : null
        },
        renderHTML: attributes => {
          return attributes.maxWidth ? { 'data-max-width': attributes.maxWidth } : {}
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
      },
      wrap: {
        default: true,
        parseHTML: element => {
          const val = element.getAttribute('data-wrap')
          return val === null ? true : val === 'true' || val === '1'
        },
        renderHTML: attributes => {
          return attributes.wrap !== undefined ? { 'data-wrap': attributes.wrap } : {}
        },
      },
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
        const { columnCount = 2, widths = ['10%', '10%'], gap = '1rem', maxWidth = null, wrap = true, alignItems = 'stretch' } = options
        const columns = []
        for (let i = 0; i < columnCount; i++) {
          columns.push({
            type: 'column',
            attrs: {
              flexBasis: widths[i] || '10%'
            },
            content: [{ type: 'paragraph' }]
          })
        }
        
        return commands.insertContent({
          type: this.name,
          attrs: {
            gap,
            maxWidth,
            wrap,
          },
          content: columns
        })
      },
      
      addColumn: (options = {}) => ({ commands, state }) => {
        const { width = '10%' } = options
        
        return commands.insertContent({
          type: 'column',
          attrs: { flexBasis: width },
          content: [{ type: 'paragraph' }]
        })
      },
      
      setColumnsGap: (gap) => ({ commands }) => {
        return commands.updateAttributes(this.name, { gap })
      },
      setColumnsMaxWidth: (maxWidth) => ({ commands }) => {
        return commands.updateAttributes(this.name, { maxWidth })
      },
	  setColumnsAlignItems: (align) => ({ commands }) => {
        return commands.updateAttributes(this.name, { alignItems: align })
      },
      setColumnsWrap: (wrap) => ({ commands }) => {
        return commands.updateAttributes(this.name, { wrap })
      },
    }
  },

  addNodeView() {
    return VueNodeViewRenderer(ColumnsNodeView)
  },
}) 