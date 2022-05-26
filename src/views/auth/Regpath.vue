<template>
    <div class="wrapper w-100">
        <iframe src="" class="iframe"></iframe>
    </div>
</template>
<script>
import $ from 'jquery'
// import {serializeObject} from 'form-serializer'

export default {
    data(){
        return {
            regpathes: [],
            grp: 1,
            uid: 0,
            buttonAction: false, // ЕСЛИ ПЕРЕХОД ПРОИСХОДИТ ПО КНОПКЕ CONTINUE
        }
    },
    methods:{
        frameLoaded(){ 
                let frameContent = (this.frame.contentWindow || this.frame.contentDocument)
                if (frameContent.document){
                    const stopInterval = setInterval(()=>{
                        /*
                        
                            ОШИБКА: Uncaught TypeError: Cannot read property 'querySelector' of null at eval
                        
                        */
                        const btn = frameContent.document.querySelector('[type=submit]')
                        
                        if(btn){		
                            clearInterval(stopInterval)	
                               
                            btn.addEventListener('click',(e)=>{
                                e.preventDefault()
                                this.submit(btn)

                            },false)


                        }			
                    },160)
                }
            // }
                	          
        },
        addContent(_content=''){
            let y = (this.frame.contentWindow || this.frame.contentDocument)
            if(y.document){
                let doc = y.document
                doc.open()
                doc.write(_content)
                doc.close()                             			  
            }
        },
        submit(btn){
            this.buttonAction = true

            if(this.regpathes.length <= Number( this.grp )){
                this.$router.push(`/offers-internal/${this.uid}`)
                console.log('ПОДГРУЖАЕМ ОФЕРЫ')
            }else{
                this.grp++
                this.$router.push( { 
                        name: "regpath", params: { uid: this.uid, grp: this.grp } 
                        },()=>{
                            this.buttonAction = false
                        }
                )
                console.log('1 this.regpathes[this.grp - 1]: ',this.regpathes[this.grp - 1])
                const regpath = this.regpathes[this.grp - 1].srcl  
                this.addContent(regpath)
                this.buttonAction = false                                  
            }

            // $(btn).attr('disabled','disabled')
            // const form = $(btn).closest('form')
            // const data = form.serializeObject()
            // const method = form.attr('method')
            // const action = form.attr('action') ?? ''

            // const _REMOTE = !!~action.search(/http(s)?:\/\//) ? action : 'http://www.uniquerewards.com' + action
            // // const _LOCAL = 'http://uniq.localhost/test'
            // // const _LOCAL = 'http://localhost:3000/test'
           
            // // axios.defaults.baseURL = 'http://uniq.localhost'

            // let params = new URLSearchParams()		
            // for(let i in data){
            //     if(data.hasOwnProperty(i)){
            //         params.append(i, data[i])	
            //     }
            // }
				
            // console.log('data: ',data) 

            // axios({
            //     method,
            //     url: _REMOTE,
            //     data: params,
            // }).then(response =>  {
            //             try{
            //                 console.log('response: ',response)
            //                 console.log('response.request: ',response.request)
            //                 console.log('response.request.responseText: ',response.request.responseText)
            //                 console.log('response.status: ',response.status)
            //                 /*

            //                     ЕСЛИ ЕСТЬ ПОДГРУЖАЕМ СЛЕДУЮЩИЙ РЕГПАС, ЕСЛИ НЕТ - ПОДГРУЖАЕМ ВНУТРЕННИЕ РЕГПАСЫ

            //                     ПРЕДУСМ ВАРИАНТ, ЕСЛИ БУДЕТ ОШИБКА ОБРАБОТКИ ДАННЫХ - ВОЗМОЖНО ПОДГРУЗКУ ОФЕРОВ ПЕРЕНЕСТИ В FINAL

            //                 */
            //                 if(response.status && (response.status == 200 || response.status == 302)){
            //                     if(this.regpathes.length <= this.grp){
            //                         this.$router.push(`/offers-internal/${this.uid}`)
            //                         console.log('ПОДГРУЖАЕМ ОФЕРЫ')
            //                     }else{
            //                         this.grp++
            //                         this.$router.push( { 
            //                                 name: "regpath", params: { uid: this.uid, grp: this.grp } 
            //                                 },()=>{
            //                                     this.buttonAction = false
            //                                 }
            //                         )
            //                         console.log('1 this.regpathes[this.grp - 1]: ',this.regpathes[this.grp - 1])
            //                         const regpath = this.regpathes[this.grp - 1].srcl  
            //                         this.addContent(regpath)                                  
            //                     }
                                
            //                 }
            //             }catch(e){
            //                     console.log('RESPONSE PARSING ERROR: ',e.message )
            //             }           
            // })
            // .catch(reject => {
            //                 if (reject.response) {
            //                     console.log('REJECTED')
            //                     console.log(reject.response.data)
            //                     console.log(reject.response.status)
            //                     console.log(reject.response.headers)
            //                 }
            //             }													
            //         )
            // .finally(() =>{
            //     $(btn).removeAttr('disabled')
            //     /*
            //         ЕСЛИ AJAX ОТРАБОТАЛ, НО ПЕРЕХОД ПО МАРШТУРУ ПО КАКОЙ-ТО ПРИЧИНЕ НЕ ПРОИЗОШЁЛ
            //     */
            //     this.buttonAction = false
            // })            
        }
    },
    beforeRouteUpdate (to, from, next) {
        // ЕСЛИ ПЕРЕХОД ПРОИСХОДИТ ПО КНОПКЕ CONTINUE
        if(this.buttonAction){ 
            next() 
        }else{
            console.log('to.params: ',to.params)
            this.uid = Number(to.params.uid)
            this.grp = Number(to.params.grp)
            console.log('2 this.regpathes[this.grp - 1]: ',this.regpathes[this.grp - 1])
            const regpath = this.regpathes[this.grp - 1].srcl  
            this.addContent(regpath) 
            next()
        }
    },
    mounted(){
        /*

            ПОЛУЧАЕМ ФРЕЙМ

        */
        this.frame = document.querySelector('.iframe')
        $(this.frame).on('load',()=> this.frameLoaded())

       console.log('1: ',this.$route.params)
       this.uid = Number( this.$route.params.uid)
       this.grp = Number( this.$route.params.grp)
            
        axios														
            .post('/service/getAllRegpath', { uid: this.uid })
            .then(response =>  {
                try{
                    console.log('response.request.responseText: ',response.request.responseText)
                    //console.log(JSON.parse( response.request.responseText ) )
                    const _response = JSON.parse( response.request.responseText )
                    console.log('_response: ',_response)
                    if(_response.error && _response.error === "0"){
                        
                        if(Array.isArray(_response.result.regpath) && _response.result.regpath.length > 0 ){
                            /*
                                РАБОЧИЙ ВАРИАНТ
                            */
                            this.regpathes = _response.result.regpath

                            /*
                                ТЕСТОВЫЙ ВАРИАНТ
                            */
                            // this.regpathes = [
                            //     {
                            //     srcl: '<!DOCTYPE html><html xmlns="//www.w3.org/1999/xhtml"><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /></head><body>regpath 1<form method="post"><input type="submit" id="btn1" value="continue 1"></form></body></html>'
                            //     },
                            //     {
                            //     srcl: '<!DOCTYPE html><html xmlns="//www.w3.org/1999/xhtml"><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /></head><body>regpath 2<form method="post"><input type="submit" id="btn2" value="continue 2"></form></body></html>'
                            //     }
                            // ]

                            console.log('0 this.regpathes[this.grp - 1]: ',this.regpathes[this.grp - 1])

                            const regpath = this.regpathes[this.grp - 1].srcl  
                            
                            this.addContent(regpath)
                        }

                    }
            
                }catch(e){
                    console.log('RESPONSE PARSING ERROR: ',e.message )
                }           
            })														
            .catch(reject => {
                if (reject.response) {
                    console.log('REJECTED')
                    console.log(reject.response.data)
                    console.log(reject.response.status)
                    console.log(reject.response.headers)
                }
                }													
            )
            .finally(()=>{
               
            })
              

    }
}
</script>

<style lang="scss" scoped>
    iframe{
        width: 100%;
        min-height: 700px;
        margin-top: 50px;
    }

</style>
    