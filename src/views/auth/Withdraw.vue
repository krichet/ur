<template>
    <div>
        <UserInfo />
        <div class="wrapper wrapper_long">
            <AsideLeft />
            <div class="main-cont">
                <div class="main-cont__white main-cont__white_with-column clearfix">
                    <div class="box-member-status opt2">
                        <h1 class="main-title">Withdrawal</h1>
                        <p class="box-member-status__title">The minimum payment is $20</p>
                        <p class="box-member-status__title2">Choose the way to you woud like to get your money</p>
                        <div 
                            class="tabs js-tabs"
                            v-if="paymentMethods.length > 0"
                        >
                            <ul class="d-flex justify-content-center align-items-center flex-wrap tabs-labels-cont">
                                <li 
                                    class="list-tabs__item first js-tabs-item"
                                    :class="{'active': payment.active}"
                                    v-for="( payment, index ) in paymentMethods"
                                >
                                    <a 
                                        href="#tab-1" 
                                        class="button button_tab js-tabs-link d-flex justify-content-center align-items-center p-0 text-uppercase"
                                        :class="{'disabled': payment.enabled === '2'}"
                                        :disabled="payment.enabled === '2'"
                                        @click.prevent="tabChange(index)"
                                        v-text="payment.method"
                                    ></a>
                                </li>                      
                            </ul>
                            <div class="tabs-cont">
                                <component 
                                    class="js-tab-cont"
                                    v-for="(payment, i) in paymentMethods"
                                    v-if="payment.active"
                                    :is="payment.component"
                                    :key="payment.method + i"
                                    @send_pin="sendPin"
                                    @make_payment_request="makePaymentRequest"
                                    :pin="PIN"
                                    :message="message"
                                    :method="payment.method"
                                    :bitcoinAddress="payment.bitcoinAddress"
                                    :button_status="buttons.withdraw"
                                ></component>  
                            </div> 
                        </div>                          
                        <div 
                            class="tabs js-tabs"
                            v-else
                        >
                            <ul class="d-flex justify-content-center align-items-center flex-wrap tabs-labels-cont">
                                <li 
                                    class="list-tabs__item first js-tabs-item"
                                    v-for="( payment, index ) in paymentMethodsNoData"
                                >
                                    <a 
                                        href="#" 
                                        class="button button_tab js-tabs-link d-flex justify-content-center align-items-center p-0 text-uppercase disabled"
                                        disabled
                                        v-text="payment"
                                    ></a>
                                </li>                      
                            </ul>
                            <div class="h5 mt-3 text-danger">You only need to earn … to cash out</div>
                            <div class="h5 mb-3 text-danger">Compelete these simple offers and you will be able to cash out</div>
                        </div>
                    </div>
                    <div class="main-cont__left">
                        <div class="one-block-product" id="hot-offers">
                            <div class="line-main-title">
                                <h1 class="main-title">Hot Offers/ Surveys:</h1>
                            </div>
                            <form 
                                class="search my-4"
                            >
                                <label class="search__label">Search:</label>
                                <div class="search__field">
                                    <div class="search-block">
                                        <input 
                                          type="text" 
                                          class="standart-input" 
                                          placeholder="Enter keywords"
                                          v-model="requestData.hotOffers.name"
                                        >
                                        <a 
                                          href="#" 
                                          class="remove-search-data text-muted" 
                                          v-if="requestData.hotOffers.name"
                                          @click.prevent="clearSearchForm('#hot-offers','hotOffers')"
                                        ><i class="fa fa-2x fa-times"></i></a>
                                    </div>
                                </div>
                                <input 
                                  type="submit" 
                                  class="button button_big search_button" 
                                  value="Find"
                                  :class="{disabled: !requestData.hotOffers.name}" 
                                  :disabled="!requestData.hotOffers.name"
                                  @click.prevent="sendSearchForm('#hot-offers','hotOffers')"
                                >
                            </form>
                            <div 
                                class="filter d-flex align-items-center justify-content-end py-3"
                                v-if="hotOffers.length !== 0"
                            >
                                <div class="filter__section d-flex align-items-center">
                                    <p class="filter__label pr-4">Filter:</p>
                                    <select 
                                    class="form-control"
                                    @change="getOffersCat($event.target.value,'#hot-offers','hotOffers')"
                                    >
                                    <option 
                                        v-for="item in sortBy"
                                        :value="item.sort"
                                        v-text="item.name"
                                        :selected="item.selected"
                                        ></option>
                                    </select>
                                </div>
                                <div class="filter__section d-flex align-items-center">
                                    <p class="filter__label">Items per page:</p>
                                    <ul class="select-number-views">
                                        <li 
                                        class="select-number-views__item"
                                        v-for="offerNav in offerNavs"
                                        :class="{ active: offerNav.active, disabled: offerNav.disabled }"
                                        @click.prevent="getOffersNav(offerNav, '#hot-offers','hotOffers')"
                                        >
                                            <a 
                                            href="#" 
                                            class="select-number-views__link"
                                            v-text="offerNav.label"
                                            ></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <h3 v-if="hotOffers.length === 0" class="m-4">No Offers</h3>
                            <div v-else>
                                <Offer :offers="hotOffers"></Offer>
                                <div class="text-center">
                                    <button 
                                        class="button button_big"
                                        :class="{'disabled': paginationButtonDisabled}"
                                        :disabled="paginationButtonDisabled"
                                        v-if="paginationButtonVisibility"
                                        @click.prevent="paginateOffers('#hot-offers','hotOffers')"
                                    >Show more offers</button>
                                </div>
                            </div>
                        </div>
                        <div class="one-block-product" id="featured-offers">
                            <div class="line-main-title">
                                <h2 class="main-title">Featured Offers</h2>
                            </div>
                            <h3 v-if="featuredOffers.length === 0" class="m-4">No Offers</h3>
                            <div v-else>
                                <Offer :offers="featuredOffers"></Offer>
                                <div class="text-center d-none">
                                    <a href="#" class="button button_big">Show more offers</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  import {offers} from 'mixins/offers'
  import {withdrawTabs} from 'components/withdraw-tabs'
  export default {
        mixins: [offers],
        data() {
            return {
                PIN: '',               
                message: {
                    error: '',
                    success: '',
                    reset(){
                        this.error = ''
                        this.success = ''
                    }
                },
                buttons: {
                    withdraw: 'enabled'
                },
                // ПАРАМЕТРЫ ЗАПРОСА ОФЕРОВ
                requestData: {
                    hotOffers: {
                        type: 4,
                        ipp: 20,
                        page: 1,
                        sort: 0,
                        category: 0,
                        name: '',
                    },
                    featuredOffers: {
                        type: 5,
                        ipp: 20,
                        page: 1,
                        sort: 0,
                        category: 0,
                        name: '',
                    }
                },
                hotOffers: [],
                featuredOffers: [],
                paymentMethods: [],
                paymentMethodsNoData: ['check','bitcoin'],
                withdrawTabs
            }
        },
        methods:{
            tabChange(index){
                this.message.reset()
                this.paymentMethods.forEach((payment,i) => {
                    payment.active = index === i ? true : false
                })
            },
            sendPin(type){
                axios
                    .post('/service/sendPin',{action: type})
                    .then(
                        response => {
                            try {
                                const _response = JSON.parse(response.request.responseText)
                            } catch (e) {
                                console.log('RESPONSE PARSING ERROR: ', e.message)
                            }
                        },
                        reject => {
                            if (reject.response) {
                                console.log('REJECTED /service/sendPin')
                                console.log(reject.response.data)
                                console.log(reject.response.status)
                                console.log(reject.response.headers)
                            }
                        }
                    )
            },
            getPaymentMethods(){
                axios.get('/service/getPaymentMethods')
                    .then(response => {
                    try{
                        const _response = JSON.parse( response.request.responseText )
                        // console.log('/service/getPaymentMethods _response: ',_response)
                        if(_response.error){ 
                            if(_response.error === "0"){
                                /*

                                    1) ВЫСТАВЛЯЕМ АКТИВНЫЙ СТАТУС У 1 

                                    2) ДОБАВЛЯЕМ ОДНОИМЁННЫЕ КОМПОНЕНТЫ В ПОЛУЧЕННЫЙ МАССИВ ПЛАТЕЖЕЙ
                                */
                                this.paymentMethods = _response.result.paymentMethods.map((payment,i) => {
                                    payment.active = i === 0 ? true : false
                                    const component = this.withdrawTabs.find(component => component.name === payment.method)
                                    if(component && payment.enabled !== "2"){
                                        payment.component = component.component
                                    }else{
                                        payment.component = {
                                                            template:`
                                                                <div class="js-tab-cont">
                                                                    NOCOMPONENT
                                                                </div>`
                                                            }
                                    }
                                   
                                    return payment
                                })
                            }else{
                                this.message.error = _response.error_message || _response.errorMessage
                            }                            
                        }
                    }catch(e){
                        console.log('RESPONSE PARSING ERROR: ',e.message )
                    } 
                })
                .catch(reject => {
                    if (reject.response) {
                            console.log('REJECTED /service/getPaymentMethods')
                            console.log(reject.response.data)
                            console.log(reject.response.status)
                            console.log(reject.response.headers)
                            if(reject.response.data.error){ 
                                this.message.error = reject.response.data.error_message || reject.response.data.errorMessage                                                     
                            }
                        }
                })
            },
            makePaymentRequest(params){
                this.buttons.withdraw = 'disabled'
                this.message.reset()
                axios.post('/service/makePaymentRequest', params)
                    .then(response => {
                    try{
                        const _response = JSON.parse( response.request.responseText )
                        console.log('/service/makePaymentRequest _response: ',_response)
                        if(_response.error){ 
                            if(_response.error === "0"){
                                this.message.success = 'Procedure completed successfully'
                                this.PIN = ''
                                this.$emit('clearChildPin')
                            }else{
                                this.message.error = _response.error_message
                            }                            
                        }
                    }catch(e){
                        console.log('RESPONSE PARSING ERROR: ',e.message )
                    } 
                })
                .catch(reject => {
                    if (reject.response) {
                            console.log('REJECTED /service/makePaymentRequest')
                            console.log(reject.response.data)
                            console.log(reject.response.status)
                            console.log(reject.response.headers)
                        }
                })
                .finally(()=>{
                    this.buttons.withdraw = 'enabled'
                })
            }
        },
        mounted() {

            this.getPaymentMethods()

            //  РАСШИРЯЕМ МИКСИНЫ ДЛЯ hot offers
            this.sortBy.push({sort: 4,name: 'Random',selected: false})
            this.offerNavs.unshift({label: '1',active: false,disabled: false,ipp: 1,},{label: '3',active: false,disabled: false,ipp: 3,},{label: '5',active: false,disabled: false,ipp: 5,})

            // ПОЛУЧАЕМ hotOffers
            this.getOffersAndSetClicks('#hot-offers','hotOffers')

            // ПОЛУЧАЕМ featuredOffers
            this.getOffersAndSetClicks('#featured-offers','featuredOffers')
        
        }
    }
</script>

<style>

    .tabs-labels-cont{
        height: 70px;
    }

</style>