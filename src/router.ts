import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './components/Home.vue'
import Doc from './components/Doc.vue'
import QRVue from './components/QR.vue'

const history = createWebHashHistory()
export const router = createRouter({
  history:createWebHashHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/doc', component: Doc },
    { path: '/qr', component: QRVue}
  ]
})
router.afterEach(() => {
 console.log("路由切换了") 
})