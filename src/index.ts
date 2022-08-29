import type { Plugin } from 'vue-demi'
import ContentPlaceholders from './components/ContentPlaceholders'
import ContentPlaceholdersHeading from './components/ContentPlaceholdersHeading'
import ContentPlaceholdersImg from './components/ContentPlaceholdersImg'
import ContentPlaceholdersText from './components/ContentPlaceholdersText'

let isInstalled = false

const plugin: Plugin & { version: string } = {
  version: __VERSION__,
  install(Vue) {
    if (isInstalled) {
      console.warn('vue-content-placeholders is installed')
      return
    }
    Vue.component('ContentPlaceholders', ContentPlaceholders)
    Vue.component('ContentPlaceholdersHeading', ContentPlaceholdersHeading)
    Vue.component('ContentPlaceholdersImg', ContentPlaceholdersImg)
    Vue.component('ContentPlaceholdersText', ContentPlaceholdersText)
    isInstalled = true
  },
}

export default plugin

export {
  ContentPlaceholders,
  ContentPlaceholdersHeading,
  ContentPlaceholdersImg,
  ContentPlaceholdersText,
}
