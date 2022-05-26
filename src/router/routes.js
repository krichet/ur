
  import Home from '@/views/Home'
  // import kebabCase from 'lodash/kebabCase' 

   
  /*
  https://qna.habr.com/q/591146
  const requireComponent = require.context(
    '@/views',
    false,
    /\w+\.(vue|js)/
  )

  export const dynamicRoutes = requireComponent.keys().map(fileName => {
      name = fileName.replace(/^\.\/(.*)\.\w+$/, '$1')
      const fileNameKebab = kebabCase(name)
      const path = name === 'home' ? '/' : `/${fileNameKebab}`
      let test = `@/views/${name}.vue`
      return { path, name, component: () => import(test) }
  })
 */ 


  export const routes = [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/rules',
      name: 'rules',
      component: () => import('@/views/footer/Rules')
    },
    {
        path: '/contact',
        name: 'contact',
        component: () => import('@/views/footer/Contact')
    },
    {
        path: '/about', 
        name: 'about',
        component: () => import('@/views/footer/About')
      },
      {
        path: '/faq', 
        name: 'faq',
        component: () => import('@/views/footer/FAQ') 
      },
      {
        path: '/privacy-policy', 
        name: 'privacy-policy',
        component: () => import('@/views/footer/PrivacyPolicy') 
      },
      {
        path: '/guide', 
        name: 'guide',
        component: () => import('@/views/footer/Guide') 
      },
      {
        path: '/account',  
        name: 'account',
        component: () => import('@/views/auth/Account'),
        meta: { authorize: true } 
      },
      {
        path: '/balance', 
        name: 'balance',
        component: () => import('@/views/auth/Balance'),
        meta: { authorize: true } 
      },
      {
        path: '/balance-details/:status/:earnType', 
        name: 'balance-details',
        component: () => import('@/views/auth/BalanceDetails'),
        meta: { authorize: true } 
      },
      {
        path: '/profile',  
        name: 'profile',
        component: () => import('@/views/auth/Profile'),
        meta: { authorize: true }  
      },
      {
        path: '/survey', 
        name: 'survey',
        component: () => import('@/views/auth/Survey'),
        meta: { authorize: true }  
      },
      {
        path: '/withdraw',
        name: 'withdraw',
        component: () => import('@/views/auth/Withdraw'),
        meta: { authorize: true }  
      },
      {
        path: '/register', 
        name: 'register',
        component: () => import('@/views/auth/Register'), 
      },
      {
        path: '/referals', 
        name: 'referals',
        component: () => import('@/views/auth/Referals'),
        meta: { authorize: true }  
      },
      {
        path: '/offers', 
        name: 'offers',
        component: () => import('@/views/Offers'),
        // meta: { authorize: true }   
      },
      {
        path: '/surveys',  
        name: 'surveys',
        component: () => import('@/views/Surveys'),
        // meta: { authorize: true }   
      },
      {
        path: '/hot-offers', 
        name: 'hot-offers',
        component: () => import('@/views/HotOffers'),
        // meta: { authorize: true }   
      },
      {
        path: '/offer-walls', 
        name: 'offer-walls',
        component: () => import('@/views/auth/OfferWalls'),
        meta: { authorize: true }  
      },
      {
        path: '/paid-2-games', 
        name: 'paid-2-games',
        component: () => import('@/views/auth/PaidToGames'),
        meta: { authorize: true }  
      },
      {
        path: '/video', 
        name: 'video',
        component: () => import('@/views/auth/Video'),
        meta: { authorize: true }  
      }, 
      {
        path: '/click', 
        name: 'click',
        component: () => import('@/views/auth/Click'),
        meta: { authorize: true }  
      },
      {
        path: '/inbox', 
        name: 'inbox',
        component: () => import('@/views/auth/Inbox'),
        meta: { authorize: true }  
      },
      {
        path: '/regpath/:uid/:grp', 
        name: 'regpath',
        component: () => import('@/views/auth/Regpath'),
        // meta: { authorize: true }  
      },
      {
        path: '/offers-internal/:uid', 
        name: 'offers-internal',
        component: () => import('@/views/auth/OffersInternal'),
        // meta: { authorize: true }  
      },
      {
        path: '/404',
        name: "404",
        component: () => import('@/views/NotFound')
      },
      {    
        path: '*',  
        redirect: { name: '404' }
      },
      {
        path: '/forgot',
        name: "ForgotPassword",
        component: () => import('@/views/ForgotPass')
      },
      {
        path: '/recover-pwd/:token',
        name: "RecoverPassword",
        component: () => import('@/views/RecoverPass')
      },
      {
        path: '/newreferral/:refid/:href',
        name: 'NewFeferral',
        component: Home
      },
      {
        path: '/brk/:bid/:subid1/:subid2/:subid3',
        name: 'BrokerTraffic',
        component: Home
      }      

      
      /*

        path: 'brk/:bid/:subid1/:subid2/:subid3',

      */


      /*

        path: 'newref/:refid',

      */
  ]
 

 


