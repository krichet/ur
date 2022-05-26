import {copyExactProperties} from 'utils/helpers'

export const offers = {
    data(){
        return{
            offerNavs:[
                {
                  label: '20',
                  active: true,
                  disabled: false,
                  ipp: 20,
                },
                {
                  label: '40',
                  active: false,
                  disabled: false,
                  ipp: 40,
                },
                {
                  label: '60',
                  active: false,
                  disabled: false,
                  ipp: 60,
                },
              ],
              sortBy:[
                {
                  sort: 0,
                  name: 'Profitability',
                  selected: true
                },
                {
                  sort: 1,
                  name: 'Rewards',
                  selected: false
                },
                {
                  sort: 2,
                  name: 'Popularity',
                  selected: false
                },
                {
                  sort: 3,
                  name: 'Country',
                  selected: false
                }
              ],
            paginationButtonDisabled: false,
            paginationButtonVisibility: true
        }
    },
    methods: {
        getOffers(params) {
            return axios
                .post('/service/getOffers', params)
                .then(
                    response => {
                        try {
                            const _response = JSON.parse(response.request.responseText)
                            // console.log('response.request.responseText: ',JSON.parse(response.request.responseText))
                            if (_response && _response.error === "0") {
                                const data = {} 
                                data.offersCnt = Number(_response.result.total[0].offers_cnt)
                                data.offers = _response.result.offers.map(offer => {
                                    offer.hotLink = ''
                                    offer.disabled = false
                                    return offer
                                })
                                console.log('_response.result.offers: ',_response.result.offers)
                                return Promise.resolve(data)
                            }
                            return Promise.resolve([])
                        } catch (e) {
                            console.log('RESPONSE PARSING ERROR: ', e.message)
                            return Promise.reject(`RESPONSE PARSING ERROR: ${e.message}`) 
                        }
                    },
                    reject => {
                        return Promise.reject(`${reject.response ? reject.response.data.errorMessage : ''}`)
                    }
                )
        },
        getOfferLink(offer) {
            offer.disabled = true
            return axios
                .post('/service/getOfferLink', {offerToken: offer.token})
                .then(
                    response => {
                        try {
                            const _response = JSON.parse(response.request.responseText)
                            if (_response && _response.error === "0") {
                                return Promise.resolve(_response.result)
                            }
                            return Promise.resolve([])
                        } catch (e) {                         
                            return Promise.reject(`RESPONSE PARSING ERROR: ${e.message}`)                              
                        }
                        
                    }
                    
                )
                .catch(reject => {
                    return Promise.reject(`${reject.response ? reject.response.data.errorMessage : ''}`)
                })
                .finally(function () {
                    offer.disabled = false
                    
                })
        },
        sendSearchForm(parentSelector,offersType){
            this.requestData[offersType].page = 1
            this.getOffersAndSetClicks(parentSelector,offersType)
        },
        clearSearchForm(parentSelector,offersType){
          this.requestData[offersType].name = ''
          this.requestData[offersType].page = 1
          this.getOffersAndSetClicks(parentSelector,offersType)          
        },
        getOffersAndSetClicks(parentSelector,offersType,pagination=false){
          return this.getOffers(this.requestData[offersType])
            .then( data => {            
                this[offersType] = pagination ? this[offersType].concat(data.offers) : data.offers
                this.paginationButtonVisibility = this[offersType].length < data.offersCnt
                /*
    
                    СТАВИМ КЛИК НА .list-clicks__link 
                    
                    ПОСЛЕ УСПЕШНОГО ОТВЕТА ПОСЛЕ КЛИКА НА ССЫЛКУ, НЕОБХОДИМО ОТВЯЗЫВАТЬ СОБЫТИЕ, ЧТОБЫ ССЫЛКА РАБОТАЛА ПО УМОЛЧАНИЮ (переход по url)
                    
                    СТАВИМ НАПРЯМУЮ В DOM ТАК, КАК vue РАБОТАЕТ С VIRTUAL DOM И НЕТ ВОЗМОЖНОСТИ СОБЫТИЕ ОТВЯЗАТЬ
    
                    @click.prevent.once НЕ ПОДХОДИТ ТАК КАК КЛИК ОТВЯЗЫВАЕТСЯ АВТОМАТИЧЕСКИ НЕ ДОЖИДАЯСЬ ОТВЕТА - УСПЕШНОГО ИЛИ НЕТ. ЕСЛИ ОТВЕТ НЕУСПЕШНЫЙ И НАДО КЛИКАТЬ СНОВА, СОБЫТИЕ ПОЛУЧАЕТСЯ СЛИШКОМ РАНО ОТВЯЗАННЫМ
    
                */  
                setTimeout(()=>{     
                        // console.log(parentSelector)        
                        Array.from( document.querySelector(parentSelector).querySelectorAll('.list-clicks__link') ).forEach(link => {  
                            const id = link.getAttribute('data-id')
                            let offer = this[offersType].find(offer => Number( offer.id ) === Number( id ) )                
                            if(offer){
                                const _click = (e)=>{
                                    e.preventDefault()                                    
                                    this.getOfferLink(offer)
                                        .then(data => {
                                            offer.hotLink = data
                                            link.removeEventListener('click',_click)
                                        })
                                        .catch(err => {
                                            this.$toast.warning('TRY AGAIN!', err, {theme: 'light', position: 'bottomCenter'})
                                            console.log(err)
                                        })
                                }
                                link.addEventListener('click',_click)             
                            }         
                            })
                        },0)

                    return Promise.resolve(null)
                })
                .catch(err => {
                    /*

                        В СЛУЧАЕ ОТКАЗА ПРОМИСА (отсутствие интернет-соединения или другие ошибки), ВЫСТАВЛЯЕМ ПАГИНАЦИЮ НА ШАГ НАЗАД, Т.Е. ДО ТОГО, КАКАЯ ОНА БЫЛА ДО ЗАПРОСА

                    */
                    if(pagination){
                        this.requestData[offersType].page--
                    }
                })
                .finally(()=>{
                    this.paginationButtonDisabled = false
                })
        },
        getOffersNav(offerNav, parentSelector, offersType){
            this.requestData[offersType].page = 1
            copyExactProperties(offerNav,this.requestData[offersType])
            offerNav.disabled = true
            this.getOffersAndSetClicks(parentSelector,offersType)
              .then(data => {
                  this.offerNavs.forEach(nav => nav.active = false)
                  offerNav.active = true
              })
              .catch(err => {})
              .finally(()=>{
                offerNav.disabled = false
              })
        },
        getOffersCat(sort, parentSelector, offersType){
            this.requestData[offersType].page = 1
            copyExactProperties({sort},this.requestData[offersType])
            this.getOffersAndSetClicks(parentSelector,offersType)
        },
        paginateOffers(parentSelector, offersType ){
            this.paginationButtonDisabled = true
            this.requestData[offersType].page++
            // console.log(this.requestData[offersType].page)
            this.getOffersAndSetClicks(parentSelector,offersType,true)
        }
    },
    computed: {
        paginationButton(){

        }
    }
}