<template>
  <div class="total__cover">
    <div class="info__item">
      <div class="title">$431.12</div>
      <div class="desc">Remaining balance</div>
    </div>
    <div class="info__item">
      <div class="title">$18721</div>
      <div class="desc">Cumulative recharge</div>
    </div>
    <div class="info__item">
      <div class="title">18</div>
      <div class="desc">Total machines</div>
    </div>
    <div class="info__item">
      <div class="title">88.7%</div>
      <div class="desc">Utilization rate</div>
    </div>
  </div>

  <div class="main__box">
    <el-row :gutter="24" class="header__line">
      <el-col :span="12">
        <span class="header__title">Invoice hisotry</span>
      </el-col>
      <el-col :span="12" style="text-align: right">
        <el-button @click="topUpMoney">Top Up</el-button>
      </el-col>
    </el-row>
    <div class="history__item item__head">
      <div class="time">Date</div>
      <div class="type">Type</div>
      <div class="money">Amount</div>
      <div class="opera"></div>
    </div>
    <div class="history__item" v-for="item in list" :key="item.id">
      <div class="time">{{ dateFormatTemp(item.date) }}</div>
      <div class="type">{{ item.type }}</div>
      <div class="money">$ {{ item.money }}</div>
      <div class="opera">
        <el-icon class="detail__btn" @click="showDetail(item)"><arrow-right-bold /></el-icon>
      </div>
    </div>
  </div>

  <el-drawer v-model="detailDrawer">
    <template #title>
      <div class="edit__drawer--title">Invoice Details</div>
    </template>
    <invoice-detail ref="invoiceDetailRef"></invoice-detail>
  </el-drawer>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, nextTick } from 'vue'
// eslint-disable-next-line import/no-extraneous-dependencies
import { ArrowRightBold } from '@element-plus/icons-vue'
import { InvoiceItem } from '@/interface/billing'
import { invoiceList } from '@/mock/billing'
import { dateFormatTemp } from '@/utils/index'
import { ElMessage } from 'element-plus'
import InvoiceDetail from './components/invoiceDetail/index.vue'

export default defineComponent({
  components: { InvoiceDetail, ArrowRightBold },

  setup() {
    const list: InvoiceItem[] = reactive(invoiceList)

    const detailDrawer = ref(false)
    const invoiceDetailRef = ref()
    // 展开详情
    const showDetail = async (item: InvoiceItem | undefined) => {
      detailDrawer.value = true
      await nextTick()
      invoiceDetailRef.value.resetForm(item)
    }

    const topUpMoney = () => {
      ElMessage.info('The top up of money function is being enabled!')
    }

    return {
      list,
      detailDrawer,
      invoiceDetailRef,
      topUpMoney,
      showDetail,
      dateFormatTemp
    }
  }
})
</script>

<style lang="scss" scoped>
.total__cover {
  padding: 35px 0;
  background-color: #fff;
  border-radius: 6px;
  display: flex;

  .info__item {
    width: 25%;
    border-right: 2px solid #f5f5f5;
    text-align: center;

    &:nth-last-child(1) {
      border-right: none;
    }

    .title {
      height: 40px;
      font-size: 24px;
      color: #3c4858;
      font-weight: 500;
    }

    .desc {
      font-size: 14px;
      color: #8392a7;
    }
  }
}

.main__box {
  padding: 24px;
  background-color: #fff;
  border-radius: 6px;
  margin-top: 18px;

  .header__line {
    border-bottom: 1px solid #f5f5f5;
    padding-bottom: 20px;
  }

  .header__title {
    color: #354052;
    font-size: 16px;
    font-weight: 500;
    height: 32px;
    line-height: 32px;
    display: inline-block;
  }

  .history__item {
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

    .time {
      flex: 1;
    }

    .type {
      width: 220px;
    }

    .money {
      width: 140px;
    }

    .opera {
      width: 100px;
      justify-content: end;
      padding-right: 10px;

      .detail__btn {
        cursor: pointer;
      }
    }
  }

  .item__head {
    padding: 12px 15px;
    background-color: #eff2f64d;
    font-weight: 600;
    color: #666;
    margin-top: 25px;
  }
}

.edit__drawer--title {
  font-weight: 600;
  font-size: 24px;
}
</style>
