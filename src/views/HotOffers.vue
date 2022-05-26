<template>
    <div>
        <UserInfo />
        <div class="wrapper wrapper_long">
            <AsideLeft />
            <div class="main-cont">
                <div class="main-cont__white main-cont__white_with-column clearfix">
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
        data() {
            return {
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
                featuredOffers: []
            }
        },
        mounted() {

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

