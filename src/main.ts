import App from "./App.vue";
import { createApp } from "vue";
import { createRouter } from "./router";
import store from '@/store'
import { createAuth0 } from "@auth0/auth0-vue";
import ElementPlus from 'element-plus'
import { domain, clientId as client_id } from "@/config/auth_config.json";

const app = createApp(App);

app
  .use(createRouter(app))
  .use(store)
  .use(ElementPlus)
  .use(
    createAuth0({
      domain,
      client_id,
      redirect_uri: window.location.origin,
    })
  )
  .mount("#app");
