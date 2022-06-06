import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './assets/scss/style.scss'

import axios from './configs/axios'
import $ from 'jquery'
window.$ = $ 

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import GoogleAuth from 'configs/google_oAuth'
const gauthOption = {
  clientId: '1045871054557-srd1f8jhmvseaf9q9v7drs8e82a8onnl.apps.googleusercontent.com',
  scope: 'profile email',
  prompt: 'select_account'
}
Vue.use(GoogleAuth, gauthOption)

// PLUGINS
import VModal from 'vue-js-modal'
import VueIziToast from 'vue-izitoast'
import 'izitoast/dist/css/iziToast.min.css'

// GLOBAL COMPONENTS
import AsideLeft from "components/layout/AsideLeft"
import SocialRight from 'components/layout/SocialRight'
import UserInfo from 'components/layout/UserInfo'
import Login from 'components/Login'
import Offer from 'components/Offer'
import LeftBanner from 'components/banners/LeftBanner'
import RightBanner from 'components/banners/RightBanner'
import TopBanner from 'components/banners/TopBanner'
import BottomBannerOne from 'components/banners/BottomBannerOne'
import BottomBannerTwo from 'components/banners/BottomBannerTwo'
import BottomBannerThree from 'components/banners/BottomBannerThree'
import BottomVideoBanner from 'components/banners/BottomVideoBanner'

Vue.use(VModal)
Vue.use(VueIziToast)
Vue.component('AsideLeft',AsideLeft)
Vue.component('SocialRight',SocialRight)
Vue.component('UserInfo',UserInfo)
Vue.component('Login',Login)
Vue.component('Offer',Offer)
Vue.component('LeftBanner',LeftBanner)
Vue.component('RightBanner',RightBanner)
Vue.component('TopBanner',TopBanner)
Vue.component('BottomBannerOne',BottomBannerOne)
Vue.component('BottomBannerTwo',BottomBannerTwo)
Vue.component('BottomBannerThree',BottomBannerThree)
Vue.component('BottomVideoBanner',BottomVideoBanner)

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
