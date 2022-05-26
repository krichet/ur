<template>
    <div class="wrapper">
        <RegisterStep1 v-if="step === 1" key="step-1"></RegisterStep1>
        <RegisterStep2 v-else-if="step === 2"  key="step-2"></RegisterStep2>
    </div>
</template>
<script>
import RegisterStep1 from 'components/register/RegisterStep1'
import RegisterStep2 from 'components/register/RegisterStep2'
export default {

    components:{
        RegisterStep1,
        RegisterStep2
    },
    computed: {
      step () {
        return this.$store.state.user.register.step
      }
    },
    mounted(){
        /*

          ПОЛУЧЕНИЕ IS_SIGNUP2 - БАЗОВОЙ НАСТРОЙКИ КОНФИГУРАЦИИ

      */
      axios														
            .get('/service/config')
            .then(												
                response =>  {
                  try{
                    console.log('/service/config response: ',JSON.parse( response.request.responseText ) )
                    // console.log('this.$store.state.register: ',this.$store.state.register )
                    const _response = JSON.parse( response.request.responseText )
                    if(_response.error && _response.error === "0"){
                      const IS_SIGNUP2 = _response.result[0]['IS_SIGNUP2'] ?? ''
                    //   console.log('IS_SIGNUP2: ',IS_SIGNUP2)
                      this.$store.dispatch('getBaseRegisterConfig', IS_SIGNUP2)
                    }else 
                      if(_response.error && _response.error === "109"){
                        console.log(_response.errorMessage)
                      }
                  }catch(e){
                    console.log('RESPONSE PARSING ERROR: ',e.message )
                  }           
                 } ,														
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
}
</script>

<style lang="scss">


</style>
    