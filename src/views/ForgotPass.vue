<template>
  <main class="content">

    <div class="box-registratin wrapper">
      <h1>Password recovery</h1>
      <h3 class="text-before-search__title">Fill in the form</h3>
      <form @submit.prevent="submit">
        <div class="form-row mb-3 text-left">
          <input type="email" placeholder="enter your email" class="form-control" v-model="form.email.value">
          <div :class="{ 'invalid-feedback d-block': form.email.verified === 'no' }" v-text="form.email.errorMsg"></div>
        </div>
        
        <div class="form-row mb-3 text-left">
          <vue-recaptcha sitekey="6Lf3CN4UAAAAAIPKFfpCcgYjHDfa8DqglTSFpvbS" :loadRecaptchaScript="true"></vue-recaptcha>
          <div :class="{ 'invalid-feedback d-block': form['g-recaptcha-response'].verified === 'no' }" v-text="form['g-recaptcha-response'].errorMsg"></div>    
        </div>
        
        <div class="form-row mb-3">
          <input type="submit" value="Submit" class="button button_100 button_large button_orange">
        </div>
      </form>
    </div>

    


    

  </main>
</template>
<script>

import Fingerprint from 'fingerprintjs'
import VueRecaptcha from 'vue-recaptcha'
import {Validation} from 'utils/validation'

import {getExtAds} from 'utils/helpers'

export default {
  components: {
    VueRecaptcha
  },
  data () {
    return {    
      validation: new Validation(),
      form: {
        fp_val: {
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
    
  },
  methods: {
    addAdditionalFields() {
      this.form.fp_val.value = new Fingerprint({ canvas: true }).get()
      this.form['g-recaptcha-response'].value = grecaptcha.getResponse().trim()
    },

    submit() {
      this.addAdditionalFields()        
      this.validation.check(this.form)  

      if (this.validation.status === 'done') { 

        axios
          .post('/service/sendRecoverLink', {
            email: this.form.email.value,                        
            'g-recaptcha-response': this.form['g-recaptcha-response'].value
          })
          .then(response => {
            const _response = JSON.parse(response.request.responseText)
            if (_response.error && _response.error === "0") { 
              
              alert('Check your email. We\'ve sent a link to your email')

            }

          },
          reject => {
            if (reject.response) {              
              console.log('REJECTED')
              alert(reject.response.data.errorMessage)
            }
          }      
        )         
      }        
      
    }
    
  },
  mounted () {

    

  }
}
</script>


