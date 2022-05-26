export class Validation{
    constructor(){

        /*

            pending - ожидает валидацию
            wrong - валидация формы не пройдена
            done - валидация пройдена

        */
        this.status = 'pending'


        /*

            ВЫСТАВЛЯЕТСЯ ОДНО ИЗ ДВУХ:

                или equal или pattern

        */
        this.map = {
            email: {
                pattern: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,
                errorMsg: 'Provide valid e-mail',
                equal: ''
            },
            confirmEmail: {
                pattern: '',
                errorMsg: 'Emails do not match',
                equal: 'email'               
            },
            login: {
                pattern: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,
                errorMsg: 'Provide valid e-mail',
                equal: ''
            },
            pwd: {
                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/,
                errorMsg: 'Password is too weak. It must be at least 6 chars long and contain letters (a-z), uppercase letters (A-Z) and at least one number (0-9)',
                equal: ''                
            },
            newpwd: {
                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/,
                errorMsg: 'Password is too weak. It must be at least 6 chars long and contain letters (a-z), uppercase letters (A-Z) and at least one number (0-9)',
                equal: ''                
            },
            newpwd2: {
                pattern: '',
                errorMsg: 'Passwords do not match',
                equal: 'newpwd'               
            },
            fname:{
                pattern: /^[\w\- ]{1,30}$/,
                errorMsg: 'Required field. No more than 30 characters',
                equal: ''         
            },
            lname:{
                pattern: /^[\w\- ]{1,30}$/,
                errorMsg: 'Required field. No more than 30 characters',
                equal: ''        
            },
            country:{
                pattern: /^[\w\- ]{2}$/,
                errorMsg: 'Required field',
                equal: ''         
            },
            street:{
                pattern: /^[\w\-,. ]{1,100}$/,
                errorMsg: 'Required field. No more than 100 characters',
                equal: ''        
            },
            city:{
                pattern: /^[\w\-. ]{1,50}$/,
                errorMsg: 'Required field. No more than 50 characters',
                equal: ''         
            },
            state:{
                pattern: /^[\w\- ]{2}$/,
                errorMsg: 'Required field',
                equal: ''      
            },
            zip:{
                pattern: /^\d{1,10}$/,
                errorMsg: 'Required field. No more than 10 characters',
                equal: ''         
            },
            phone:{
                pattern: /^\+?\d{0,3}\(?\d{1,4}\)?[\d\-\s]{6,12}?$/,
                errorMsg: 'Required field',
                equal: ''        
            },
            web:{
                pattern: /[^\s]*/, // не пустое поле
                errorMsg: 'Required field',
                equal: ''         
            },
            gender:{
                pattern: /^Male|Female$/,
                errorMsg: 'Required field',
                equal: ''        
            },
            bdate:{
                pattern: /^\d{4}-\d{2}-\d{2}$/,
                errorMsg: 'Required field',
                equal: ''         
            },
            fp_val:{
                pattern: /[^\s]*/, // не пустое поле
                errorMsg: 'Required field',
                equal: ''         
            },
            'g-recaptcha-response':{
                pattern: /.+/, // любой символ
                errorMsg: 'Required field',
                equal: ''         
            },
            'conditions':{
                pattern: /1/, // любой символ
                errorMsg: 'Required field',
                equal: ''         
            }    	
          }

    }

    check(data){
        console.log('data: ',data)
        /*
        
            если ошибок валидации для обязательных полей > 0,  this.status выставляется в wrong

        */
        let countErrors = 0
        Object.keys(data).forEach((key, i) => {  
            if(data[key].required){
                const re = this.map[key].pattern
                const equalName = this.map[key].equal
                if(equalName){
                    if(data[equalName].value !== data[key].value){
                        this.setWrong(data,key)
                        countErrors++                      
                    }else{
                        this.setRight(data,key)              
                    }
                }else{
                    if(!re.test(data[key].value) ){
                        this.setWrong(data,key)
                        countErrors++
                    }else{
                        this.setRight(data,key) 
                    }
                }
            }
        })

        this.status = countErrors > 0 ? 'wrong' : 'done'
        console.log('this.status: ',this.status)
    }

    setRight(data,key){
        data[key].errorMsg = ''
        data[key].verified = 'yes'  

    }

    setWrong(data,key){
        data[key].errorMsg = this.map[key].errorMsg
        data[key].verified = 'no'
    }

}