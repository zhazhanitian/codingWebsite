<template>
  <nav-bar></nav-bar>
  <page-content></page-content>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavBar from './components/navBar/index.vue'
import PageContent from './components/content/index.vue'

export default defineComponent({
  components: { NavBar, PageContent },
  setup() {}
})
</script>
