<template>
  <el-form :model="form" label-width="120px" label-position="top">
    <el-form-item label="Name" prop="title" class="form__item">
      <el-input v-model.trim="form.title" maxlength="15" />
    </el-form-item>
    <el-form-item label="Core CPU" prop="core" class="form__item">
      <el-select v-model="form.core" class="form__select">
        <el-option v-for="item in coreCpuList" :key="item" :label="item" :value="item" />
      </el-select>
    </el-form-item>
    <el-form-item label="ARM" prop="ram" class="form__item">
      <el-select v-model="form.ram" class="form__select">
        <el-option v-for="item in ramList" :key="item" :label="item" :value="item" />
      </el-select>
    </el-form-item>
    <el-form-item label="Band Width" prop="dueTo" class="form__item">
      <el-select v-model="form.dueTo" class="form__select">
        <el-option v-for="item in dueToList" :key="item" :label="item" :value="item" />
      </el-select>
    </el-form-item>
    <el-form-item label="System" prop="center" class="form__item">
      <el-select v-model="form.center" class="form__select">
        <el-option v-for="item in centerList" :key="item" :label="item" :value="item" />
      </el-select>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { EnvironmentItem } from '@/interface/environment'
import {
  coreCpuList,
  ramList,
  dueToList,
  centerList,
  defaultEnvironmentItem
} from '@/config/environment'

export default defineComponent({
  name: 'TeamEdit',

  setup() {
    const form = ref<EnvironmentItem>(Object.assign({} as EnvironmentItem, defaultEnvironmentItem))

    const resetForm = (info: EnvironmentItem | undefined) => {
      form.value = { ...(info || defaultEnvironmentItem) }
    }

    return {
      form,
      coreCpuList,
      ramList,
      dueToList,
      centerList,
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
