<template>
    <aside>
        <ul class="menu">
            <router-link :to="{name: 'offers'}" tag="li" class="menu__item">
                <a href="#" class="menu__link">
                    <span class="menu__icon">
                        <img src="/img/icon_menu_1.png" alt="">
                    </span>
                    <span class="menu__info">
                        <span class="menu__info-cont">
                            Offers
                        </span>
                    </span>
                </a>
            </router-link>
            <router-link :to="{name: 'surveys'}" tag="li" class="menu__item">
                <a href="#" class="menu__link">
                    <span class="menu__icon">
                        <img src="/img/icon_menu_2.png" alt="">
                    </span>
                    <span class="menu__info">
                        <span class="menu__info-cont">
                            Take Surveys
                        </span>
                    </span>
                </a>
            </router-link>
            <router-link :to="{name: 'hot-offers'}" tag="li" class="menu__item">
                <a href="#" class="menu__link">
                    <span class="menu__icon">
                        <img src="/img/icon_menu_3.png" alt="">
                    </span>
                    <span class="menu__info">
                        <span class="menu__info-cont">
                            Hot Offers/Surveys
                        </span>
                    </span>
                </a>
            </router-link>
            <router-link v-if="auth" :to="{name: 'offer-walls'}" tag="li" class="menu__item">
                <a href="#" class="menu__link">
                    <span class="menu__icon">
                        <img src="/img/icon_menu_4.png" alt="">
                    </span>
                    <span class="menu__info">
                        <span class="menu__info-cont">
                            Offer Walls
                        </span>
                    </span>
                </a>
            </router-link>
            <router-link v-if="auth" :to="{name: 'paid-2-games'}" tag="li" class="menu__item">
                <a href="#" class="menu__link">
                    <span class="menu__icon">
                        <img src="img/icon_menu_6.png" alt="">
                    </span>
                    <span class="menu__info">
                        <span class="menu__info-cont">
                            Paid 2 Games
                        </span>
                    </span>
                </a>
            </router-link>
            <router-link v-if="auth" :to="{name: 'video'}" tag="li" class="menu__item">
                <a href="#" class="menu__link">
                    <span class="menu__icon">
                        <img src="/img/icon_menu_8.png" alt="">
                    </span>
                    <span class="menu__info">
                        <span class="menu__info-cont">
                            Videos
                        </span>
                    </span>
                </a>
            </router-link>
            <router-link v-if="auth" :to="{name: 'click'}" tag="li" class="menu__item">
                <a href="#" class="menu__link">
                    <span class="menu__icon">
                        <img src="/img/icon_menu_10.png" alt="">
                    </span>
                    <span class="menu__info">
                        <span class="menu__info-cont">
                            Visit Sites
                        </span>
                    </span>
                </a>
            </router-link>
        </ul>
    </aside>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  computed:{
    ...mapGetters(['auth'])
  }
}
</script>