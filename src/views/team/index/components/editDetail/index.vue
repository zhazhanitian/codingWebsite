<template>
  <el-form :model="form" label-width="120px" label-position="top">
    <el-form-item label="Nimbus member or Email address" prop="account" class="form__item">
      <el-input v-model.trim="form.title" maxlength="25" />
    </el-form-item>
    <el-form-item label="Choose a role permission" prop="role" class="form__item">
      <el-select v-model="form.role" class="form__select">
        <el-option v-for="r in roleList" :key="r" :label="r" :value="r"></el-option>
      </el-select>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { roleList } from '@/config/team'

export default defineComponent({
  name: 'TeamEdit',

  setup() {
    const form = reactive({ account: '', email: '' })

    const resetForm = () => {
      Object.assign(form, { account: '', email: '' })
    }

    return {
      form,
      roleList,
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
