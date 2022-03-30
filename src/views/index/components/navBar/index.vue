<template>
  <div class="index__nav--box">
    <div class="nav__title">Nimbus</div>
    <span class="sign__up" v-if="!isAuthenticated && !isLoading" @click="login">Login</span>
    <span class="log__out" v-if="isAuthenticated && !isLoading" @click="logout">Log out</span>
    <span class="enter__btn" v-if="isAuthenticated && !isLoading" @click="$router.push('/home')"
      >Workspace</span
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useAuth0 } from '@auth0/auth0-vue'

export default defineComponent({
  name: 'IndexNavBar',
  setup() {
    const { isAuthenticated, isLoading, user, loginWithRedirect, logout } = useAuth0()
    return {
      isAuthenticated,
      isLoading,
      user,
      login: () => {
        loginWithRedirect()
      },
      logout: () => {
        logout({
          returnTo: window.location.origin
        })
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.index__nav--box {
  width: 100%;
  max-width: 1300px;
  display: flex;
  align-items: center;
  height: 60px;
  padding: 0 30px;
  margin: 0 auto;
  border-bottom: 1px solid #b9b8b7;

  .nav__title {
    color: #5f5d5d;
    font-size: 30px;
    font-weight: 600;
    flex: 1;
  }

  .log__out {
    width: 60px;
    color: #131415d9;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    user-select: none;
    margin-right: 12px;
  }

  .sign__up,
  .enter__btn {
    width: 84px;
    height: 32px;
    line-height: 32px;
    background-color: #1a7b99;
    border-radius: 12px;
    cursor: pointer;
    user-select: none;
    font-size: 14px;
    color: #fff;
    font-weight: 500;
    text-align: center;
  }

  .enter__btn {
    width: 100px;
  }
}
</style>
