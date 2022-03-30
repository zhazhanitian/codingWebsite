<template>
  <div class="layout__footer--box">
    <div class="tips__info">客服热线 xxx 09:00-18:00</div>
    <div class="tips__info">商务合作 biaodizuishuai@gmail.com</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {}
})
</script>

<style lang="scss" scoped>
.layout__footer--box {
  height: 200px;
  background-color: #34383b;
  margin-top: 60px;
  color: #999;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .tips__info {
    margin-top: 10px;
  }
}
</style>
