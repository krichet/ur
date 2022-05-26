<template>
  <main class="content">

    <div class="box-registratin wrapper">
      <h1>Choose a new password</h1>
      <h3 class="text-before-search__title">Fill in the form</h3>
      <form @submit.prevent="submit">
        <div class="form-row mb-3 text-left">
          <input type="password" class="form-control" v-model="form.newpwd.value" placeholder="Enter new password">
          <div :class="{ 'invalid-feedback d-block': form.newpwd.verified === 'no' }" v-text="form.newpwd.errorMsg"></div>
        </div>
        <div class="form-row mb-3 text-left">
          <input type="password" class="form-control" v-model="form.newpwd2.value" placeholder="Confirm new password">
          <div :class="{ 'invalid-feedback d-block': form.newpwd2.verified === 'no' }" v-text="form.newpwd2.errorMsg"></div>
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
      token: this.$route.params.token,
      form: {
        fp_val: {
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
        },
          newpwd: {
          value: '',
          required: true,
          errorMsg: '',
          verified: 'pending',
        },
          newpwd2: {
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
          .post('/service/updateRecoveredPwd', {
            token: this.token,
            newpwd: this.form.newpwd.value,                        
            newpwd2: this.form.newpwd2.value,                        
            'g-recaptcha-response': this.form['g-recaptcha-response'].value
          })
          .then(response => {
            const _response = JSON.parse(response.request.responseText)
            if (_response.error && _response.error === "0") { 
              
              alert('Your password has been changed')

              this.$router.push(`/`)

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


