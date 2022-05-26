<template>
    <div>
      <UserInfo />
      <div class="wrapper wrapper_long">
        <AsideLeft />
        <div class="main-cont">
          <div class="main-cont__white main-cont__white_with-column clearfix">
            <div class="main-cont__left">
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
                            v-model="requestData.takeSurveysOffers.name"
                          >
                          <a 
                            href="#" 
                            class="remove-search-data text-muted" 
                            v-if="requestData.takeSurveysOffers.name"
                            @click.prevent="clearSearchForm('#take-surveys-offers','takeSurveysOffers')"
                          ><i class="fa fa-2x fa-times"></i></a>
                      </div>
                  </div>
                  <input 
                    type="submit" 
                    class="button button_big search_button" 
                    value="Find"
                    :class="{disabled: !requestData.takeSurveysOffers.name}" 
                    :disabled="!requestData.takeSurveysOffers.name"
                    @click.prevent="sendSearchForm('#take-surveys-offers','takeSurveysOffers')"
                  >
                </form>
                <div class="one-block-product" id="take-surveys-offers">
                  <div class="line-main-title">
                    <div class="line-main-title__left2">
                      <h1 class="main-title">Surveys</h1>
                    </div>
                    <div 
                      class="filter d-flex align-items-center justify-content-end py-5"
                      v-if="takeSurveysOffers.length !== 0"
                    >
                        <div class="filter__section d-flex align-items-center">
                            <p class="filter__label pr-4">Filter:</p>
                            <select 
                              class="form-control"
                              @change="getOffersCat($event.target.value,'#take-surveys-offers','takeSurveysOffers')"
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
                                  @click.prevent="getOffersNav(offerNav,'#take-surveys-offers','takeSurveysOffers')"
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
                  </div>
                  <h3 
                      v-if="takeSurveysOffers.length === 0" 
                      class="m-4"
                  >No Offers</h3>
                  <Offer v-else :offers="takeSurveysOffers"></Offer>
                  <div class="text-center">
                      <button 
                          class="button button_big"
                          :class="{'disabled': paginationButtonDisabled}"
                          :disabled="paginationButtonDisabled"
                          v-if="paginationButtonVisibility" 
                          @click.prevent="paginateOffers('#take-surveys-offers','takeSurveysOffers')"
                      >Show more offers</button>
                  </div>
              </div>
            </div>
            <SocialRight/> 
          </div>
        </div>
      </div>
    </div>
  </template>
  <script>
    import {copyExactProperties} from 'utils/helpers'
    import {offers} from 'mixins/offers'
      export default {
      mixins: [offers],
      data(){
        return {
          takeSurveysOffers: [],
          // ПАРАМЕТРЫ ЗАПРОСА ОФЕРОВ
          requestData:{
            takeSurveysOffers: {
              type: 4,
              ipp: 20,
              page: 1,
              sort: 0,
              category: 0,
              name: '',
            }
          }
        }
      },
      mounted(){
          // ПОЛУЧАЕМ takeSurveysOffers
          this.getOffersAndSetClicks('#take-surveys-offers','takeSurveysOffers')
      }
    }
  </script>
  
