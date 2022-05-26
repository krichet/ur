<template>
    <div>     
        <modal 
            name="login"
            height="auto"
        >
            <div class="px-5 py-4 w-100 h-100">
                <h3 
                    class="text-danger text-center"
                    v-text="modalErrorMsg"
                ></h3>
                <h2 class="text-primary text-center mt-2 text-uppercase">Log In</h2>
                <form 
                    class="mx-auto d-flex justify-content-center align-items-start flex-column modal__content"
                    @submit.prevent="submit()" 
                    novalidate                   
                >
                <div class="form-row mb-3 w-100">
                    <input 
                        type="email" 
                        class="form-control" 
                        placeholder="Email"
                        v-model="user.login.value"
                    >
                    <div 
                        :class="{ 'invalid-feedback d-block': user.login.verified === 'no' }" 
                        v-text="user.login.errorMsg"
                    >
                    </div>
                </div>
                <div class="form-row mb-3 w-100">
                    <input 
                        type="password" 
                        class="form-control" 
                        placeholder="Password"
                        v-model="user.pwd.value"
                    >
                    <div 
                        :class="{ 'invalid-feedback d-block': user.pwd.verified === 'no' }" 
                        v-text="user.pwd.errorMsg"
                    >
                    </div>
                </div>              
                <a href="#" class="forgot" @click="$router.push(`/forgot`), $modal.hide('login')">Forgot password</a>
                <input 
                    type="submit" 
                    class="button button_orange button_large" 
                    value="Log In"
                    :class="{ 'disabled': button === 'disabled' }"
                >
                </form>
                
            </div>
          </modal>
    </div>
</template>

<script>
import {Validation} from 'utils/validation'
import Fingerprint from 'fingerprintjs'

export default{
    data(){
        return {
            user:{
                login: {
                    value: '',
                    required: true,
                    errorMsg: '',
                    verified: 'pending'
                },
                pwd: {
                    value: '',
                    required: true,
                    errorMsg: '',
                    verified: 'pending'
                },
                fp_val:{
                    value: new Fingerprint({ canvas: true }).get(),
                    required: true,
                    errorMsg: '',
                    verified: 'pending' 
                }
            },
            validation: new Validation(),
            button: 'enabled',
            modalErrorMsg: ''
        }
    },
    methods:{
        submit(){
            console.log('this.$store.state.auth.status: ',this.$store.state.auth.status)
            this.validation.check(this.user)       
            if (this.validation.status === 'done') {
                this.button = 'disabled'
                axios														
                    .post('/service/login', this.formatDataToServer(this.user) )
                    .then(												
                        response =>  {
                            try{
                                // console.log('/service/login: ',JSON.parse( response.request.responseText ) )
                                const _response = JSON.parse( response.request.responseText )
                                if(_response.error){
                                    if(_response.error === "0"){
                                        console.log('_response: ',_response )
                                        this.$modal.hide('login')
                                        this.$store.dispatch('authentication', { status: true, token: _response.result.token }) 
                                        this.$store.dispatch('updateUserData',{ token: _response.result.token })
                                        // this.$store.dispatch('updateUserForm', this.user)     
                                    }else{
                                        this.modalErrorMsg = _response.errorMessage
                                    }
                                }
                            }catch(e){
                                console.log('RESPONSE PARSING ERROR: ',e.message )
                            }finally{
                                this.button = 'enabled'
                            }                
                        } ,														
                        reject => {
                            if (reject.response) {
                                console.log('REJECTED')
                                console.log(reject.response.data)
                                console.log(reject.response.status)
                                console.log(reject.response.headers)
                                if(reject.response.data.errorMessage){
                                    this.modalErrorMsg = reject.response.data.errorMessage
                                }
                            }
                            this.button = 'enabled'
                        }													
                    )	 
                }else{
                console.log('VALIDATION WRONG')            
                }
        },
        formatDataToServer(data){
            return Object.keys( data ).reduce((acc,cur) => { 
                acc[cur] = data[cur].value 
                return acc
            },{}) 
        }
    },
    
}
</script>