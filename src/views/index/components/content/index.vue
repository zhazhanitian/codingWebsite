<template>
  <div class="introduce__box">
    <div class="title">Nimbus in China</div>
    <div class="desc">Local expertise. Global resources. A commitment to China.</div>
  </div>
  <img class="page__banner" src="@/assets/index/banner-china-about-us.jpg" />
  <div class="text__line">
    We have been doing business in China since 1921. Our integrated financial services include
    investment and corporate banking, payments, markets, sales and research, securities services,
    commercial banking and asset management. Today, we serve Chinese and international corporations,
    financial institutions and government agencies through our network in Beijing, Shanghai,
    Tianjin, Guangzhou, Chengdu, Harbin, Suzhou and Shenzhen.
  </div>
  <div class="text__line">
    We have operated in Asia Pacific since 1872, and today are present across 17 markets in the
    region. Local corporations and institutions, multinationals, governments and private clients
    rely on us for market-leading financial services — a confidence bred from our strength and
    ability to deliver integrated services across the Corporate & Investment Bank, Asset Management
    and the Private Bank.
  </div>
  <div class="text__line">
    In Asia Pacific, we are committed to helping promote economic growth and economic inclusion
    through our key philanthropic initiatives in the areas of workforce readiness, small business
    development and financial capability. Our investments aim to increase the number of quality jobs
    created for the underserved individuals and communities, helping small businesses become more
    sustainable, as well as assisting marginalized people in gaining access to affordable financial
    products so that they can become more financially secure. This shared commitment to the
    community drives our Foundation’s giving and employee engagement and volunteering activities
    across the region.
  </div>
  <div class="text__line">
    Nimbus is a global leader in financial services, offering solutions to the world's most
    important corporations, governments and institutions in more than 100 countries. As announced in
    early 2018, JPMorgan Chase will deploy $1.75 billion in philanthropic capital around the world
    by 2023. We also lead volunteer service activities for employees in local communities by
    utilizing our many resources, including those that stem from access to capital, economies of
    scale, global reach and expertise.
  </div>

  <div class="learn__more--box">
    <div class="flex__item">
      <div class="title">Local Presence</div>
      <div class="btn">Learn more</div>
    </div>
    <div class="flex__item">
      <div class="title">Company History</div>
      <div class="btn">Learn more</div>
    </div>
    <div class="flex__item">
      <div class="title">News & Announcements</div>
      <div class="btn">Learn more</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  }
})
</script>

<style lang="scss" scoped>
.introduce__box {
  width: 100%;
  padding: 30px 0 55px 0;
  text-align: center;

  .title {
    color: #5f5d5d;
    font-size: 42px;
    font-weight: 500;
  }

  .desc {
    color: #5f5d5d;
    font-size: 18px;
    margin-top: 12px;
  }
}

.page__banner {
  width: 100%;
  display: block;
  height: auto;
  margin-bottom: 80px;
}

.text__line {
  color: #5f5d5d;
  font-family: 'Amplitude', 'Arial Narrow', sans-serif;
  font-weight: 300;
  font-size: 18px;
  line-height: 22px;
  max-width: 790px;
  margin: 0 auto;
  margin-bottom: 34px;
  word-break: inherit;
}

.learn__more--box {
  height: 325px;
  background: linear-gradient(to bottom, #389cd8 0, #00477b 100%);
  padding: 80px 30px 0 30px;
  display: flex;

  .flex__item {
    width: 33.3%;
  }

  .title {
    color: #fff;
    font-size: 28px;
    text-align: center;
    margin-bottom: 80px;
  }

  .btn {
    width: 100px;
    height: 46px;
    line-height: 46px;
    margin: 0 auto;
    border: 1px solid #fff;
    color: #fff;
    cursor: pointer;
    user-select: none;
    text-align: center;
    border-radius: 8px;

    &:hover {
      background-color: #fff;
      color: #00477b;
    }
  }
}
</style>
