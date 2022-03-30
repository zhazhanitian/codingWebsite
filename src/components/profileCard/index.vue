<template>
  <el-dropdown class="profile__setting--dropdown" popper-class="custom__profile--drop">
    <span class="el-dropdown-link">
      <div class="link__content">
        <div class="attr__info">
          <img src="https://qiniu-image.qtshe.com/account_default_5.7.png" alt="" />
        </div>
        <div class="text__info">
          <span>表弟最帅</span>
          <span>未创建团队</span>
        </div>
        <div class="img__arrow">
          <img src="https://qiniu-image.qtshe.com/pcweb/png/arrow_down.png" alt="" />
        </div>
      </div>
    </span>

    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>
          <div class="drop__item--box">
            <img class="drop__item--icon" src="https://qiniu-image.qtshe.com/base_info.png" />
            <div class="drop__item--text">Personal</div>
          </div>
        </el-dropdown-item>
        <el-dropdown-item @click="logout">
          <div class="drop__item--box">
            <img class="drop__item--icon" src="https://qiniu-image.qtshe.com/exit.png" alt="" />
            <div class="drop__item--text">Log out</div>
          </div>
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useAuth0 } from '@auth0/auth0-vue'

export default defineComponent({
  name: 'ProFileCard',

  setup() {
    const { logout } = useAuth0()
    return {
      logout: () => {
        logout({
          returnTo: window.location.origin
        })
      }
    }
  }
})
</script>

<style lang="scss">
.profile__setting--dropdown {
  .el-dropdown-link {
    width: 175px;
    outline: none;
  }

  .link__content {
    cursor: pointer;

    &:hover {
      .img__arrow {
        img {
          transition: ease-in-out 0.5s;
          transform: rotate(180deg);
        }
      }
    }

    .attr__info {
      display: inline-block;
      margin-right: 10px;
      width: 36px;
      height: 36px;
      vertical-align: middle;

      img {
        width: 36px;
        height: 36px;
      }
    }

    .text__info {
      display: inline-block;
      vertical-align: middle;
      width: 100px;

      span {
        display: block;
        font-size: 14px;
        color: #666666;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-weight: 500;

        &:last-child {
          font-size: 10px;
          color: #9fa9ba;
        }
      }
    }

    .img__arrow {
      vertical-align: middle;
      display: inline-block;
      margin-left: 10px;
      width: 8px;
      height: 5px;

      img {
        display: block;
        width: 100%;
        transition: ease-in-out 0.5s;
      }
    }
  }
}
</style>

<style lang="scss">
.custom__profile--drop {
  margin-top: 10px;
  width: 208px;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: -5px 0 10px rgba(0, 0, 0, 0.1), 0 0 0 rgba(0, 0, 0, 0.1),
    0 5px 10px rgba(0, 0, 0, 0.1), 5px 0 10px rgba(0, 0, 0, 0.1);
  padding: 8px 0;
  z-index: 2111;

  .drop__item--box {
    padding: 8px 18px;
    font-size: 14px;
    border: none;

    &:hover {
      background-color: #1a7b9930;
    }
  }

  .el-dropdown-menu__item {
    border: none !important;
    cursor: pointer;
    user-select: none;
    outline: none;
  }

  .drop__item--icon {
    display: inline-block;
    margin-right: 14px;
    width: 17px;
    height: 17px;
    vertical-align: middle;
  }

  .drop__item--text {
    display: inline-block;
    font-size: 14px;
    color: #3c4858;
    vertical-align: middle;
  }
}
</style>
