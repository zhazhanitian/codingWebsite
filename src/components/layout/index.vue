<template>
  <div class="main__page--layout">
    <nav-bar></nav-bar>
    <div class="layout__main--box">
      <router-view></router-view>
    </div>
    <footer-bar></footer-bar>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavBar from '@/components/homeNavBar/index.vue'
import FooterBar from '@/components/homeFooterBar/index.vue'

export default defineComponent({
  components: { NavBar, FooterBar },
  setup() {}
})
</script>

<style lang="scss" scoped>
.main__page--layout {
  background-color: #eff3f6;
  min-height: 100vh;
}

.layout__main--box {
  padding-top: 110px;
  width: 900px;
  margin: 0 auto;
  min-height: calc(100vh - 140px);
}
</style>
