import { Node } from '@tiptap/core'
import { VueNodeViewRenderer } from '@tiptap/vue-3'
import TableTitleNodeView from './TableTitleNodeView.vue'

export const TableTitleExtension = Node.create({
  name: 'tableTitle',

  group: 'block',

  content: 'inline*',

  parseHTML() {
    return [
      {
        tag: 'div[data-table-title]',
      },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return ['div', { 'data-table-title': 'true' }, 0]
  },

  addCommands() {
    return {
      addTableTitle: (options) => ({ commands }) => {
        return commands.insertContent({
          type: this.name,
          content: options.text ? [{ type: 'text', text: options.text }] : []
        })
      }
    }
  },

  addNodeView() {
    return VueNodeViewRenderer(TableTitleNodeView)
  },
}) 