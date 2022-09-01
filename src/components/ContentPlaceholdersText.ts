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
      const lines = Array.from({ length: props.lines }).map((_, idx) => {
        return h('div', { key: idx, class: `${className}__line` })
      })

      return h('div', { class: className }, lines)
    }
  },
})
