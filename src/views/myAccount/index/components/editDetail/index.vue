<template>
  <el-form :model="form" label-width="120px" label-position="top">
    <el-form-item label="Name" prop="name" class="form__item">
      <el-input v-model.trim="form.name" maxlength="15" />
    </el-form-item>
    <el-form-item label="Email" prop="email" class="form__item">
      <el-input v-model.trim="form.email" maxlength="40" />
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { TeamItem } from '@/interface/team'
import { myAccount } from '@/mock/myAccount'

export default defineComponent({
  name: 'MyAccountEdit',

  setup() {
    const form = ref<TeamItem>(Object.assign({} as TeamItem, myAccount))

    const resetForm = (info: TeamItem | undefined) => {
      form.value = { ...(info || myAccount) }
    }

    return {
      form,
      resetForm
    }
  }
})
</script>

<style lang="scss" scoped>
.form__select {
  width: 100%;
}

.form__item {
  margin-bottom: 25px;
}
</style>
