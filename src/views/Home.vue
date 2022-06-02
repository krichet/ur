

<template>
  <main class="content">
    <div ref="twitchExample"></div>
    <!-- FB PLUGINS -->
    <div id="fb-root"></div><!-- FB PLUGINS -->
    <section class="box-main-screen">
      <div class="wrapper">
        <div class="screen-cont">
          <div class="screen-cont__title">Earn extra cash doing what you like to do!</div>
          <div class="box-form">
            <div 
              v-if="!auth" 
              class="box-form__title"
              >Join UniqueRewards for FREE and get $5 Bonus right away!
            </div>
            <form 
              v-if="!auth"
            >
              <div class="row">
                <div class="col">
                  <div class="box-field">
                    <input type="text" class="form-control" placeholder="E-mail" v-model="form.email.value">
                    <div :class="{ 'invalid-feedback d-block': form.email.verified === 'no' }" v-text="form.email.errorMsg"></div>
                  </div>
                </div>
                <div class="col">
                  <div class="box-field">
                    <input type="password" class="form-control" placeholder="Password" v-model="form.pwd.value">
                    <div :class="{ 'invalid-feedback d-block': form.pwd.verified === 'no' }" v-text="form.pwd.errorMsg"></div>
                  </div>
                </div>
              </div>
              <div class="button-form">
                <input
                  type="button"
                  class="button button_orange button_large"
                  value="Sign up for free"
                  @click="quickSignUp()"
                >
              </div>              
              <LoginSocials/>

              <div class="d-flex align-items-left justify-content-center flex-column my-3">
                <vue-recaptcha sitekey="6Lf3CN4UAAAAAIPKFfpCcgYjHDfa8DqglTSFpvbS" :loadRecaptchaScript="true"></vue-recaptcha>
                <div :class="{ 'invalid-feedback d-block': form['g-recaptcha-response'].verified === 'no' }"
                  v-text="form['g-recaptcha-response'].errorMsg"></div>
              </div>              

            </form>
          </div>
        </div>
        <ul class="service-list d-flex justify-content-center flex-wrap">
          <li class="service-list__item service-1">
              <router-link :to="{name: 'surveys'}" class="service-list__link">
                <span class="table">
                  <span class="table-cell">
                    <img src="/img/icon_1.png" alt>
                    <span class="service-list__text">Take Surveys</span>
                  </span>
                </span>
              </router-link>
          </li>
          <li class="service-list__item service-2">
            <router-link :to="{name: 'offer-walls'}" class="service-list__link">
              <span class="table">
                <span class="table-cell">
                  <img src="/img/icon_2.png" alt>
                  <span class="service-list__text">Offer Walls</span>
                </span>
              </span>
            </router-link>
          </li>
          <li class="service-list__item service-4">
            <router-link :to="{name: 'paid-2-games'}" class="service-list__link">
              <span class="table">
                <span class="table-cell">
                  <img src="/img/icon_4.png" alt>
                  <span class="service-list__text">Paid 2 Games</span>
                </span>
              </span>
            </router-link>
          </li>
          <li class="service-list__item service-5">
            <router-link :to="{name: 'video'}" class="service-list__link">
              <span class="table">
                <span class="table-cell">
                  <img src="/img/icon_5.png" alt>
                  <span class="service-list__text">Watch Videos</span>
                </span>
              </span>
            </router-link>
          </li>
          <li class="service-list__item service-7">
            <router-link :to="{name: 'click'}" class="service-list__link">
              <span class="table">
                <span class="table-cell">
                  <img src="/img/icon_7.png" alt>
                  <span class="service-list__text">Visit Sites</span>
                </span>
              </span>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="box-site-tour">
        <div class="site-tour">
          <div class="online-since">
            <div class="online-since__text">
              Online since
              <strong>2003</strong>
            </div>
            <div class="icon icon_date"></div>
          </div>
          <a href="#" class="button button_large d-none">
            <span class="icon icon_watch"></span> Watch Site Tour
          </a>
          <div class="active-user">
            <div class="icon icon_user"></div>
            <div class="active-user__text">
              <strong>500 000 +</strong>
              <br>active users
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="how-it-work">
      <div class="wrapper">
        <h1>How it works?</h1>
        <ul class="how-it-work__list">
          <li class="how-it-work__item">
            <div class="how-it-work__icon">
              <img src="/img/work_icon_1.png" alt>
            </div>
            <div class="how-it-work__text">Fill in registration form</div>
          </li>
          <li class="how-it-work__item">
            <div class="how-it-work__icon">
              <img src="/img/work_icon_2.png" alt>
            </div>
            <div class="how-it-work__text">
              Complete easy tasks
              <br>offers, surveys
            </div>
          </li>
          <li class="how-it-work__item">
            <div class="how-it-work__icon">
              <img src="/img/work_icon_3.png" alt>
            </div>
            <div class="how-it-work__text">Cash out</div>
          </li>
        </ul>
      </div>
    </section>
    <section class="box-facebook">
      <div class="wrapper">
        <h2 class="text-center">Our fans. Join them on our facebook page!</h2>
        <div class="text-center py-4">
          <!-- FB PAGE -->        
          <div 
            class="fb-page" 
            data-href="https://www.facebook.com/uniquerewards/" 
            data-width="500" 
            data-height="" 
            data-small-header="true" 
            data-adapt-container-width="true" 
            data-hide-cover="false"
            data-show-facepile="true"
            data-hide-cta="true"
          >
            <blockquote cite="https://www.facebook.com/uniquerewards/" class="fb-xfbml-parse-ignore">
              <a href="https://www.facebook.com/uniquerewards/">UniqueRewards</a>
            </blockquote>
          </div><!-- FB PAGE -->
        </div>
      </div>
    </section>
    <section class="box-gallery bg-white">
      <div class="wrapper">
        <h2>Look! These people have already got their greens</h2>
        <div class="subtitle">Doubt and don't believe. Checl the proofs.</div>
        <div class="gal-wrap">
          <div class="w-100 pt-3" id="carousel-1">
            <slick
              ref="slick"
              :options="slickOptions">
              <a 
                v-for="(slideSrc, index) in paymentScreens"
                href="#"
                class="h-100"
                @click.prevent="showSlide($event.target, slideSrc)"
              >
                <div class="w-100 h-100 d-flex justify-content-center align-items-center">
                  <img :src="slideSrc" alt="" class="slick-info-payments">
                </div>
              </a>
            </slick>
          </div>
        </div>
        <!-- <a href="#" id="prev" class="button-gal prev"></a>
        <a href="#" id="next" class="button-gal next"></a> -->
      </div>
    </section>
    <section class="box-testimonials">
      <div class="wrapper">
        <h2>Testimonials</h2>
        <div class="subtitle white">Check our video testimonials and what our users say</div>
        <div class="col-left">
          <ul class="testimonials-video">
            <li 
              class="testimonials-video__item"
              v-for="video, index in videos"
            >
              <a 
                href="#" 
                class="testimonials-video__link" 
                @click.prevent="$modal.show('facebook-modal-video-' + index)"
              >
                <img :src="video.screenLink" alt>
                <span class="testimonials-video__icon"></span>
              </a>
              <Modal 
                :name="'facebook-modal-video-' + index"
                height="100%"
                :adaptive="true"
              >
                <div 
                  class="facebook-video-wrap d-flex justify-content-center align-items-center" 
                  v-html="video.frame"
                >
                </div>
                <a 
                  href="#" 
                  @click.prevent="$modal.hide('facebook-modal-video-' + index)"
                  class="modal-close"
                ><i class="fa fa-2x fa-times"></i></a>
              </Modal>
            </li>
          </ul>
        </div>
        <div class="col-right">
          <div class="fb-widget">
            <div class="fb-widget__title">
              Facebook Users say
              <div class="fb-widget__icon">
                <img src="/img/icon_fb.png" alt>
              </div>
            </div>
            <!-- FB COMMENTS -->
            <div class="fb-widget__img">
              <div
                class="fb-comments"
                data-colorscheme="dark"
                data-href="https://www.facebook.com/uniquerewards/"
                data-numposts="5"
              ></div>
            </div><!-- FB COMMENTS -->
          </div>
        </div>
      </div>
    </section>
    <section class="box-info">
      <div class="wrapper">
        <div class="col-left">
          <div class="one-text-block">
            <h2>What is survey site about?</h2>
            <p>But I must explain how all this things happened.But I must explain how all this things happened. But I must explain how all this things happened. But I must explain how all this things happened. But I must explain how all this things</p>
            <p>But I must explain how all this things happened. But I must explain how all this things happened. But I must explain how all this things happened.s</p>
            <p>But I must explain how all this things happened. But I must explain how all this things happened. But I must explain how all this things happened.</p>
          </div>
          <div class="one-text-block">
            <h2>Completing offers is easy</h2>
            <p>But I must explain how all this things happened. But I must explain how all this things happened. But I must explain how all this things happened. But I must explain how all this things happened. But I must explain how all this things happened. But I must explain how all this things happened. But I must explain how all this things happened. But I must explain how all this things happened.</p>
          </div>
        </div>
        <div class="col-right">
          <div class="earned-title">
            <div class="earned-title__marker"></div>
            <h2>They've just earned</h2>
          </div>
          <ul class="earned-list">
            <li 
              class="earned-list__item"
              v-for="transaction in lastTransactions"
            >
              <div class="td" v-text="transaction.tr_date"></div>
              <div class="td" v-text="transaction.user"></div>
              <div class="td">
                <div class="price">$ {{transaction.amount}}</div>
              </div>
              <div class="td" v-text="transaction.label"></div>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section class="box-join-free">
      <div class="wrapper">
        <div class="screen-cont">
          <div class="screen-cont__title">
            Join for free
            <br>and get $5 bonus!
          </div>
          <div class="box-form">
            <form 
              v-if="!auth"
            >
              <div class="row">
                <div class="col">
                  <div class="box-field">
                    <input type="text" class="form-control" placeholder="E-mail" v-model="form.email.value">
                    <div :class="{ 'invalid-feedback d-block': form.email.verified === 'no' }" v-text="form.email.errorMsg"></div>
                  </div>
                </div>
                <div class="col">
                  <div class="box-field">
                    <input type="password" class="form-control" placeholder="Password" v-model="form.pwd.value">
                    <div :class="{ 'invalid-feedback d-block': form.pwd.verified === 'no' }" v-text="form.pwd.errorMsg"></div>
                  </div>
                </div>
              </div>
              <div class="button-form">
                <input
                  type="button"
                  class="button button_orange button_large"
                  value="Sign up for free"
                  @click="quickSignUp()"
                >
              </div>              
              <LoginSocials/>

              <div class="d-flex align-items-left justify-content-center flex-column my-3">
                <vue-recaptcha sitekey="6Lf3CN4UAAAAAIPKFfpCcgYjHDfa8DqglTSFpvbS" :loadRecaptchaScript="true"></vue-recaptcha>
                <div :class="{ 'invalid-feedback d-block': form['g-recaptcha-response'].verified === 'no' }"
                  v-text="form['g-recaptcha-response'].errorMsg"></div>
              </div>              

            </form>
          </div>
        </div>
      </div>
    </section>
    <section class="box-our-partners">
      <div class="wrapper">
        <h2>Our partners</h2>
        <ul class="partner-list js-logos">
          <li class="partner-list__item">
            <a href="#">
              <img src="/img/logo_1.png" alt>
            </a>
          </li>
          <li class="partner-list__item">
            <a href="#">
              <img src="/img/logo_2.png" alt>
            </a>
          </li>
          <li class="partner-list__item">
            <a href="#">
              <img src="/img/logo_3.png" alt>
            </a>
          </li>
          <li class="partner-list__item">
            <a href="#">
              <img src="/img/logo_4.png" alt>
            </a>
          </li>
          <li class="partner-list__item">
            <a href="#">
              <img src="/img/logo_5.png" alt>
            </a>
          </li>
          <li class="partner-list__item">
            <a href="#">
              <img src="/img/logo_6.png" alt>
            </a>
          </li>
          <li class="partner-list__item">
            <a href="#">
              <img src="/img/logo_4.png" alt>
            </a>
          </li>
          <li class="partner-list__item">
            <a href="#">
              <img src="/img/logo_5.png" alt>
            </a>
          </li>
          <li class="partner-list__item">
            <a href="#">
              <img src="/img/logo_6.png" alt>
            </a>
          </li>
          <li class="partner-list__item">
            <a href="#">
              <img src="/img/logo_1.png" alt>
            </a>
          </li>
          <li class="partner-list__item">
            <a href="#">
              <img src="/img/logo_2.png" alt>
            </a>
          </li>
          <li class="partner-list__item">
            <a href="#">
              <img src="/img/logo_3.png" alt>
            </a>
          </li>
        </ul>
      </div>
    </section>
  </main>
</template>
<script>

import LoginSocials from 'components/LoginSocials'
import Fingerprint from 'fingerprintjs'
import VueRecaptcha from 'vue-recaptcha'
import {Validation} from 'utils/validation'

import {videos} from 'db/videos'
import {slickOptions} from 'db/slick-options'
import {paymentScreens} from 'db/payment-screens'

import { mapGetters } from 'vuex'

import {getExtAds} from 'utils/helpers'

import '../../node_modules/slick-carousel/slick/slick.css'
import Slick from 'vue-slick'

export default {
  components: {
    LoginSocials,
    Slick,
    VueRecaptcha
  },
  data () {
    return {
      validation: new Validation(),
      videos,
      slickOptions,
      paymentScreens,
      lastTransactions: [],
      form: {
        fp_val: {
          value: '',
          required: true,
          errorMsg: '',
          verified: 'pending',
        },
        pwd: {
          value: '',
          required: true,
          errorMsg: '',
          verified: 'pending',
        },
        email: {
          value: '',
          required: true,
          errorMsg: '',
          verified: 'pending',
        },
        'g-recaptcha-response': {
          value: '',
          required: true,
          errorMsg: '',
          verified: 'pending',
        }
      }
    }
  },
  computed: {
    ...mapGetters(['auth', 'user'])

  },
  methods: {
    addAdditionalFields() {
      this.form.fp_val.value = new Fingerprint({ canvas: true }).get()
      this.form['g-recaptcha-response'].value = grecaptcha.getResponse().trim()
    },
    quickSignUp() {
      this.addAdditionalFields()        
      this.validation.check(this.form)      

      if (this.validation.status === 'done') { 

        axios
          .post('/service/signup', {
            email: this.form.email.value,
            pwd: this.form.pwd.value,
            fp_val: this.form.fp_val.value,
            'g-recaptcha-response': this.form['g-recaptcha-response'].value
          })
          .then(response => {
            const _response = JSON.parse(response.request.responseText)
            if (_response.error && _response.error === "0") { 
              
              this.$modal.show('register-info')
              this.$store.dispatch('authentication', { status: true, token: _response.result.token }) 
              this.$store.dispatch('updateUserData', _response.result)
              this.$store.dispatch('changeRegistrationStep', 1)

            }
          },
          reject => {
            if (reject.response) {              
              console.log('REJECTED')
              console.log(reject.response.data)
              console.log(reject.response.status)
              console.log(reject.response.headers)
            }
          }      
        )         
      }      
    },
    showSlide(eventTarget,slideSrc){
        this.$modal.show({
          template: `<div class="w-100 h-100  d-flex justify-content-center align-items-center">
                        <img :src="slideSrc" class="w-100 h-100">
                     </div>`,
          props: ['slideSrc']
        }, {
          slideSrc
        }, {
        width: '60%',
        height: 'auto'
      })   
    },
    showVideo(name){
      // this.videos.forEach(video => { video.active = false })
      // video.active = true
      this.$modal.show(name)
    },
    getLastTransactions(){
      axios.get('/service/getLastTrans')
        .then(response => {
          try{
            const _response = JSON.parse( response.request.responseText )
            console.log('_response /service/getLastTrans: ',_response)
            if(_response.result){ 
              this.lastTransactions = _response.result
            }
          }catch(e){
            console.log('RESPONSE PARSING ERROR /service/getLastTrans: ',e.message )
          } 
        })
        .catch(err => {
          console.log('err /service/getLastTrans: ',err)
        })
    },
  },
  mounted () {

    //define if a user got via REFERRAL link and send data to back-end
    if (this.$route.name === 'NewFeferral' && this.$route.params.refid && this.$route.params.href) {

      //save to local storage to check a user during sign up
      localStorage.setItem('urRefid', this.$route.params.refid)
      localStorage.setItem('urHref', this.$route.params.href)
      
      axios
          .post('/service/updateRefStat', {
              uid: this.$route.params.refid,
              href: this.$route.params.href
          })
          .then(response => {
              const _response = JSON.parse(response.request.responseText)
              if (_response.error && _response.error === "0") { 
              
              console.log(response)

              }
          },
          reject => {
              if (reject.response) {              
                  alert(reject.response.data.errorMessage)
              }
          }      
      )      
    }

    //define if a user got via BROCKER link and send data to back-end
    if (this.$route.name === 'BrokerTraffic' && 
        this.$route.params.bid && 
        this.$route.params.subid1 && 
        this.$route.params.subid2 && 
        this.$route.params.subid3
      ) {

      //save variable into localstorage to check params each time before sign up
      localStorage.setItem('urBid', this.$route.params.bid)
      localStorage.setItem('urSubid1', this.$route.params.subid1)
      localStorage.setItem('urSubid2', this.$route.params.subid2)
      localStorage.setItem('urSubid3', this.$route.params.subid3)

      axios
          .post('/service/addBrkClick', {
              bid: this.$route.params.bid,
              subid1: this.$route.params.subid1,
              subid2: this.$route.params.subid2,
              subid3: this.$route.params.subid3

          })
          .then(response => {
              const _response = JSON.parse(response.request.responseText)
              if (_response.error && _response.error === "0") { 
              
              console.log(response)

              }
          },
          reject => {
              if (reject.response) {              
                  alert(reject.response.data.errorMessage)
              }
          }      
      )      


    }    

    

    // const scriptAds = document.createElement('script')
    // scriptAds.innerHTML = ''
    // scriptAds.src = 'https://ads4.krushmedia.com/?c=rtb&m=js&type=s2c&key=fe5c1687e1d07343abc02fb6be1555a7&domain=uniquerewards.com'
    // document.getElementsByClassName('wrapper')[0].append(scriptAds)

    getExtAds()

    // FB PLUGINS
    const script = document.createElement('script')
    script.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v8.0'
    script.setAttribute("nonce","cEYmXiKr")
    script.setAttribute("crossorigin","anonymous")
    script.setAttribute("defer", '')
    document.head.append(script)

    // LAST TRANSACTIONS LIST
    this.getLastTransactions()

  }
}
</script>

<style lang="scss">

  #carousel-1{
    height: 300px; 
    position: relative;

    .slick-slider{
      height: 100%;
    }

    .slick-info-payments{
      height: auto;
      width: 300px;
    }

    .slick-list{
      height: 100%;
    }

    .slick-track{
      height: 80%;
      padding: 30px 0;
    }

    .slick-current{
      img{
        transform: scale(1.25);
        transition: all .3s;
      }
    }

    .slick-arrow{

      position: absolute;
      top: 50%;
      z-index: 1;
      width: 44px;
      height: 83px;
      font-size: 0;
      border: none !important;
      outline: none !important;

      &:active{
        border: none !important;
        outline: none !important;     
      }

      &.slick-next{
        right: 0px;
        transform: translateY(-50%);
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAACpCAYAAABQ+d9qAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA25pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozRkY0NTY2OTdBMEJFNjExOEY5MEFFQkQwQkZGQjk2NSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxODQ5Mjc0ODdFRjcxMUU2QkFDMUZGRUY3OEE1QzFGNyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxODQ5Mjc0NzdFRjcxMUU2QkFDMUZGRUY3OEE1QzFGNyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNSAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3YmFiNGQyZi1hZWZmLWFkNDgtYmQwZS03YTYxOGNkYWIzOTUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6M0ZGNDU2Njk3QTBCRTYxMThGOTBBRUJEMEJGRkI5NjUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4bmwPxAAACnklEQVR42uzbSW7CQBCFYVyKuB7nyAGyzCrLHCDnyPWywEEJRsbQdru7XtUrqbwBedLH6PEfxnE8RBpepifvn1/jx9vrcHl0BV0Mq9Nlws4fmQe5vqphNm6kB0dCy+L7Q4+WJ+Oo0VIYT4uWlWmUaNmYToeWinmo0FI5Hw1adsxLgZad87ujpWEZV7Q0LueGlo5lXdDSubw5WhTWYYoWpfWYoUVxXSZoUV4fHC2AdULRAvrkYGgB/j4gaCQYgkaD1dEWYFW0FVgNbQlWQVuDu9Ee4C60F7gZ7QluQnuDd6MZwHforZPqLOBqNBO4Cs0Gvjup/gxNB95CU4LX0LTgEpoaPH9nJ7xEwtKCS1hK8BqWEbyKZQNvYpnAVVgW8FjY1aQE78J6g3djPcFNWC9wM9YD3IW1BndjLcEqWCuwGtYCrIpFg9WxSDAEiwLDsAgwFKsNhmM1wSZYLbAZVgNsiu0Fm2N7wC7YVrAbtgXsit0LdsfuAVNga8E02BowFXYLTIddA1NiS2Ba7AN4cYmJDnsHjoC9gaNgb+DpJPLWyWSGYYhWLMoh2JDgBC+GW3Ur3z8j+1/a+XT8f4ev2OVmmforEa+6jYJe/uiyurX6W8vq1mrDkdWt1aY5q1urnZ+sbq12L7O6tdqBz+rW6hApq1urg9Csbq0O87O6tQBD0FndotFZ3aLRWd2i0VndotFZ3aLRlNXtGpq2ui2hGa8iraJZL3sV0czX6Z6i2S8sPqDZwQ/3cUgkLDO4eIeMRMIygjfvPZJIWCZw9V1dWd0isd7grG7psB7grG6psVbgrG7DYJHgrG5R4KxuUeCsblHgrG5R4KxuUeCsblHgrG5R4KxuUeCsblHgONVtBOwcHKu6PZ+OQwTsHzBadfsrwACWq+hL43nCcQAAAABJRU5ErkJggg==) no-repeat top left;
      }

      &.slick-prev{
        left: 0px;
        transform: translateY(-50%) scale(-1, 1);
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAACpCAYAAABQ+d9qAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA25pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozRkY0NTY2OTdBMEJFNjExOEY5MEFFQkQwQkZGQjk2NSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxODQ5Mjc0ODdFRjcxMUU2QkFDMUZGRUY3OEE1QzFGNyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxODQ5Mjc0NzdFRjcxMUU2QkFDMUZGRUY3OEE1QzFGNyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNSAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3YmFiNGQyZi1hZWZmLWFkNDgtYmQwZS03YTYxOGNkYWIzOTUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6M0ZGNDU2Njk3QTBCRTYxMThGOTBBRUJEMEJGRkI5NjUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4bmwPxAAACnklEQVR42uzbSW7CQBCFYVyKuB7nyAGyzCrLHCDnyPWywEEJRsbQdru7XtUrqbwBedLH6PEfxnE8RBpepifvn1/jx9vrcHl0BV0Mq9Nlws4fmQe5vqphNm6kB0dCy+L7Q4+WJ+Oo0VIYT4uWlWmUaNmYToeWinmo0FI5Hw1adsxLgZad87ujpWEZV7Q0LueGlo5lXdDSubw5WhTWYYoWpfWYoUVxXSZoUV4fHC2AdULRAvrkYGgB/j4gaCQYgkaD1dEWYFW0FVgNbQlWQVuDu9Ee4C60F7gZ7QluQnuDd6MZwHforZPqLOBqNBO4Cs0Gvjup/gxNB95CU4LX0LTgEpoaPH9nJ7xEwtKCS1hK8BqWEbyKZQNvYpnAVVgW8FjY1aQE78J6g3djPcFNWC9wM9YD3IW1BndjLcEqWCuwGtYCrIpFg9WxSDAEiwLDsAgwFKsNhmM1wSZYLbAZVgNsiu0Fm2N7wC7YVrAbtgXsit0LdsfuAVNga8E02BowFXYLTIddA1NiS2Ba7AN4cYmJDnsHjoC9gaNgb+DpJPLWyWSGYYhWLMoh2JDgBC+GW3Ur3z8j+1/a+XT8f4ev2OVmmforEa+6jYJe/uiyurX6W8vq1mrDkdWt1aY5q1urnZ+sbq12L7O6tdqBz+rW6hApq1urg9Csbq0O87O6tQBD0FndotFZ3aLRWd2i0VndotFZ3aLRlNXtGpq2ui2hGa8iraJZL3sV0czX6Z6i2S8sPqDZwQ/3cUgkLDO4eIeMRMIygjfvPZJIWCZw9V1dWd0isd7grG7psB7grG6psVbgrG7DYJHgrG5R4KxuUeCsblHgrG5R4KxuUeCsblHgrG5R4KxuUeCsblHgONVtBOwcHKu6PZ+OQwTsHzBadfsrwACWq+hL43nCcQAAAABJRU5ErkJggg==) no-repeat left top;
      }

    }

  }

  /* .vm--modal{
    display: flex;
    justify-content: center;
    align-items: center;
  } */

  .facebook-video-wrap{

     width: 100%;
     height: 100%;

    .facebook-video-frame{
      width: 100%;
      height: 100%;
    }
  }


</style>
