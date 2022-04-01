<template>
  <el-row :gutter="24" class="sear__box">
    <el-col :span="12">
      <el-input
        class="search__input"
        clearable
        v-model="machineName"
        placeholder="search name"
      ></el-input>
      <el-button @click="searchUser">
        <el-icon class="search__icon"> <search /></el-icon>Search
      </el-button>
    </el-col>
    <el-col :span="12" style="text-align: right">
      <el-button @click="showInvite">Invite</el-button>
    </el-col>
  </el-row>

  <div class="team__list--box">
    <div class="team__item team__head">
      <div class="user__attr"></div>
      <div class="user__name">Name</div>
      <div class="user__email">Email</div>
      <div class="user__access">Access granted</div>
      <div class="user__role">Max role</div>
      <div class="opera"></div>
    </div>
    <template v-if="list.length">
      <div class="team__item" v-for="item in list" :key="item.id">
        <div class="user__attr">
          <img :src="item.attar" />
        </div>
        <div class="user__name">{{ item.name }}</div>
        <div class="user__email">{{ item.email }}</div>
        <div class="user__access">
          by <span>{{ item.granted }}</span>
        </div>
        <div class="user__role">
          <el-select v-model="item.role">
            <el-option v-for="r in roleList" :key="r" :label="r" :value="r"></el-option>
          </el-select>
        </div>
        <div class="opera">
          <el-popconfirm @confirm="removeUser(item)" title="Are you sure to delete this?">
            <template #reference>
              <el-button class="btn__delete" type="danger" circle
                ><el-icon class="search__icon"> <delete /></el-icon
              ></el-button>
            </template>
          </el-popconfirm>
        </div>
      </div>
    </template>
    <el-empty description=" " v-else />
  </div>

  <el-drawer v-model="detailDrawer" :before-close="beforeCloseDrawer">
    <template #title>
      <div class="edit__drawer--title">Invite New User</div>
    </template>
    <template #footer>
      <el-button @click="saveEdit">Invite</el-button>
    </template>
    <edit-detail ref="detailRef"></edit-detail>
  </el-drawer>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
// eslint-disable-next-line import/no-extraneous-dependencies
import { Search, Delete } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import { TeamItem } from '@/interface/team'
import { teamList } from '@/mock/team'
import { roleList } from '@/config/team'
import EditDetail from './components/editDetail/index.vue'

export default defineComponent({
  components: { Search, Delete, EditDetail },

  setup() {
    const machineName = ref('')
    const list: TeamItem[] = reactive([...teamList])
    const originList: TeamItem[] = reactive([...teamList])

    const detailDrawer = ref(false)
    const detailRef = ref()
    // 关闭邀请用户弹窗前重置form表单
    const beforeCloseDrawer = (done: any): void => {
      detailRef.value.resetForm()
      done()
    }
    // 展开邀请用户弹出
    const showInvite = () => {
      detailDrawer.value = true
    }
    // 确认邀请
    const saveEdit = (): void => {
      detailDrawer.value = false
      ElMessage.success(`Invitation succeeded, waiting for user's confirmation to join!`)
    }

    // 移除用户
    const removeUser = (item: TeamItem) => {
      const index = list.findIndex((i: TeamItem) => i.id === item.id)
      list.splice(index, 1)
      originList.splice(0, originList.length, ...list)
    }

    // 搜索用户
    const searchUser = () => {
      const key = machineName.value
      const reg = new RegExp(key, 'i')

      if (key === '') {
        list.splice(0, list.length, ...originList)
      } else {
        const temp = originList.filter((i: TeamItem) => reg.test(i.name))
        list.splice(0, list.length, ...temp)
      }
    }

    return {
      machineName,
      list,
      originList,
      detailDrawer,
      detailRef,
      roleList,
      showInvite,
      saveEdit,
      removeUser,
      beforeCloseDrawer,
      searchUser
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

.team__list--box {
  padding: 24px;
  background-color: #fff;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 18px;
  min-height: 430px;

  .team__item {
    border-bottom: 1px solid #f5f5f5;
    padding: 20px 15px;
    display: flex;
    width: 100%;

    & > div {
      display: flex;
      align-items: center;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }

  .team__head {
    padding: 3px 15px;
    background-color: #eff2f64d;
    font-weight: 600;
    color: #666;
  }

  .user__attr {
    width: 80px;
    height: 45px;

    img {
      display: inline-block;
      width: 45px;
      height: 45px;
      border-radius: 50%;
    }
  }

  .user__name {
    width: 120px;
  }

  .user__email {
    flex: 1;
  }

  .user__access {
    width: 160px;

    span {
      margin-left: 5px;
      margin-top: 2px;
    }
  }

  .user__role {
    width: 120px;
  }

  .opera {
    width: 80px;
    justify-content: end;
    padding-right: 10px;

    .btn__delete {
      background-color: #f89898;
      border-color: #f89898;
    }
  }

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
