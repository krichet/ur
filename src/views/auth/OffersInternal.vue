<template>
    <div>
        <div class="container">
            <div class="main-cont__white main-cont__white_with-column clearfix  py-5">
                <div class="one-block-product">
                    <div class="line-main-title">
                        <div class="line-main-title__left2">
                            <h1 class="main-title text-center">Offers</h1>
                            <ul class="list-clicks">
                                <li 
                                    class="list-clicks__item"
                                    v-for="offer in offers"
                                >
                                    <div 
                                        class="list-clicks__logo"
                                        v-html="offer.banner">
                                    </div>                                       
                                    <div class="list-clicks__cont">
                                      <a 
                                        href="#" 
                                        class="list-clicks__title"
                                        v-text="offer.label"
                                       ></a>
                                      <p 
                                        class="list-clicks__text"
                                        v-text="offer.deng"
                                    ></p>
                                      <span class="list-clicks__spec-text"><a href="#" class="list-clicks__link">Sign up</a> and confirm
                                        the
                                        account</span>
                                    </div>
                                    <!-- <div class="list-clicks__right">
                                      <a href="#" class="button button_orange button_big">Earn $ 5.20</a>
                                    </div> -->
                                  </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        data(){
            return {
                offers: []
            }
        },
        mounted() {

            const ip = '104.243.212.111'
            const uid = this.$route.params.uid

            axios
                .post('/service/getInternalRegpath', { uid, ip })
                .then(response => {
                    try {
                        console.log('response.request.responseText: ', response.request.responseText)
                        const _response = JSON.parse(response.request.responseText)
                        console.log('_response: ', _response)
                        if (_response.error && _response.error === "0") {
                            this.offers = _response.result
                        }

                    } catch (e) {
                        console.log('RESPONSE PARSING ERROR: ', e.message)
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
                .finally(() => {

                })
        },
    }
</script>