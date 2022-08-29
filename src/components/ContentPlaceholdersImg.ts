import { defineComponent, h } from 'vue-demi'
import { usePrefix } from '@/utils'

export default defineComponent({
  setup() {
    const className = usePrefix('img')
    return () => h('div', { class: className })
  },
})
