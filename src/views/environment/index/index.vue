<template>
  <el-row :gutter="24" class="sear__box">
    <el-col :span="12">
      <el-input
        class="search__input"
        clearable
        v-model="machineName"
        placeholder="search name"
      ></el-input>
      <el-button @click="searchByTitle">
        <el-icon class="search__icon"> <search /></el-icon>Search
      </el-button>
    </el-col>
    <el-col :span="12" style="text-align: right">
      <el-button @click="showDetail()">
        <el-icon class="search__icon"> <plus /></el-icon>Add New
      </el-button>
    </el-col>
  </el-row>

  <div class="environ__item" v-for="item in list" :key="item.id" @click="showDetail(item)">
    <el-row :gutter="24">
      <el-col :span="10">
        <div class="title__txt">{{ item.title }}</div>
        <span class="item__tags">{{ item.core }}</span>
        <span class="item__tags">{{ item.ram }}</span>
        <span class="item__tags">{{ item.dueTo }}</span>
        <span class="item__tags">{{ item.center }}</span>
      </el-col>
      <el-col :span="14" style="text-align: right">
        <div class="count__item">
          <div class="count">{{ item.owner }}</div>
          <div class="tips">owner</div>
        </div>
        <div class="count__item">
          <div class="count">{{ item.state }}</div>
          <div class="tips">state</div>
        </div>
        <div class="count__item">
          <div class="count">{{ calculationTime(item.startAt) }}d</div>
          <div class="tips">run time</div>
        </div>
      </el-col>
    </el-row>
  </div>

  <el-drawer v-model="detailDrawer" :before-close="beforeCloseDrawer">
    <template #title>
      <div class="edit__drawer--title">Environment</div>
    </template>
    <template #footer>
      <el-button @click="saveEdit">Save</el-button>
    </template>
    <edit-detail ref="detailRef"></edit-detail>
  </el-drawer>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, nextTick } from 'vue'
// eslint-disable-next-line import/no-extraneous-dependencies
import { Search, Plus } from '@element-plus/icons-vue'
import { EnvironmentItem } from '@/interface/environment'
import { environmentList } from '@/mock/environment'
import EditDetail from './components/editDetail/index.vue'

export default defineComponent({
  components: { Search, Plus, EditDetail },

  setup() {
    const machineName = ref('')
    const list: EnvironmentItem[] = reactive(environmentList)

    // 粗略计算运行天数
    const calculationTime = (time: string): Number => {
      const value = Date.now() - new Date(time).getTime()
      return Math.floor(value / (24 * 3600 * 1000))
    }

    const detailDrawer = ref(false)
    const detailRef = ref()
    // 关闭编辑弹窗前重置form表单
    const beforeCloseDrawer = (done: any): void => {
      detailRef.value.resetForm()
      done()
    }
    // 展开编辑
    const showDetail = async (item: EnvironmentItem | undefined) => {
      detailDrawer.value = true
      await nextTick()
      if (item && item.id) detailRef.value.resetForm(item)
      else detailRef.value.resetForm()
    }
    // save
    const saveEdit = (): void => {
      const info: EnvironmentItem = detailRef.value.form
      if (!info.id) {
        info.id = list.length + 1
        list.unshift(info)
      } else {
        const index = list.findIndex((i: EnvironmentItem) => i.id === info.id)
        list.splice(index, 1, { ...info })
      }
      detailDrawer.value = false
    }

    return {
      machineName,
      list,
      detailDrawer,
      detailRef,
      calculationTime,
      showDetail,
      saveEdit,
      beforeCloseDrawer
    }
  }
})
</script>

<style lang="scss" scoped>
.sear__box {
  margin-bottom: 30px;

  .search__input {
    display: inline-block;
    width: 200px;
    margin-right: 10px;
  }

  .search__icon {
    margin-right: 4px;
  }
}

.environ__item {
  padding: 24px;
  background-color: #fff;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 18px;

  .title__txt {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 9px;
  }

  .item__tags {
    display: inline-block;
    border-radius: 3px;
    height: 24px;
    line-height: 24px;
    box-sizing: border-box;
    padding: 0 7px;
    margin-right: 8px;
    font-size: 12px;
    font-weight: 500;
    background-color: #eff2f6;
  }

  .count__item {
    display: inline-block;
    margin-left: 22px;
    text-align: center;

    .count {
      font-size: 22px;
      color: #101d37;
      font-weight: 500;
    }

    .tips {
      color: #303133;
      font-size: 16px;
      margin-top: 5px;
    }
  }
}

.edit__drawer--title {
  font-weight: 600;
  font-size: 24px;
}
</style>
