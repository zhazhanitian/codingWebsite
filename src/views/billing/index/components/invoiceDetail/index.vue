<template>
  <el-form :model="form" label-width="100px" label-position="left">
    <el-form-item label="Date" prop="date" class="form__item">
      {{ dateFormatTemp(form.date) }}
    </el-form-item>
    <el-form-item label="Type" prop="core" class="form__item">
      {{ form.type }}
    </el-form-item>
    <el-form-item label="Amount" prop="money" class="form__item">$ {{ form.money }}</el-form-item>

    <template v-if="form.type === 'pay'">
      <div class="second__title">Pay For</div>
      <el-form-item label="Name" class="form__item">{{ form.payItem.title }}</el-form-item>
      <el-form-item label="Core CPU" class="form__item">{{ form.payItem.core }}</el-form-item>
      <el-form-item label="ARM" class="form__item">{{ form.payItem.ram }}</el-form-item>
      <el-form-item label="Band Width" class="form__item">{{ form.payItem.dueTo }}</el-form-item>
      <el-form-item label="System" class="form__item">{{ form.payItem.center }}</el-form-item>
    </template>
  </el-form>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { dateFormatTemp } from '@/utils/index'
import { InvoiceItem } from '@/interface/billing'

export default defineComponent({
  name: 'InvoiceDetail',

  setup() {
    const form = reactive<InvoiceItem>({} as InvoiceItem)

    const resetForm = (info: InvoiceItem) => {
      Object.assign(form, info)
    }

    return {
      form,
      dateFormatTemp,
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
  margin-bottom: 15px;
}

.second__title {
  font-size: 16px;
  font-weight: 500;
  color: #555;
  margin-top: 60px;
  margin-bottom: 20px;
}
</style>
