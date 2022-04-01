<template>
  <el-form :model="form" label-width="80px" label-position="left">
    <el-form-item label="Date" prop="date" class="form__item">
      {{ dateFormatTemp(form.date) }}
    </el-form-item>
    <el-form-item label="Type" prop="core" class="form__item">
      {{ form.type }}
    </el-form-item>
    <el-form-item label="ARM" prop="ram" class="form__item">$ {{ form.money }}</el-form-item>
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
  margin-bottom: 25px;
}
</style>
