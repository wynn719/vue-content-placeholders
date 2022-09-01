<template>
  <div class="content">
    <ContentPlaceholders>
      <ContentPlaceholdersHeading :img="true" />
      <ContentPlaceholdersText :lines="3" />
    </ContentPlaceholders>

    <br>

    <ContentPlaceholders :rounded="true">
      <ContentPlaceholdersImg />
      <ContentPlaceholdersHeading />
    </ContentPlaceholders>
  </div>
</template>

<script lang="ts" setup>
import {
  ContentPlaceholders,
  ContentPlaceholdersHeading,
  ContentPlaceholdersImg,
  ContentPlaceholdersText,
} from './index'
import './styles.scss'
</script>

<style lang="scss">
.content {
  max-width: 1100px;
  margin: 0 auto;
}
</style>
