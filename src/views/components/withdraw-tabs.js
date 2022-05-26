export const withdrawTabs = [
    {
        name: 'check',
        component: {
            props: ['pin', 'message', 'method', 'button_status'],
            data(){
                return{
                    PIN: ''
                }
            },
            template: `
            <div class="js-tab-cont">
                <div class="tab-content-form style2">
                    <form>
                        <div class="d-flex justify-content-center align-items-start flex-column py-4 px-5">
                            <div 
                                class="my-3 w-100"
                                v-if="message.error"
                            >
                                <div 
                                    class="alert alert-danger"
                                    v-text="message.error"
                                ></div>
                            </div>
                            <div 
                                class="my-3 w-100"
                                v-if="message.success"
                            >
                                <div 
                                    class="alert alert-success"
                                    v-text="message.success"
                                ></div>
                            </div>
                            <div class="my-3 w-100">
                                <h3 class="text-dark">Your payment will be sent to the address filled in your account</h3>
                            </div>
                            <div class="my-3 text-left w-100">
                                <p class="text-dark">Please, enter a PIN-code to confirm changes</p>
                                <p class="text-dark">
                                    <a 
                                        href="#"
                                        class="text-primary"
                                        @click.prevent="$emit('send_pin',3)"
                                    >Send a PIN-code to my email</a>
                                </p>
                                <input 
                                    type="text" 
                                    placeholder="Pin" 
                                    class="form-control"
                                    v-model.trim="PIN"
                                >                         
                            </div>
                            <div class="field-payment__buttons my-3 text-center w-100">
                                <p class="text-color">Please confirm your cash out request</p>
                                <button 
                                    class="button button_big button_orange"
                                    :class="{'disabled': !PIN || button_status !== 'enabled'}"
                                    :disabled="!PIN || button_status !== 'enabled'"
                                    @click.prevent="makeRequest()"
                                >Request</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            `,
            methods:{

                makeRequest(){
                    let params = {
                        pin: this.PIN,
                        method: this.method
                    }
                    this.$emit('make_payment_request',params)
                },

            },
            mounted(){
                this.PIN = this.pin
                // $emit('clearChildPin') ВЫЗЫВАЕТСЯ В РОДИТЕЛЬСКОМ КОМПОНЕНТЕ ПОСЛЕ УДАЧНОГО ЗАВЕРШЕНИЯ ЗАПРОСА
                this.$parent.$on('clearChildPin', ()=>{
                    this.PIN = ''
                })
            }
        }
    },
    {
        name: 'bitcoin',
        component: {
            props: ['pin', 'message', 'method', 'bitcoinAddress', 'button_status'],
            data(){
                return{
                    PIN: ''
                }
            },
            template: `
            <div class="js-tab-cont">
                <div class="tab-content-form style2">
                    <form>
                        <div class="d-flex justify-content-center align-items-start flex-column py-4 px-5">
                            <div 
                                class="my-3 w-100"
                                v-if="message.error"
                            >
                                <div 
                                    class="alert alert-danger"
                                    v-text="message.error"
                                ></div>
                            </div>
                            <div 
                                class="my-3 w-100"
                                v-if="message.success"
                            >
                                <div 
                                    class="alert alert-success"
                                    v-text="message.success"
                                ></div>
                            </div>
                            <div class="my-3 w-100">
                                <h3 class="text-dark">Your earnings will be converted into BTC accordingly to the exchange rate on the day of payment, so you don't have to worry that your earnings can reduce because of Bitcoin exchange rate changes</h3>
                            </div>
                            <div class="my-3 text-left w-100">
                                <p class="text-dark">Your Bitcoin Address</p>
                                <input 
                                    type="text" 
                                    placeholder="Bitcoin Address" 
                                    class="form-control"
                                    :value="bitcoinAddress"
                                >                         
                            </div>
                            <div class="my-3 text-left w-100">
                                <p class="text-dark">Please, enter a PIN-code to confirm changes</p>
                                <p class="text-dark">
                                    <a 
                                        href="#"
                                        class="text-primary"
                                        @click.prevent="$emit('send_pin',3)"
                                    >Send a PIN-code to my email</a>
                                </p>
                                <input 
                                    type="text" 
                                    placeholder="Pin" 
                                    class="form-control"
                                    v-model.trim="PIN"
                                >                         
                            </div>
                            <div class="field-payment__buttons my-3 text-center w-100">
                                <p class="text-color">Please confirm your cash out request</p>
                                <button 
                                    class="button button_big button_orange"
                                    :class="{'disabled': !PIN || button_status !== 'enabled'}"
                                    :disabled="!PIN || button_status !== 'enabled'"
                                    @click.prevent="makeRequest()"
                                >Request</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            `,
            methods:{

                makeRequest(){
                    let params = {
                        pin: this.PIN,
                        method: this.method,
                        bitcoinAddr: this.bitcoinAddress
                    }
                    this.$emit('make_payment_request',params)
                },

            },
            mounted(){
                this.PIN = this.pin
                // $emit('clearChildPin') ВЫЗЫВАЕТСЯ В РОДИТЕЛЬСКОМ КОМПОНЕНТЕ ПОСЛЕ УДАЧНОГО ЗАВЕРШЕНИЯ ЗАПРОСА
                this.$parent.$on('clearChildPin', ()=>{
                    this.PIN = ''
                })
            }
        }
    },
    {
        name: 'paypal',
        component: {
            template:`
            <div class="js-tab-cont">
                <div class="tab-content-form style2">
                    <form>
                        <div class="field-payment"><label class="field-payment__label">Enter your
                                PayPal:</label>
                            <div class="field-payment__right">
                                <div class="field-payment__input"><input type="text"
                                        placeholder="PayPal email" class="standart-input"></div>
                                <div class="field-payment__buttons"><input type="submit" value="Submit"
                                        class="button button_big button_orange"><a href="#"
                                        class="button button_big button_blue2">Cancel</a></div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            `
        }
    },
    {
        name: 'gift_cards',
        component: {
            template: 
                `
                <div class="js-tab-cont hide-tab">
                    <div class="tab-content-form style2">
                        <div class="box-gift-card">
                            <div class="box-gift-card__column">
                                <div class="box-gift-card__logo">
                                    <div class="box-gift-card__logo-td"><a href="#"><img
                                                src="img/logo_payment_1.png" alt=""></a></div>
                                </div><a href="#" class="button button_big button_blue2">Amazon $25</a><a
                                    href="#" class="button button_big button_blue2">Amazon $50</a><a
                                    href="#" class="button button_big button_blue2">Amazon $75</a><a
                                    href="#" class="button button_big button_blue2">Amazon $105</a>
                            </div>
                            <div class="box-gift-card__column">
                                <div class="box-gift-card__logo">
                                    <div class="box-gift-card__logo-td"><a href="#"><img
                                                src="img/logo_payment_2.png" alt=""></a></div>
                                </div><a href="#" class="button button_big button_blue2">Starbucks $25</a><a
                                    href="#" class="button button_big button_blue2">Starbucks $50</a><a
                                    href="#" class="button button_big button_blue2">Starbucks $75</a><a
                                    href="#" class="button button_big button_blue2">Starbucks $105</a>
                            </div>
                            <div class="box-gift-card__column">
                                <div class="box-gift-card__logo">
                                    <div class="box-gift-card__logo-td"><a href="#"><img
                                                src="img/logo_payment_3.png" alt=""></a></div>
                                </div><a href="#" class="button button_big button_blue2">Bestbuy $25</a><a
                                    href="#" class="button button_big button_blue2">Bestbuy $50</a><a
                                    href="#" class="button button_big button_blue2">Bestbuy $75</a><a
                                    href="#" class="button button_big button_blue2">Bestbuy $105</a>
                            </div>
                            <div class="box-gift-card__column">
                                <div class="box-gift-card__logo">
                                    <div class="box-gift-card__logo-td"><a href="#"><img
                                                src="img/logo_payment_4.png" alt=""></a></div>
                                </div><a href="#" class="button button_big button_blue2">Ebay $25</a><a
                                    href="#" class="button button_big button_blue2">Ebay $50</a><a href="#"
                                    class="button button_big button_blue2">Ebay $75</a><a href="#"
                                    class="button button_big button_blue2">Ebay $105</a>
                            </div>
                        </div>
                    </div>
                </div>       
            `
        } 
    }
]


