import { defineComponent, h } from 'vue-demi'
import { usePrefix } from '@/utils'

export default defineComponent({
  props: {
    img: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const className = usePrefix('heading')

    return () =>
      h('div', { class: className }, [
        props.img ? h('div', { class: `${className}__img` }) : null,
        h('div', { class: `${className}__content` }, [
          h('div', { class: `${className}__title` }),
          h('div', { class: `${className}__subtitle` }),
        ]),
      ])
  },
})
