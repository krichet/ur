<template>
        <div class="box-registratin">
            <h1>Registration</h1>
            <h3 class="text-before-search__title">You're about to finish and start earning</h3>
            <div class="line-step">
                <div class="line-step__cont"></div>
                <span class="line-step__number step1">Step 1</span>
                <span class="line-step__number">Step 2</span>
            </div>           
            <form class="mx-auto my-5" @submit.prevent="submit()">
                <div class="form-row mb-3">
                  <div class="d-flex align-items-center col-12 col-md-4 text-left">
                    <label class="box-field__label">E-mail ( <a href="#" class="standart-link">Read this</a> ):<span class="color">*</span></label>
                  </div>
                  <div class="col-12 col-md-8 text-left">
                    <input type="email" class="form-control" id="email" v-model="form.email.value">
                    <div :class="{ 'invalid-feedback d-block': form.email.verified === 'no' }" v-text="form.email.errorMsg"></div>
                  </div>
                </div>
                <div class="form-row mb-3">
                  <div class="d-flex align-items-center col-12 col-md-4 text-left">
                    <label class="box-field__label">Confirm e-mail<span class="color">*</span></label>
                  </div>
                  <div class="col-12 col-md-8 text-left">
                    <input type="email" class="form-control" id="email-confirm" v-model="form.confirmEmail.value">
                    <div :class="{ 'invalid-feedback d-block': form.confirmEmail.verified === 'no' }"
                      v-text="form.confirmEmail.errorMsg"></div>
                  </div>
                </div>

                <div class="form-row mb-3">
                  <div class="d-flex align-items-center col-12 col-md-4 text-left">
                    <label class="box-field__label top2">Please enter you password to confirm changes:<span class="color">*</span></label>
                  </div>
                  <div class="col-12 col-md-8 text-left">
                    <input type="password" class="form-control" v-model="form.pwd.value">
                    <div :class="{ 'invalid-feedback d-block': form.pwd.verified === 'no' }" v-text="form.pwd.errorMsg"></div>
                  </div>
                </div>
                <div class="reguired text-left"><span>*</span> - reguired fields</div>
                <div class="box-field box-field_line">
                    <div class="box-field__left">
                        <label class="box-field__label opt2">Sign up with:</label>
                    </div>
                    <div class="box-field__right">
                        <ul class="list-social opt2">
                            <li class="list-social__item">
                                <a href="#" class="list-social__link list-social__link_social-1"><img src="img/img_social_1.jpg" alt=""></a>
                            </li>
                            <li class="list-social__item">
                                <a href="#" class="list-social__link list-social__link_social-2"><img src="img/img_social_2.jpg" alt=""></a>
                            </li>
                            <li class="list-social__item">
                                <a href="#" class="list-social__link list-social__link_social-3"><img src="img/img_social_3.jpg" alt=""></a>
                            </li>
                        </ul>
                    </div>
                </div>               
                <input 
                    type="submit" 
                    class="button button_100 button_large button_orange" 
                    value="Complete and get $5 bonus now!"
                    :class="{ 'disabled': button === 'disabled' }"
                >
              </form>
              <modal name="register-error">
                <div class="w-100 h-100 p-5 d-flex justify-content-center align-items-center flex-column">
                  <h1 class="text-danger">Registration error</h1>
                  <h4 class="mt-3 h4" v-text="errorInfo"></h4>
                </div>
              </modal> 
              <!-- 

                  ДОБ МОДАЛЬНОЕ ОКНО С ЛОГИНОМ, ЕСЛИ ТАКОЙ МЕЙЛ УЖЕ СУЩЕСТВУЕТ

               -->
        </div>
</template>
<script>
import {Validation} from 'utils/validation'
// import {mapGetters} from 'vuex'
export default {
  data() {
    return {
      validation: new Validation(),
      errorInfo: '',
      button: 'enabled',
      form: {
        email: {
          value: '',
          required: true,
          errorMsg: '',
          verified: 'pending', // pending - валидация не проводилась (ожидание), yes - проведена успешно, no - ошибка валидации
        },
        confirmEmail: {
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
      }
    }
  },
  computed:{
    // ...mapGetters(['pwd'])
  },
  methods: {
    submit() {   
      console.log('this.form: ',this.form)
      this.validation.check(this.form)  
      if (this.validation.status === 'done') {

        let newData = Object.keys(this.form).reduce((acc,key) => {
                      acc[key] = this.form[key].value
	                    return acc
                    },{})
        this.$store.dispatch('updateUserData', newData)


        this.button = 'disabled'
        const email = this.form.email
        /*

            ПРОВЕРЯЕМ, ЕСТЬ ЛИ ЮЗЕР С ТАКИМ МЕЙЛОМ В БД

        */
        axios
          .post('/service/checkEmail', {email}, {headers: {}})
          .then(
            response => {
              try {
                console.log('response: ',JSON.parse( response.request.responseText ) )
                const _response = JSON.parse(response.request.responseText)
                if (_response.error && _response.error === "0") {

                /*

                  ФОРМАТ РЕГИСТРАЦИИ ВРЕМЕННО ОТКЛЮЧЁН

                */
                 // if (this.$store.state.user.register.IS_SIGNUP2 === '0') {
                    console.log('EMAIL NOT IN BASE. PLEASE, INPUT ADDITIONAL DATA')
                    this.validation.status = 'pending'
                    this.$store.dispatch('changeRegistrationStep', 2)
                 // } else {
                 //   console.log('ANOTHER REGISTRATION FORMAT')
                 // }

                 

                } else
                if (_response.error && _response.error === "109") {
                  console.log(_response.errorMessage)
                  this.errorInfo = _response.errorMessage
                }
              } catch (e) {
                console.log('RESPONSE PARSING ERROR: ', e.message)
                this.errorInfo = e.message                
              } finally {
                this.button = 'ebabled'
              }
            },
            reject => {
              if (reject.response) {
                console.log('REJECTED')
                console.log(reject.response.data)
                console.log(reject.response.status)
                console.log(reject.response.headers)
                this.errorInfo = 'Network Error'
                this.$modal.show('register-error')
              }
              this.button = 'ebabled'
            }
          )
      } else {
        console.log('VALIDATION WRONG')
      }
    }
  }
}
</script>
    