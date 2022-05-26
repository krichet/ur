<template>
    <div>
        <UserInfo />
        <div class="wrapper wrapper_long">
            <AsideLeft />
            <div class="main-cont">
                <div class="main-cont__white clearfix">
                    <div class="line-main-title text-center">
                        <h1 class="main-title">Offer Walls</h1>
                    </div>
                    <div class="tabs js-tabs">
                        <div class="box-carusel-tabs py-4">
                            <carousel 
                                :per-page="3" 
                                :navigationEnabled="true" 
                                :mouse-drag="true"
                                :paginationEnabled="false"
                            >
                                <slide
                                    class="button button_tab p-0 d-flex justify-content-center align-items-center"
                                    :class="{'active-tab': offer.active}"
                                    v-for="offer in offers" 
                                    v-text="offer.label"
                                    :key="offer.id"
                                    @slideclick="showTab(offer.id)"
                                >      
                                </slide>
                            </carousel>
                        </div>
                        <div class="all-cont-tabs">
                            <div 
                                class="js-tab-cont"
                                v-for="offer in offers"
                            >
                                <div 
                                    v-html="offer.src"
                                    v-if="offer.active"
                                ></div>
                                <!-- <a href="#" class="walls">
                                    <img src="img/wall_1.jpg" alt="">
                                </a> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { Carousel, Slide } from 'vue-carousel'
    export default {
        components: {
                Carousel,
                Slide
        },
        data() {
            return {
                requestData: {
                    // type: 1
                },
                offers: []
            }
        },
        methods: {
            getOfferWalls() {
                const requestData = this.requestData
                return axios
                    .post('/service/getOfferWalls', requestData)
                    .then(
                        response => {
                            try {
                                const _response = JSON.parse(response.request.responseText)
                                if (_response && _response.error === "0") {
                                    this.offers = _response.result.offers.map(offer => {
                                        offer.active = false
                                        return offer
                                    })
                                    if(this.offers.length > 0){
                                        this.offers[0].active = true
                                    }
                                }
                            } catch (e) {
                                // console.log('RESPONSE PARSING ERROR: ', e.message)
                            }
                        })
                    .catch(reject => {
                        if (reject.response) {
                            // console.log('REJECTED')
                            // console.log(reject.response.data)
                            // console.log(reject.response.status)
                            // console.log(reject.response.headers)
                        }
                        return Promise.reject(reject)
                    }
                    )
                    .finally(() => {

                    })
            },
            showTab(id){
                console.log(id)
                this.offers.forEach(offer => offer.active = offer.id === id ? true : false)
            }
        },
        mounted() {
            this.getOfferWalls()
        }
    }
</script>

<style lang="scss" scoped>
    .button_tab{
        cursor: pointer;

        &.active-tab{
            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAnCAIAAABBgrX1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozRkY0NTY2OTdBMEJFNjExOEY5MEFFQkQwQkZGQjk2NSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDODI4OEQ5MzgzQkQxMUU2QjkyRUYwNTEyRENFMTIxMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDODI4OEQ5MjgzQkQxMUU2QjkyRUYwNTEyRENFMTIxMyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjYxNzE2MDJEQUQ2REU2MTE5NDE3RjQyQkRDNTQxRjE0IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjNGRjQ1NjY5N0EwQkU2MTE4RjkwQUVCRDBCRkZCOTY1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+F2yuZAAAADtJREFUeNpi+n+DgYnhGBAzkIj/MTD9/8cIpIH4L5D9F0RDMJj9B0hDMYwNlgPRv5lQxOHsvyhqAQIMALoTJ6F8Sc12AAAAAElFTkSuQmCC) repeat-x;
            background-size: contain;
            border-bottom: 2px;
        }
    }

    .VueCarousel-navigation-button{
        outline: none!important;
    }
</style>