<template>
    <div>
        <UserInfo />
        <div class="wrapper wrapper_long">
            <AsideLeft />
            <div class="main-cont">
                <div class="main-cont__white main-cont__white_with-column clearfix">
                    <div class="main-cont__left">
                        <div class="line-main-title">
                            <h1 class="main-title">Cashback Shopping</h1>
                        </div>
                        <div class="tabs js-tabs">
                            <ul class="list-tabs clearfix">
                                <li class="list-tabs__item js-tabs-item active w-100">
                                    <a href="#tab-1" class="button button_tab button_play js-tabs-link">Play Online</a>
                                </li>
                            </ul>
                            <div class="list-tab-cont">
                                <div 
                                    id="tab-1" 
                                    class="js-tab-cont"
                                >
                                    <h3 class="hot-offers__subtitle hot-offers__subtitle_red py-5 px-3">
                                        Play any of the available games and get money for each game you have played. You can play the unlimited number of times. Start now!
                                    </h3>
                                    <div class="framecontainer">
                                        <iframe 
                                            scrolling="auto" 
                                            frameborder="0"
                                            :src="frame.src"
                                        ></iframe>
                                    </div>
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
    import {mapGetters} from 'vuex'
    export default {
        computed: {
            ...mapGetters(['uid', 'fname'])
        },
        data(){
            return{
                frame: {
                    src: ''
                }
            }
        },
        mounted(){
            this.$store.dispatch('getUserData')
                .then(data => {
                    this.frame.src = `http://games.uniquerewards.com/?user_id=${this.uid}&user_name=${this.fname}&arkpromo=HouseAds_Games`
                }) 


        }
    }
</script>

<style lang="scss">
    .framecontainer {
        /* overflow: hidden; */
        /* width: 1050px; */
        overflow: auto;
        width: 640px;
        max-width: 100%;
        height: 1854px;
        margin-left: auto;
        margin-right: auto;
        /* display: flex;
        justify-content: center; */

        iframe {
            position: relative;
            /* top: -310px;
            left: -20px; */
            /* width: 1200px; */
            width: 100%;
            height: 3238px;

        }

    }


    .arena-page-body-on-pc{
        min-width: none !important;
        width: 100% !important;
    }



    .arena-wrapper .arena-ad-col {
        width: 100% !important;
        float: none !important;
    }


    .arena-wrapper.arena-platform-wide .arena-ad-col+.arena-main-col {
        margin: 0 !important;
        max-width: none !important;
    }


    @media screen and (max-width: 1200px){

        .framecontainer{
            height: 1954px;

        }
    }
    @media screen and (max-width: 992px){

            .framecontainer{
                height: 1754px;

            }
    }
    @media screen and (max-width: 768px){

        .framecontainer{
            height: 1700px;


        }
    }


</style>