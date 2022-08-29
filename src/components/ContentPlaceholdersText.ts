import { defineComponent, h } from 'vue-demi'
import { usePrefix } from '@/utils'

export default defineComponent({
  props: {
    lines: {
      type: Number,
      default: 4,
    },
  },
  setup(props) {
    const className = usePrefix('text')
    return () => {
      const lines = [...Array(props.lines).keys()].map((n) => {
        return h('div', { key: n, class: `${className}__line` })
      })

      return h('div', { class: className }, lines)
    }
  },
})
