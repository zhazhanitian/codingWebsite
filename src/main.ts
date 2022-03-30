import { createApp } from 'vue'
import { createAuth0 } from '@auth0/auth0-vue'
import ElementPlus from 'element-plus'
import store from './store'
import authConfig from './config/auth_config'
import { createRouter } from './router'
import App from './App.vue'
import 'element-plus/dist/index.css'

const app = createApp(App)

app
  .use(createRouter(app))
  .use(store)
  .use(ElementPlus)
  .use(
    createAuth0({
      ...authConfig,
      redirect_uri: 'http://localhost:3000/environment/index'
    })
  )
  .mount('#app')
