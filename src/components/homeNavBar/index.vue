<template>
  <div class="home__nav--box">
    <nav class="nav__content">
      <div class="nav__left">
        <img class="logo__name" src="@/assets/environment/nimbus__logo.png" />
        <span
          @click="$router.push('/environment/index')"
          :class="['menu__btn', menuType === 1 && 'active']"
          >Environments</span
        >
        <span
          @click="$router.push('/team/index')"
          :class="['menu__btn', menuType === 2 && 'active']"
          >Team</span
        >
        <!-- <span
          @click="$router.push('/myAccount/index')"
          :class="['menu__btn', menuType === 3 && 'active']"
          >My Account</span
        > -->
        <span
          @click="$router.push('/billing/index')"
          :class="['menu__btn', menuType === 4 && 'active']"
          >Billing</span
        >
      </div>
      <div class="nav__right">
        <div class="side__line"></div>
        <profile-card class="profile__card"></profile-card>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useRoute } from 'vue-router'
import ProfileCard from '@/components/profileCard/index.vue'

export default defineComponent({
  components: { ProfileCard },

  setup() {
    const route = useRoute()

    const menuType = computed(() => {
      const { path } = route
      let flag = 1
      if (path.match(/^\/environment.*/)) flag = 1
      if (path.match(/^\/team.*/)) flag = 2
      if (path.match(/^\/myAccount.*/)) flag = 3
      if (path.match(/^\/billing.*/)) flag = 4
      return flag
    })

    return {
      menuType
    }
  }
})
</script>

<style lang="scss" scoped>
.home__nav--box {
  height: 85px;
  position: fixed;
  top: 0;
  width: 100%;
  box-shadow: 0 2px 3px rgb(18 18 18 / 5%), 0 0 0 1px rgb(18 18 18 / 5%);
  padding-top: 0px;
  background-color: #fff;
  z-index: 200;

  .nav__content {
    width: 1180px;
    margin: 0 auto;
    height: 100%;
    display: flex;

    .nav__left {
      flex: 1;

      .logo__name {
        height: 60px;
        margin-right: 40px;
        margin-top: 10px;
        float: left;
      }

      .menu__btn {
        float: left;
        margin-right: 45px;
        height: 70px;
        padding-top: 36px;
        cursor: pointer;
        user-select: none;
        color: inherit;
        font-weight: 600;
        color: #444;
        font-size: 20px;

        &:hover {
          color: #1a7b99;
        }

        &.active {
          color: #1a7b99;
        }
      }
    }

    .nav__right {
      width: 255px;
      height: 70px;
      vertical-align: top;
      margin-top: 10px;

      .side__line {
        display: inline-block;
        position: relative;
        top: -20px;
        margin-left: 18px;
        margin-right: 18px;
        content: ' ';
        width: 4px;
        height: 72px;
        border-left: 1px solid #f5f5f5;
        color: #f5f5f5;
        transform-origin: 0 100%;
        transform: scaleY(0.5);
        vertical-align: middle;
      }

      .profile__card {
        display: inline-block;
        vertical-align: middle;
      }
    }
  }
}
</style>
