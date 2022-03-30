<template>
  <nav-bar></nav-bar>
  <div class="layout__main--box">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavBar from '@/components/homeNavBar/index.vue'

export default defineComponent({
  components: { NavBar },
  setup() {}
})
</script>

<style lang="scss" scoped>
.layout__main--box {
  padding-top: 100px;
}
</style>
