import Vue from 'vue'
import store from '@/store'
import VueRouter from 'vue-router'
import { routes } from './routes'

Vue.use(VueRouter) 

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})

/*

  ПРОВЕРКА АВТОРИЗАЦИИ ПРИ ПЕРВОНАЧАЛЬНОЙ ЗАГРУЗКЕ

*/
const { token } = store.getters 
if(token){
    store.dispatch('authentication', { status: true, token })
}else{
  store.dispatch('authentication', { status: false })
}


router.beforeEach((to, from, next) => {
  store.state.base.preloader = true
  const { authorize } = to.meta

    /*
        ЗАПРОС НА СЕРВЕР   

        проверка токена на просроченность
    */ 
    axios.get('/service/checkAuth')
          .then(response => {
            try{
              const _response = JSON.parse( response.request.responseText )
              // console.log('_response.result /service/checkAuth: ',_response)
              if(_response.result && _response.result.authorized === true){              
                store.dispatch('updateUserData', _response.result )
                next() 
              }else{
                if(authorize){
                  alert('PLEASE LOG IN')
                  next('/')
                }else{
                  next()
                }
              }
            }catch(e){
              console.log('RESPONSE PARSING ERROR: ',e.message )
            } 
          })
          .catch(err => {
            console.log('err: ',err)
            if(authorize){
              alert('PLEASE LOG IN')             
              next('/')
              store.state.base.preloader = false
            }else{
              next()
            }
          })

})

router.afterEach((to, from) => {
    store.state.base.preloader = false
    if(window.scrollTo){
        window.scrollTo({top: 0, behavior: 'smooth'}) 
    }    
})


export default router
