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
                                <h1 class="main-title">Clicks</h1>
                            </div>
                            <p>Click on any of the available offers. Next, wait for loading of a page, and that's
                                all!<br> You'll get $0.01 per each visit. A pause between visits must last more than 30
                                seconds.</p>
                            <p>You're welcome to make your next click now! <br> Dear members, you're supposed to know
                                that offers can be removed even if you don't click on them. The reason for that is every
                                offer has the limited number of clicks, so, as soon as this limit is reached, the offer
                                is removed. Consequently, even if you haven't clicked on the offer, and it has been
                                removed, it means that the other members have already exceeded the allowed number of
                                clicks.</p>
                            <ul class="list-clicks">
                                <li 
                                    class="list-clicks__item"
                                    v-for="offer in clickOffers"
                                >
                                    <a 
                                        :href="offer.click_url"
                                        class="w-100 h-100 d-flex justify-content-around align-items-center"
                                        target="_blank"
                                    >
                                        <div 
                                            class="list-clicks__logo"
                                            v-html="offer.banner"
                                        >
                                        </div>    
                                            <h2 
                                                class="text-primary font-weight-bold text-center"
                                                v-text="offer.label"
                                            ></h2>
                                        <div class="list-clicks__right">
                                            <span class="button button_orange button_big"
                                                >Earn {{offer.price}}</span>
                                        </div>
                                    </a>
                                </li>
                                <!-- <li class="list-clicks__item">
                                    <div class="list-clicks__logo"><a href="#"><img src="img/logo_clicks_2.png"
                                                alt=""></a></div>
                                    <div class="list-clicks__cont"><a href="#" class="list-clicks__title">Title offers
                                            here</a>
                                        <p class="list-clicks__text">Maecenas vulputate dolor eget metus. Mauris sit
                                            amet mi. Sed elit. In eu est. </p><span class="list-clicks__spec-text"><a
                                                href="#" class="list-clicks__link">Sign up</a> and confirm the
                                            account</span>
                                    </div>
                                    <div class="list-clicks__right"><a href="#"
                                            class="button button_orange button_big">Earn $ 2.40</a></div>
                                </li>
                                <li class="list-clicks__item">
                                    <div class="list-clicks__logo"><a href="#"><img src="img/logo_clicks_1.png"
                                                alt=""></a></div>
                                    <div class="list-clicks__cont"><a href="#" class="list-clicks__title">Title offers
                                            here</a>
                                        <p class="list-clicks__text">Maecenas vulputate dolor eget metus. Mauris sit
                                            amet mi. Sed elit. In eu est. Cum sociis natoque penatibus et magnis dis
                                            parturient montes, nascetur ridiculus mus. Phasellus lacus.</p><span
                                            class="list-clicks__spec-text"><a href="#" class="list-clicks__link">Sign
                                                up</a> and confirm the account</span>
                                    </div>
                                    <div class="list-clicks__right"><a href="#"
                                            class="button button_orange button_big">Earn $ 5.20</a></div>
                                </li>
                                <li class="list-clicks__item">
                                    <div class="list-clicks__logo"><a href="#"><img src="img/logo_clicks_2.png"
                                                alt=""></a></div>
                                    <div class="list-clicks__cont"><a href="#" class="list-clicks__title">Title offers
                                            here</a>
                                        <p class="list-clicks__text">Maecenas vulputate dolor eget metus. Mauris sit
                                            amet mi. Sed elit. In eu est. </p><span class="list-clicks__spec-text"><a
                                                href="#" class="list-clicks__link">Sign up</a> and confirm the
                                            account</span>
                                    </div>
                                    <div class="list-clicks__right"><a href="#"
                                            class="button button_orange button_big">Earn $ 2.40</a></div>
                                </li>
                                <li class="list-clicks__item">
                                    <div class="list-clicks__logo"><a href="#"><img src="img/logo_clicks_1.png"
                                                alt=""></a></div>
                                    <div class="list-clicks__cont"><a href="#" class="list-clicks__title">Title offers
                                            here</a>
                                        <p class="list-clicks__text">Maecenas vulputate dolor eget metus. Mauris sit
                                            amet mi. Sed elit. In eu est. Cum sociis natoque penatibus et magnis dis
                                            parturient montes, nascetur ridiculus mus. Phasellus lacus.</p><span
                                            class="list-clicks__spec-text"><a href="#" class="list-clicks__link">Sign
                                                up</a> and confirm the account</span>
                                    </div>
                                    <div class="list-clicks__right"><a href="#"
                                            class="button button_orange button_big">Earn $ 5.20</a></div>
                                </li>
                                <li class="list-clicks__item">
                                    <div class="list-clicks__logo"><a href="#"><img src="img/logo_clicks_2.png"
                                                alt=""></a></div>
                                    <div class="list-clicks__cont"><a href="#" class="list-clicks__title">Title offers
                                            here</a>
                                        <p class="list-clicks__text">Maecenas vulputate dolor eget metus. Mauris sit
                                            amet mi. Sed elit. In eu est. </p><span class="list-clicks__spec-text"><a
                                                href="#" class="list-clicks__link">Sign up</a> and confirm the
                                            account</span>
                                    </div>
                                    <div class="list-clicks__right"><a href="#"
                                            class="button button_orange button_big">Earn $ 2.40</a></div>
                                </li>
                                <li class="list-clicks__item">
                                    <div class="list-clicks__logo"><a href="#"><img src="img/logo_clicks_1.png"
                                                alt=""></a></div>
                                    <div class="list-clicks__cont"><a href="#" class="list-clicks__title">Title offers
                                            here</a>
                                        <p class="list-clicks__text">Maecenas vulputate dolor eget metus. Mauris sit
                                            amet mi. Sed elit. In eu est. Cum sociis natoque penatibus et magnis dis
                                            parturient montes, nascetur ridiculus mus. Phasellus lacus.</p><span
                                            class="list-clicks__spec-text"><a href="#" class="list-clicks__link">Sign
                                                up</a> and confirm the account</span>
                                    </div>
                                    <div class="list-clicks__right"><a href="#"
                                            class="button button_orange button_big">Earn $ 5.20</a></div>
                                </li>
                                <li class="list-clicks__item">
                                    <div class="list-clicks__logo"><a href="#"><img src="img/logo_clicks_2.png"
                                                alt=""></a></div>
                                    <div class="list-clicks__cont"><a href="#" class="list-clicks__title">Title offers
                                            here</a>
                                        <p class="list-clicks__text">Maecenas vulputate dolor eget metus. Mauris sit
                                            amet mi. Sed elit. In eu est. </p><span class="list-clicks__spec-text"><a
                                                href="#" class="list-clicks__link">Sign up</a> and confirm the
                                            account</span>
                                    </div>
                                    <div class="list-clicks__right"><a href="#"
                                            class="button button_orange button_big">Earn $ 2.40</a></div>
                                </li>
                                <li class="list-clicks__item">
                                    <div class="list-clicks__logo"><a href="#"><img src="img/logo_clicks_1.png"
                                                alt=""></a></div>
                                    <div class="list-clicks__cont"><a href="#" class="list-clicks__title">Title offers
                                            here</a>
                                        <p class="list-clicks__text">Maecenas vulputate dolor eget metus. Mauris sit
                                            amet mi. Sed elit. In eu est. Cum sociis natoque penatibus et magnis dis
                                            parturient montes, nascetur ridiculus mus. Phasellus lacus.</p><span
                                            class="list-clicks__spec-text"><a href="#" class="list-clicks__link">Sign
                                                up</a> and confirm the account</span>
                                    </div>
                                    <div class="list-clicks__right"><a href="#"
                                            class="button button_orange button_big">Earn $ 5.20</a></div>
                                </li>
                                <li class="list-clicks__item">
                                    <div class="list-clicks__logo"><a href="#"><img src="img/logo_clicks_2.png"
                                                alt=""></a></div>
                                    <div class="list-clicks__cont"><a href="#" class="list-clicks__title">Title offers
                                            here</a>
                                        <p class="list-clicks__text">Maecenas vulputate dolor eget metus. Mauris sit
                                            amet mi. Sed elit. In eu est. </p><span class="list-clicks__spec-text"><a
                                                href="#" class="list-clicks__link">Sign up</a> and confirm the
                                            account</span>
                                    </div>
                                    <div class="list-clicks__right"><a href="#"
                                            class="button button_orange button_big">Earn $ 2.40</a></div>
                                </li> -->
                            </ul>
                            <div class="text-center d-none"><a href="#" class="button button_big">Show more offers</a></div>
                        </div>
                    </div>
                    <SocialRight />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                clickOffers: [],
                requestData: {
                    ipp: 20,
                    page: 1
                }
            }
        },
        mounted(){
            axios
                .post('/service/getClickOffers',this.requestData)
                .then(
                    response => {
                        try {
                            const _response = JSON.parse(response.request.responseText)
                            console.log('_response: ', _response)
                            if (_response && _response.error === "0") {
                                this.clickOffers = _response.result.offers          
                            }
                        } catch (e) {
                            console.log('RESPONSE PARSING ERROR: ', e.message)
                        }
                    },
                    reject => {
                        if (reject.response) {
                            console.log('REJECTED')
                            console.log(reject.response.data)
                            console.log(reject.response.status)
                            console.log(reject.response.headers)
                        }
                    }
                )
        }
    }
</script>