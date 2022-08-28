<template>
  <div :class="className">
    <div v-if="img" :class="`${className}__img`" />
    <div :class="`${className}__content`">
      <div :class="`${className}__title`" />
      <div :class="`${className}__subtitle`" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { usePrefix } from '@/utils'

defineProps({
  img: {
    type: Boolean,
    default: false,
  },
})

const className = usePrefix('heading')
</script>
