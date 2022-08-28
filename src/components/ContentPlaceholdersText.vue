<template>
  <div :class="className">
    <div v-for="n in lines" :key="n" :class="`${className}__line`" />
  </div>
</template>

<script lang="ts" setup>
import { usePrefix } from '@/utils'

defineProps({
  lines: {
    type: Number,
    default: 4,
  },
})

const className = usePrefix('text')
</script>
