<template>
  <nav-bar></nav-bar>
</template>

<script lang="ts">
import { useRouter } from 'vue-router'
import { defineComponent, onMounted } from 'vue'
import NavBar from './components/navBar/index.vue'

export default defineComponent({
  components: { NavBar },
  setup() {
    const router = useRouter()

    onMounted(() => {
      console.log('router', router)
    })
  }
})
</script>

<style lang="scss" scoped>
.app__index--page {
}
</style>
