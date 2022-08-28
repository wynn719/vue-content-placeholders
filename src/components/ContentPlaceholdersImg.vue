<template>
  <div :class="className" />
</template>

<script lang="ts" setup>
import { usePrefix } from '@/utils'

const className = usePrefix('img')
</script>
