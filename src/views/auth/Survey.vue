<template>
    <div>
        <UserInfo />
        <div class="wrapper wrapper_long">
            <AsideLeft />
            <div class="main-cont">
                <div class="main-cont__white main-cont__white_with-column clearfix">
                    <div class="main-cont__left">
                        <div class="line-main-title">
                            <h1 class="main-title text-center">Update profile survey</h1>
                        </div>

                        <nav aria-label="Page navigation">
                            <ul class="pagination">
                                <li class="page-item">
                                    <button type="button" class="page-link" v-if="page != 1" @click="page--, changePages()"> Previous </button>
                                </li>
                                <li class="page-item">
                                    <button type="button" class="page-link" v-for="pageNumber in pages" @click="page = pageNumber, changePages()"> {{pageNumber}} </button>
                                </li>
                                <li class="page-item">
                                    <button type="button" @click="page++, changePages()" v-if="page < pages.length" class="page-link"> Next </button>
                                </li>
                            </ul>
                        </nav>
                        <form action="">
                            <div class="section-radio">
                                <div v-for="(item, index) in profileSurvey" :key="item.surveyQuestion" class="list-checkbox__item list-quesstion hide-q" :class="item.iid">
                                    <!-- radio options -->                        

                                    <div v-if="item.type == 3">
                                        <h3 class="section-radio__title">{{ item.question }}</h3>
                                        <ul class="list-checkbox radio">
                                            <li v-for="(val, qindex) in item.answer" :key="val.answer" class="list-checkbox__item">
                                                <label class="list-checkbox__label">
                                                    <input type="radio" :id="item.iid" :qid="++qindex" :name="item.iid" v-model="userAnswers.userAnswer[index].answer" class="styled" v-bind:value="qindex">                                                                                                    
                                                    {{val}}
                                                </label>
                                            </li>                                                                                                                                          
                                        </ul>                                                                    
                                    </div>

                                    <!-- checkbox options -->

                                    <div v-if="item.type == 4">
                                        <h3 class="section-radio__title">{{ item.question }}</h3>
                                        <ul class="list-checkbox radio">
                                            <li v-for="(val, qindex) in item.answer" :key="val.answer" class="list-checkbox__item">
                                                <label class="list-checkbox__label">
                                                    <input type="checkbox" :id="item.iid" :qid="++qindex" v-model="userAnswers.userAnswer[index].answer" class="styled" :value="qindex">                                                    
                                                    {{val}}
                                                </label>
                                            </li>                                                                                                                                          
                                        </ul>                                                                    
                                    </div>
                                </div>                                
                        </div>
                        </form>

                        <div class="profile-survey_button">
                            <button @click="submit()" class="button button_big psurey">Submit answers</button>
                        </div>

                        <nav aria-label="Page navigation">
                            <ul class="pagination">
                                <li class="page-item">
                                    <button type="button" class="page-link" v-if="page != 1" @click="page--, changePages()"> Previous </button>
                                </li>
                                <li class="page-item">
                                    <button type="button" class="page-link" v-for="pageNumber in pages" @click="page = pageNumber, changePages()"> {{pageNumber}} </button>
                                </li>
                                <li class="page-item">
                                    <button type="button" @click="page++, changePages()" v-if="page < pages.length" class="page-link"> Next </button>
                                </li>
                            </ul>
                        </nav>



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
                featuredOffers: [],
                profileSurvey: [],
                userAnswers: {
                    userAnswer: []
                    // userAnswer: [
                    //     {iid:1, answer:1,other:"some text"},
                    //     {iid:41, answer:[3,6,24],other:"some text"}
                    //     ]
                },
                submitUserAnswers: {
                    userAnswer: []
                },
                answeredQuestions: [],
                qindex: 0,

                posts : [''],
                page: 1,
                perPage: 10,
                pages: [],		
                                
            }
        },

        methods: {

            submit() {
                
                //convert checkbox values into string according to back-end requirements
                this.userAnswers.userAnswer.forEach(item => {

                    //remove empty answers from array
                    if (item.answer.length != 0) {

                        if (typeof(item.answer) == 'object' && item.answer != 'undefined' && item.answer != 'string') {
                            // console.log(item.answer)
                            let str = item.answer.join(',')
                            // item.answer = str

                            this.submitUserAnswers.userAnswer.push({
                                iid: item.iid,
                                answer: str,
                                other: item.other
                        })
                        
                        }
                        else {
                            this.submitUserAnswers.userAnswer.push(item)
                        }


                        
                    }
                    
                })    
                            
                let userAnswerJson = JSON.stringify(this.submitUserAnswers)
                // console.log(userAnswerJson)

                axios       
                .post('/service/updateSurveyUserAnswers', {
                    sid: 1,
                    mid: 3914,
                    userAnswers: userAnswerJson
                })
                .then(response => alert(response.data.result.success))    
                                
            },

		setPages () {			
            let numberOfPages = Math.ceil(this.profileSurvey.length / this.perPage);
            // let numberOfPages = 5;
            console.log(this.profileSurvey.length)
			for (let index = 1; index <= numberOfPages; index++) {
				this.pages.push(index);
			}
		},
        
		paginate (posts) {
			let page = this.page;
			let perPage = this.perPage;
			let from = (page * perPage) - perPage;
			let to = (page * perPage);
			return  posts.slice(from, to);
		},
        
        changePages() {                

            // set all question to display none
            this.profileSurvey.forEach(item => {

                let question = document.getElementsByClassName(item.iid)[0]
                
                question.classList.add('hide-q')
            })


            // show only required questions per page
            this.displayedPosts.forEach(item => {
                
                let question = document.getElementsByClassName(item.iid)[0]
                
                question.classList.remove('hide-q')
                
            })

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


        // get profile survet questions
        axios       
          .post('/service/getSurveyQuestions', {
              sid: 1
          })
          .then(response => {
              
              // save array of questions and previos answers locally 
              this.profileSurvey = response.data.result.questionsList
              this.answeredQuestions = response.data.result.answersList

                // prepare an object for answers that will be sent to update chosen answers
                this.profileSurvey.forEach(element => {
                    this.userAnswers.userAnswer.push(
                    {
                        iid: element.iid,
                        answer: [],
                        other: element.type
                    }
                )                    
                })  


                // prefill in chosen previously answers fromm the server
                this.userAnswers.userAnswer.forEach(question => {
                this.answeredQuestions.forEach(answer => {
                    if (question.iid == answer.iid) {

                        
                        // fill check boxes
                        if (question.other == '4') {
                            question.answer = answer.userAnswers
                        }

                        // fill in radio buttons
                        if (question.other == '3') {
                            question.answer = answer.userAnswers[0]
                        }
                            
                        }
                    })
                })   
                

                   
          })       
          .finally(() => {

            //display questions on first page
            if (this.profileSurvey.length > 0) {
                for (let i = 0; i < this.perPage; i++) {
                    let question = document.getElementsByClassName(this.profileSurvey[i].iid)[0]
                    question.classList.remove('hide-q')
                }
            }

            // add pages for pagination
            this.setPages()
          })                                                 
        },

        computed: {
		displayedPosts () {        

            return this.paginate(this.profileSurvey);
            
		}
        },

        created(){

        },

    }
</script>