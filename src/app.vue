<template>
  <div>
    <content-placeholders>
      <content-placeholders-heading :img="true" />
      <content-placeholders-text :lines="3" />
    </content-placeholders>

    <content-placeholders :rounded="true">
      <content-placeholders-img />
      <content-placeholders-heading />
    </content-placeholders>
  </div>
</template>

<script lang="ts" setup>
import {
  ContentPlaceholders,
  ContentPlaceholdersHeading,
  ContentPlaceholdersImg,
  ContentPlaceholdersText,
} from './index'
</script>
