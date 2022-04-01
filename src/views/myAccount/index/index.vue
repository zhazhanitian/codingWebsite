<template>
  <div class="my__account--box">
    <div class="page__header">My Account</div>

    <el-row :gutter="24" class="info__line phone__line">
      <el-col :span="4" class="flex__center"><span class="label__txt">Photo</span></el-col>
      <el-col :span="12">
        <img class="info__photo" :src="account.attar" />
      </el-col>
      <el-col :span="8" class="flex__center" style="justify-content: end">
        <el-upload
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <el-icon class="info__icon"><edit-pen /></el-icon>
        </el-upload>
      </el-col>
    </el-row>

    <el-row :gutter="24" class="info__line">
      <el-col :span="4"><span class="label__txt">Name</span></el-col>
      <el-col :span="12">
        <span class="info__txt">{{ account.name }}</span>
      </el-col>
      <el-col :span="8" style="text-align: right">
        <el-icon class="info__icon" @click="showDetail()"><edit-pen /></el-icon>
      </el-col>
    </el-row>

    <el-row :gutter="24" class="info__line">
      <el-col :span="4"><span class="label__txt">Email</span></el-col>
      <el-col :span="12">
        <span class="info__txt">{{ account.email }}</span>
      </el-col>
      <el-col :span="8" style="text-align: right">
        <el-icon class="info__icon" @click="showDetail()"><edit-pen /></el-icon>
      </el-col>
    </el-row>

    <el-row :gutter="24" class="info__line">
      <el-col :span="4"></el-col>
      <el-col :span="12">
        <el-button type="info" class="reseat__password" @click="resetPassword"
          >Reset Password</el-button
        >
      </el-col>
    </el-row>
  </div>

  <el-drawer v-model="detailDrawer">
    <template #title>
      <div class="edit__drawer--title">My Account</div>
    </template>
    <template #footer>
      <el-button @click="saveEdit">Save</el-button>
    </template>
    <edit-detail ref="detailRef"></edit-detail>
  </el-drawer>
</template>

<script lang="ts">
import { defineComponent, ref, nextTick } from 'vue'
// eslint-disable-next-line import/no-extraneous-dependencies
import { EditPen } from '@element-plus/icons-vue'
import type { UploadProps } from 'element-plus'
import { ElMessage } from 'element-plus'
import { TeamItem } from '@/interface/team'
import { myAccount } from '@/mock/myAccount'
import EditDetail from './components/editDetail/index.vue'

export default defineComponent({
  components: { EditPen, EditDetail },

  setup() {
    const account = ref<TeamItem>(Object.assign({} as TeamItem, myAccount))

    const detailDrawer = ref(false)
    const detailRef = ref()
    // 展开编辑
    const showDetail = async () => {
      detailDrawer.value = true
      await nextTick()
      detailRef.value.resetForm(account.value)
    }
    // save
    const saveEdit = (): void => {
      const info: TeamItem = detailRef.value.form
      account.value = { ...info }
      detailDrawer.value = false
      ElMessage.success('Save successful!')
    }
    // 照片上传前类型校验
    const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
      if (rawFile.type !== 'image/png') {
        ElMessage.error('Avatar picture must be PNG format!')
        return false
      }
      if (rawFile.size / 1024 / 1024 > 2) {
        ElMessage.error('Avatar picture size can not exceed 2MB!')
        return false
      }
      return true
    }
    // 上传头像成功
    const handleAvatarSuccess: UploadProps['onSuccess'] = (response, uploadFile) => {
      account.value.attar = URL.createObjectURL(uploadFile.raw!)
      ElMessage.success('Save successful!')
    }

    // 重置密码
    const resetPassword = () => {
      ElMessage.info('The auto0 password reset function is being enabled!')
    }

    return {
      account,
      detailDrawer,
      detailRef,
      showDetail,
      saveEdit,
      beforeAvatarUpload,
      handleAvatarSuccess,
      resetPassword
    }
  }
})
</script>

<style lang="scss" scoped>
.my__account--box {
  padding: 24px;
  background-color: #fff;
  border-radius: 6px;

  .page__header {
    padding-top: 10px;
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 50px;
  }

  .info__line {
    padding: 30px 10px;
    border-top: 1px solid #f5f5f5;

    &.phone__line {
      padding: 20px 10px;
    }

    .flex__center {
      display: flex;
      align-items: center;
    }

    .info__photo {
      display: inline-block;
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }

    .label__txt {
      color: #8392a7;
    }

    .info__txt {
    }

    .info__icon {
      cursor: pointer;
    }

    .reseat__password {
      border-color: #dedfe0;
      background-color: #dedfe0;
      color: #666;
    }
  }
}

.edit__drawer--title {
  font-weight: 600;
  font-size: 24px;
}
</style>
