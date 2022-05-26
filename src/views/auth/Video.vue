<template>
    <div>
        <UserInfo />
        <div class="wrapper wrapper_long">
            <AsideLeft />
            <div class="main-cont">
                <div class="main-cont__white main-cont__white_with-column clearfix">
                    <div class="main-cont__left">
                        <div class="one-block-product">
                            <div class="line-main-title">
                                <h1 class="main-title">Video Offers</h1>
                            </div>
                            <h3 
                                v-if="videoOffers.length === 0" 
                                class="m-4"
                            >No Video</h3>
                            <ul 
                                class="list-video"
                                v-else
                            >
                                <li 
                                    class="list-video__item"
                                    v-for="offer in videoOffers"
                                >
                                    <div class="list-video__logo">
                                        <a 
                                            :href="offer.click_url"
                                            target="_blank"
                                            v-html="offer.banner"
                                        ></a>
                                    </div>
                                    <div class="list-video__cont">
                                            <a 
                                                :href="offer.click_url"
                                                target="_blank"
                                                class="list-video__title"
                                                v-text="offer.label"
                                            ></a>
                                    </div>
                                    <div class="text-center">
                                        <p 
                                            v-html="offer.description"
                                        ></p>
                                        <a 
                                            :href="offer.click_url"
                                            target="_blank"
                                            class="button button_orange button_big"
                                        >Earn {{offer.price}}</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="one-block-product" id="hot-offers">
                            <div class="line-main-title">
                                <h1 class="main-title">Hot List of Offers:</h1>
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
                    <SocialRight />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {offers} from 'mixins/offers'
    export default {
        mixins: [offers],
        data(){
            return {
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
                videoOffers: [],
                hotOffers: [],
                featuredOffers: []
            }
        },
        methods: {
            getVideoOffers() {
                axios
                    .post('/service/getVideoOffers')
                    .then(
                        response => {
                            try {
                                const _response = JSON.parse(response.request.responseText)
                                console.log('response.request.responseText: ',JSON.parse(response.request.responseText))
                                if (_response && _response.error === "0") {
                                    this.videoOffers = _response.result.offers.map(offer => {
                                        /*
                                            ДОБАВЛЯЕМ К ССЫЛКАМ ОФЕРОВ, КОТ ПРИХОДЯТ В ФОРМАТЕ "new.uniquerewards.com/click.php/9b2086a0898b1f81c54277a..."  http
                                        */
                                        const link = offer.click_url.match(/^https?:\/\/(.+)?$/)
                                        if(!link){
                                            offer.click_url = `http://${offer.click_url}`
                                        }
                                        
                                        return offer
                                    })
                                }
                            } catch (e) {
                                console.log('RESPONSE PARSING ERROR: ', e.message)
                                return Promise.reject(`RESPONSE PARSING ERROR: ${e.message}`) 
                            }
                        },
                        reject => {
                            return Promise.reject(`REJECTED: ${reject.response ? reject.response.data.errorMessage : ''}`)
                        }
                    )
            },
        },
        mounted(){
          // ПОЛУЧАЕМ videoOffers
          this.getVideoOffers()

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