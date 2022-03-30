<template>
  <el-row :gutter="24">
    <el-col :span="12">
      <el-input class="search__input" v-model="machineName" placeholder="search name"></el-input>
      <el-button>
        <el-icon class="search__icon"> <search /></el-icon>Search
      </el-button>
    </el-col>
    <el-col :span="12" style="text-align: right">
      <el-button>
        <el-icon class="search__icon"> <plus /></el-icon>Add New
      </el-button>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// eslint-disable-next-line import/no-extraneous-dependencies
import { Search, Plus } from '@element-plus/icons-vue'

export default defineComponent({
  components: { Search, Plus },
  setup() {
    return {
      machineName: ''
    }
  }
})
</script>

<style lang="scss" scoped>
.search__input {
  display: inline-block;
  width: 200px;
  margin-right: 10px;
}

.search__icon {
  margin-right: 4px;
}
</style>
