<template>
  <div class="box-registratin">
    <h1>Registration</h1>
    <h3 class="text-before-search__title">You're about to finish and start earning</h3>
    <div class="line-step step2">
      <div class="line-step__cont"></div>
      <span class="line-step__number step1">Step 1</span>
      <span class="line-step__number">Step 2</span>
    </div>
    <h2 class="box-registratin__title">Where would you like us to send your check?</h2>
    <form class="mx-auto my-5" @submit.prevent="submit()">
      <div class="form-row mb-3">
        <div class="d-flex align-items-center col-12 col-md-3 text-left">
          <label class="box-field__label">First Name:<span class="color">*</span></label>
        </div>
        <div class="col-12 col-md-9 text-left">
          <input type="text" class="form-control" v-model="form.fname.value">
          <div :class="{ 'invalid-feedback d-block': form.fname.verified === 'no' }" v-text="form.fname.errorMsg"></div>
        </div>
      </div>
      <div class="form-row mb-3">
        <div class="d-flex align-items-center col-12 col-md-3 text-left">
          <label class="box-field__label">Last Name:<span class="color">*</span></label>
        </div>
        <div class="col-12 col-md-9 text-left">
          <input type="text" class="form-control" v-model="form.lname.value">
          <div :class="{ 'invalid-feedback d-block': form.lname.verified === 'no' }" v-text="form.lname.errorMsg"></div>
        </div>
      </div>
      <div class="form-row mb-3">
        <div class="d-flex align-items-center col-12 col-md-3 text-left">
          <label class="box-field__label">Country:<span class="color">*</span></label>
        </div>
        <div class="col-12 col-md-9 text-left">
          <select class="custom-select" v-model="form.country.value" @change="getStates($event.target.value)">
            <option selected disabled value="">Choose country ...</option>
            <option v-for="country in countryList" :value="country.CountryCode" v-text="country.CountryName">
            </option>
          </select>
          <div :class="{ 'invalid-feedback d-block': form.country.verified === 'no' }" v-text="form.country.errorMsg">
          </div>
        </div>
      </div>
      <div class="form-row mb-3">
        <div class="d-flex align-items-center col-12 col-md-3 text-left">
          <label class="box-field__label">Address:<span class="color">*</span></label>
        </div>
        <div class="col-12 col-md-9 text-left">
          <input type="text" class="form-control" v-model="form.street.value">
          <div :class="{ 'invalid-feedback d-block': form.street.verified === 'no' }" v-text="form.street.errorMsg">
          </div>
        </div>
      </div>
      <div class="form-row mb-3">
        <div class="d-flex align-items-center col-12 col-md-3 text-left">
          <label class="box-field__label">City:<span class="color">*</span></label>
        </div>
        <div class="col-12 col-md-9 text-left">
          <input type="text" class="form-control" v-model="form.city.value">
          <div :class="{ 'invalid-feedback d-block': form.city.verified === 'no' }" v-text="form.city.errorMsg"></div>
        </div>
      </div>
      <div class="form-row mb-3">
        <div class="d-flex align-items-center col-12 col-md-3 text-left">
          <label class="box-field__label box-field__label_top">State/Province/ County:<span
              class="color">*</span></label>
        </div>
        <div class="col-12 col-md-9 text-left">
          <select class="custom-select" v-model="form.state.value">
            <option selected disabled value="" v-if="form.country.value === 'GB'">Chose county ...</option>
            <option selected disabled value="" v-else-if="form.country.value === 'CA'">Chose province ...</option>
            <option selected disabled value="" v-else-if="form.country .value=== 'US'">Chose state ...</option>
            <option selected disabled value="" v-else="form.country.value === ''"></option>
            <option v-for="state in statesList" :value="state.id" v-text="state.StateName">
            </option>
          </select>
          <div :class="{ 'invalid-feedback d-block': form.state.verified === 'no' }" v-text="form.state.errorMsg"></div>
        </div>
      </div>
      <div class="form-row mb-3">
        <div class="d-flex align-items-center col-12 col-md-3 text-left">
          <label class="box-field__label">Zip/Postal code:<span class="color">*</span></label>
        </div>
        <div class="col-12 col-md-9 text-left">
          <input type="text" class="form-control" v-model="form.zip.value">
          <div :class="{ 'invalid-feedback d-block': form.zip.verified === 'no' }" v-text="form.zip.errorMsg"></div>
        </div>
      </div>
      <div class="form-row mb-3">
        <div class="d-flex align-items-center col-12 col-md-3 text-left">
          <label class="box-field__label">Phone:<span class="color">*</span></label>
        </div>
        <div class="col-12 col-md-9 text-left">
          <input type="text" class="form-control" v-model="form.phone.value">
          <div :class="{ 'invalid-feedback d-block': form.phone.verified === 'no' }" v-text="form.phone.errorMsg"></div>
        </div>
      </div>
      <div class="form-row mb-3">
        <div class="d-flex align-items-center col-12 col-md-3 text-left">
          <label class="box-field__label">Web Site URL</label>
        </div>
        <div class="col-12 col-md-9 text-left">
          <input type="text" class="form-control" v-model="form.web.value">
          <div :class="{ 'invalid-feedback d-block': form.web.verified === 'no' }" v-text="form.web.errorMsg"></div>
        </div>
      </div>
      <div class="form-row mb-3">
        <div class="d-flex align-items-center col-12 col-md-3 text-left">
          <label class="box-field__label">Gender:<span class="color">*</span></label>
        </div>
        <div class="col-12 col-md-9 text-left">
          <select class="custom-select" v-model="form.gender.value">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <div :class="{ 'invalid-feedback d-block': form.gender.verified === 'no' }" v-text="form.gender.errorMsg">
          </div>
        </div>
      </div>
      <div class="form-row mb-3">
        <div class="d-flex align-items-center col-12 col-md-3 text-left">
          <label class="box-field__label">Birth Date:<span class="color">*</span></label>
        </div>
        <div class="col-12 col-md-9 text-left">
          <div class="row">
            <div class="col-12 col-lg-4 mb-3 text-left">
              <select class="custom-select" v-model="birthDate.day">
                <option selected disabled value="">Day</option>
                <option v-for="i in (1, 31)" :value="i" v-text="i"></option>
              </select>
            </div>
            <div class="col-12 col-lg-4 mb-3 text-left">
              <select class="custom-select" v-model="birthDate.month">
                <option selected disabled value="">Month</option>
                <option v-for="month, i in months" :value="i" v-text="month"></option>
              </select>
            </div>
            <div class="col-12 col-lg-4 mb-3 text-left">
              <select class="custom-select" v-model="birthDate.year">
                <option selected disabled value="">Year</option>
                <option v-for="i in range(1900, ( new Date().getFullYear() - 13 ) )" :value="i" v-text="i"></option>
              </select>
            </div>
          </div>
        </div>
        <div :class="{ 'invalid-feedback d-block': form.bdate.verified === 'no' }" v-text="form.bdate.errorMsg"></div>
      </div>
      <ul class="list-checkbox my-4">
        <li class="list-checkbox__item">
          <div class="d-flex custom-control custom-checkbox mr-sm-2">
            <input type="checkbox" class="custom-control-input" id="registerConditions1" v-model="form.optin.value"
              true-value='1' false-value=''>
            <label class="text-left d-flex align-items-center pl-3 custom-control-label" for="registerConditions1">Yes,
              I want to receive Special Cash Offers / Surveys by e-mail</label>
          </div>
        </li>
        <li class="list-checkbox__item">
          <div class="d-flex custom-control custom-checkbox mr-sm-2">
            <input type="checkbox" class="custom-control-input" id="registerConditions2" v-model="form.optin1.value"
              true-value='1' false-value=''>
            <label class="text-left d-flex align-items-center pl-3 custom-control-label" for="registerConditions2">Yes,
              I want to receive Special Shoping Offers by e-mail</label>
          </div>
        </li>
        <li class="list-checkbox__item">
          <div class="d-flex custom-control custom-checkbox mr-sm-2">
            <input type="checkbox" class="custom-control-input" id="registerConditions3" v-model="form.notif.value"
              true-value='1' false-value=''>
            <label class="text-left d-flex align-items-center pl-3 custom-control-label" for="registerConditions3">Yes,
              I want to receive Auto Cash Notifications via e-mail when I complete</label>
          </div>
        </li>
        <li class="list-checkbox__item">
          <div class="d-flex custom-control custom-checkbox mr-sm-2">
            <input type="checkbox" class="custom-control-input" id="registerConditions4" v-model="form.conditions.value"
              true-value='1' false-value=''>
            <label class="text-left d-flex align-items-center pl-3 custom-control-label" for="registerConditions4">Terms
              and Conditions</a> of UniqueRewards</label>
          </div>
          <div :class="{ 'invalid-feedback d-block text-left': form.conditions.verified === 'no' }"
            v-text="form.conditions.errorMsg"></div>
        </li>
      </ul>
      <div class="reguired text-left my-2"><span>*</span> - reguired fields</div>
      <div class="d-flex align-items-center justify-content-center flex-column my-3">
        <vue-recaptcha sitekey="6Lf3CN4UAAAAAIPKFfpCcgYjHDfa8DqglTSFpvbS" :loadRecaptchaScript="true"></vue-recaptcha>
        <div :class="{ 'invalid-feedback d-block': form['g-recaptcha-response'].verified === 'no' }"
          v-text="form['g-recaptcha-response'].errorMsg"></div>
      </div>
      <input 
        type="submit" 
        class="button button_100 button_large button_orange" 
        value="Complete and get $5 bonus now!"
        :class="{ 'disabled': button === 'disabled' }"
      >
    </form>
    <modal name="register-info">
      <div class="w-100 h-100 p-5 d-flex justify-content-center align-items-center flex-column">
        <h1 class="text-success">Registration complete</h1>
        <h4 class="mt-3 h4">See console for details</h4>
      </div>
    </modal>
  </div>
</template>
<script>
  import Fingerprint from 'fingerprintjs'
  import {Validation} from 'utils/validation'
  import {months} from '@/utils/months'
  import VueRecaptcha from 'vue-recaptcha'
  import range from 'lodash/range'
  import {mapGetters} from 'vuex'

  export default {
    components: {
      VueRecaptcha
    },
    computed: {
      ...mapGetters(['user'])
    },
    data() {
      return {
        validation: new Validation(),
        countryList: [],
        statesList: [],
        months,
        birthDate: {
          day: '',
          month: '',
          year: ''
        },
        button: 'enabled',
        form: {
          fname: {
            value: '',
            required: true,
            errorMsg: '',
            verified: 'pending',
          },
          lname: {
            value: '',
            required: true,
            errorMsg: '',
            verified: 'pending',
          },
          country: {
            value: '',
            required: true,
            errorMsg: '',
            verified: 'pending',
          },
          street: {
            value: '',
            required: true,
            errorMsg: '',
            verified: 'pending',
          },
          city: {
            value: '',
            required: true,
            errorMsg: '',
            verified: 'pending',
          },
          state: {
            value: '',
            required: true,
            errorMsg: '',
            verified: 'pending',
          },
          zip: {
            value: '',
            required: true,
            errorMsg: '',
            verified: 'pending',
          },
          phone: {
            value: '',
            required: true,
            errorMsg: '',
            verified: 'pending',
          },
          web: {
            value: '',
            required: false,
            errorMsg: '',
            verified: 'pending',
          },
          gender: {
            value: '',
            required: true,
            errorMsg: '',
            verified: 'pending',
          },
          bdate: {
            value: '',
            required: true,
            errorMsg: '',
            verified: 'pending',
          },
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
          'optin': {
            value: '',
            required: false,
            errorMsg: '',
            verified: 'pending',
          },
          'optin1': {
            value: '',
            required: false,
            errorMsg: '',
            verified: 'pending',
          },
          'notif': {
            value: '',
            required: false,
            errorMsg: '',
            verified: 'pending',
          },
          'conditions': {
            value: '1',
            required: true,
            errorMsg: '',
            verified: 'pending',
          }                                          
        }
      }
    },
    methods: {
      submit() {
        this.makeProperDate()
        this.addAdditionalFields()
        
        this.validation.check(this.form)

        if (this.validation.status === 'done') {
          
          let newData = Object.keys(this.form).reduce((acc,key) => {
                      acc[key] = this.form[key].value
	                    return acc
                    },{})

          

          newData.bdd = this.birthDate.day
          newData.bdm = this.birthDate.month
          newData.bdy = this.birthDate.year

          //add a referral tail if a user has previously entered the website via referral link
          let urRefid = localStorage.getItem('urRefid')
          let urHref = localStorage.getItem('urHref')

          if (urRefid && urHref) {
            newData.refid = urRefid
            newData.href = urHref
          }          


          // add subids if a user got the website via broker traffic
          let urBid = localStorage.getItem('urBid')
          let urSubid1 = localStorage.getItem('urSubid1')
          let urSubid2 = localStorage.getItem('urSubid2')
          let urSubid3 = localStorage.getItem('urSubid3')


          if (urBid && urSubid1 && urSubid2 && urSubid3) {
            newData.bid = urBid
            newData.subid1 = urSubid1
            newData.subid2 = urSubid2
            newData.subid3 = urSubid3
          }                      
          
          this.$store.dispatch('updateUserData', newData)
          

          this.button = 'disabled'
          /*

            ОТПРАВКА ДАННЫХ РЕГИСТРАЦИИ

          */

          axios
            .post('/service/signup', this.user)
            .then(
              response => {
                try {
                  // console.log('/service/signup: ',JSON.parse( response.request.responseText ) )
                  const _response = JSON.parse(response.request.responseText)
                  if (_response.error && _response.error === "0") {
                    console.log('_response: ', _response)
                    this.$modal.show('register-info')
                    this.$store.dispatch('authentication', { status: true, token: _response.result.token }) 
                    this.$store.dispatch('updateUserData', _response.result)
                    // очищаем регистрационные данные
                    // this.$store.dispatch('resetUserData') 
                    this.$store.dispatch('changeRegistrationStep', 1)
                    const { uid } = _response.result
                    this.$router.push(`/regpath/${uid}/1`)
                  }
                } catch (e) {
                  console.log('RESPONSE PARSING ERROR: ', e.message)
                } finally {
                  this.button = 'enabled'
                }
              },
              reject => {
                if (reject.response) {
                  console.log('REJECTED')
                  console.log(reject.response.data)
                  console.log(reject.response.status)
                  console.log(reject.response.headers)
                }
                this.button = 'enabled'
              }
            )
        } else {
          console.log('VALIDATION WRONG')
        }
      },
      /*

          СПИСОК ШТАТОВ-ГРАФСТВ-ПРОВИНЦИЙ

      */
      getStates(country) {
        // console.log('form.country.value: ',this.form.country.value)
        axios
          .post('/service/geoListStates', {
            country
          }, {
            headers: {}
          })
          .then(
            response => {
              try {
                // console.log('/service/config response: ',JSON.parse( response.request.responseText ) )
                const _response = JSON.parse(response.request.responseText)
                if (_response.error && _response.error === "0") {
                  this.statesList = _response.result

                  // console.log('this.statesList: ',this.statesList )                    
                }
              } catch (e) {
                console.log('RESPONSE PARSING ERROR: ', e.message)
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
      },
      range: (from, to) => range(from, to),
      makeProperDate() {
        let day = String(this.birthDate.day).length === 1 ? ('0' + this.birthDate.day) : this.birthDate.day
        let month = String(this.birthDate.month).length === 1 ? ('0' + this.birthDate.month) : this.birthDate.month
        this.form.bdate.value = `${this.birthDate.year}-${month}-${day}`        
      },
      addAdditionalFields() {
        this.form.fp_val.value = new Fingerprint({ canvas: true }).get()
        this.form['g-recaptcha-response'].value = grecaptcha.getResponse().trim()
      },
      getGeolistCountries(){
        axios
          .get('/service/geoListCountries', {}, {
            headers: {}
          })
          .then(
            response => {
              try {
                // console.log('/service/config response: ',JSON.parse( response.request.responseText ) )
                const _response = JSON.parse(response.request.responseText)
                if (_response.error && _response.error === "0") {
                  this.countryList = _response.result
                  // console.log('this.countryList: ',this.countryList )
                }
              } catch (e) {
                console.log('RESPONSE PARSING ERROR: ', e.message)
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
    mounted() {

        this.getGeolistCountries()

    },

  }
</script>