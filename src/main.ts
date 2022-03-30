import { createApp } from 'vue'
import store from '@/store'
import { createAuth0 } from '@auth0/auth0-vue'
import ElementPlus from 'element-plus'
import authConfig from '@/config/auth_config'
import { createRouter } from './router'
import App from './App.vue'

const app = createApp(App)

app
  .use(createRouter(app))
  .use(store)
  .use(ElementPlus)
  .use(
    createAuth0({
      ...authConfig,
      redirect_uri: window.location.origin
    })
  )
  .mount('#app')
