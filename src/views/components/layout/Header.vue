<template>
  <header>    
    <div class="wrapper">
      <div class="logo">
        <router-link to="/">
          <span class="logo__img">
            <img src="/img/logo.png" alt />
          </span>
          <span class="logo__text">
            <span class="logo__title">UniqueRewards</span>
            <span class="logo__subtitle">EARN EASY PAY! JUST A CLICK AWAY!</span>
          </span>
        </router-link>
      </div>
      <div class="header-right">
        <div class="header-img">
          <a href="#">
            <img src="/img/header_logo_1.png" alt />
          </a>
          <a href="#">
            <img src="img/header_logo_2.png" alt="">
          </a>
        </div>
        <div 
          class="btns-user"
          v-if="auth"
        >
          <router-link :to="{name: 'account'}" class="btns-user__item btn-user">
            <span class="btns-user__icon"></span>
            <span class="btns-user__name">My account</span>
          </router-link>
          <router-link :to="{name: 'referals'}" class="btns-user__item btn-referrals">
            <span class="btns-user__icon"></span>
            <span class="btns-user__name">Referrals</span>
          </router-link>
          <router-link :to="{name: 'inbox'}" class="btns-user__item btn-inbox">
            <a href="#" class="btns-user__item btn-inbox">
              <span class="btns-user__icon">
                <span class="btn-inbox__number">2</span>
              </span>
              <span class="btns-user__name">Inbox</span>
            </a>
          </router-link>
          <a 
            href="#" 
            class="btns-user__item btn-exit"
            @click.prevent="logout()"
          >
            <span class="btns-user__icon"></span>
            <span class="btns-user__name">Exit</span>
          </a>
        </div>
        <div class="btns-guest">
          <a 
            href="#" 
            class="button button_blue button_login"
            @click.prevent="$modal.show('login')"
            v-if="!auth"
          >
            <span class="icon icon_button-login"></span>
            <span class="button-text">Log In</span>
          </a>
          <router-link 
            :to="{name: 'register'}" 
            class="button button_register"
            v-if="!auth"
          >
            <span class="icon icon_button-reg"></span>
            <span class="button-text">Registration</span>
          </router-link>
        </div>
      </div>    
    </div>
  </header>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  computed:{
    ...mapGetters(['auth', 'user'])
  },
  methods:{
    logout(){
      /*

        удаление токена из state и localS

        удаление токена из заголовков axios

        выставление state authenticated = true

        перенаправление на главную страницу

      */
     this.$store.dispatch('authentication', { status: false } )
     this.$store.dispatch('updateUserData', { token: '' } )

     /*

        ??? 
        
        Avoided redundant navigation to current location:

          .catch(()=>{})

     */
     this.$router.push("/")
    }
  }
}
</script>
