import { computed, defineComponent, h } from 'vue-demi'
import '../styles.scss'

export default defineComponent({
  props: {
    rounded: {
      type: Boolean,
      default: false,
    },
    centered: {
      type: Boolean,
      default: false,
    },
    animated: {
      type: Boolean,
      default: true,
    },
  },
  setup(props, { slots }) {
    const classObject = computed(() => ({
      'vue-content-placeholders': true,
      'vue-content-placeholders-is-rounded': props.rounded,
      'vue-content-placeholders-is-centered': props.centered,
      'vue-content-placeholders-is-animated': props.animated,
    }))

    return () => slots.default ? h('div', { class: classObject.value }, slots.default()) : null
  },
})
