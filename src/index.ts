import type { App } from 'vue'
import ContentPlaceholders from './components/ContentPlaceholders.vue'
import ContentPlaceholdersHeading from './components/ContentPlaceholdersHeading.vue'
import ContentPlaceholdersImg from './components/ContentPlaceholdersImg.vue'
import ContentPlaceholdersText from './components/ContentPlaceholdersText.vue'

export function install(Vue: App) {
  Vue.component('ContentPlaceholders', ContentPlaceholders)
  Vue.component('ContentPlaceholdersHeading', ContentPlaceholdersHeading)
  Vue.component('ContentPlaceholdersImg', ContentPlaceholdersImg)
  Vue.component('ContentPlaceholdersText', ContentPlaceholdersText)
}

const plugin = {
  version: __VERSION__,
  install,
}

export default plugin

export {
  ContentPlaceholders,
  ContentPlaceholdersHeading,
  ContentPlaceholdersImg,
  ContentPlaceholdersText,
}
