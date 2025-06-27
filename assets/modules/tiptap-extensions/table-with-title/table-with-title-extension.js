import { Node } from '@tiptap/core'
import { VueNodeViewRenderer } from '@tiptap/vue-3'
import TableWithTitleNodeView from './TableWithTitleNodeView.vue'

export const TableWithTitleExtension = Node.create({
  name: 'tableWithTitle',

  group: 'block',

  content: 'tableTitle? table',

  parseHTML() {
    return [
      {
        tag: 'div[data-table-with-title]',
      },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return ['div', { 'data-table-with-title': 'true' }, 0]
  },

  addCommands() {
    return {
      addTableWithTitle: (options) => ({ commands }) => {
        const content = []
        
        // Add title if provided
        if (options.title && options.title.trim()) {
          content.push({
            type: 'tableTitle',
            content: [{ type: 'text', text: options.title.trim() }]
          })
        }
        
        // Add table using the existing insertTable command structure
        const tableContent = []
        for (let i = 0; i < options.rows; i++) {
          const rowContent = []
          const cellType = (options.withHeaderRow && i === 0) ? 'tableHeader' : 'tableCell'
          
          for (let j = 0; j < options.cols; j++) {
            rowContent.push({
              type: cellType,
              content: [{ type: 'paragraph' }]
            })
          }
          
          tableContent.push({
            type: 'tableRow',
            content: rowContent
          })
        }
        
        content.push({
          type: 'table',
          content: tableContent
        })
        
        return commands.insertContent({
          type: this.name,
          content: content
        })
      }
    }
  },

  addNodeView() {
    return VueNodeViewRenderer(TableWithTitleNodeView)
  },
}) 