import { Node } from '@tiptap/core'
import { VueNodeViewRenderer } from '@tiptap/vue-3'
import ColumnNodeView from '~/components/tiptap/ColumnNodeView.vue'

export const ColumnExtension = Node.create({
  name: 'column',

  group: 'block',

  content: 'block+',

  addAttributes() {
    return {
      flexBasis: {
        default: '10%',
        parseHTML: element => element.getAttribute('data-flex-basis') || '10%',
        renderHTML: attributes => {
          return {
            'data-flex-basis': attributes.flexBasis,
          }
        },
      },
      grow: {
        default: true,
        parseHTML: element => {
          const val = element.getAttribute('data-grow')
          return val === null ? true : val === 'true' || val === '1'
        },
        renderHTML: attributes => {
          return attributes.grow !== undefined ? { 'data-grow': attributes.grow } : {}
        },
      },
      shrink: {
        default: true,
        parseHTML: element => {
          const val = element.getAttribute('data-shrink')
          return val === null ? true : val === 'true' || val === '1'
        },
        renderHTML: attributes => {
          return attributes.shrink !== undefined ? { 'data-shrink': attributes.shrink } : {}
        },
      },
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
      setColumnFlexBasis: (flexBasis) => ({ commands }) => {
        return commands.updateAttributes(this.name, { flexBasis })
      },
      setColumnFlex: ({ grow, shrink }) => ({ commands }) => {
        return commands.updateAttributes(this.name, { grow, shrink })
      },
    }
  },

  addNodeView() {
    return VueNodeViewRenderer(ColumnNodeView)
  },
}) 