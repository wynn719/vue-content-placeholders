<template>
  <div :class="classObject">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps({
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
})

const classObject = computed(() => ({
  'vue-content-placeholders': true,
  'vue-content-placeholders-is-rounded': props.rounded,
  'vue-content-placeholders-is-centered': props.centered,
  'vue-content-placeholders-is-animated': props.animated,
}))
</script>

<style lang="scss">
  @import '../styles.scss';
</style>
