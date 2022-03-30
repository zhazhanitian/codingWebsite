import { createStore, createLogger } from 'vuex'
import userInfo, { userInfoState } from './modules/userInfo'

const debug = process.env.NODE_ENV !== 'production'

export interface State {
  userInfo: userInfoState
}

export const modules = {
  userInfo
}

export default createStore<State>({
  modules,
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
