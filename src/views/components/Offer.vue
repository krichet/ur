<template>
    <div>
        <ul class="list-clicks">
            <li 
                class="list-clicks__item"
                v-for="offer in offers"
            >
                <a 
                    :href="offer.hotLink || '#'"
                    target="_blank"
                    :class="{ 'disabled':  offer.disabled, 'list-clicks__link': auth}"
                    :data-id="offer.id"
                >
                    <div 
                        class="list-clicks__logo"  
                        v-html="offer.banner"
                    >
                    </div>
                    <div class="list-clicks__cont">
                        <div 
                            class="list-clicks__title"
                            v-text="offer.label"
                        ></div>
                        <p 
                            class="list-clicks__text"
                            v-html="offer.description"
                        ></p>
                        <span class="list-clicks__spec-text">
                            <div 
                                v-if="auth"
                                :class="{'text-primary font-weight-bold' : offer.hotLink}"
                            >
                                {{ offer.hotLink ? 'Visit the link' : 'Reveal the link' }}
                            </div>
                            <div v-else>
                                    Please, 
                                    <router-link :to="{name: 'register'}" class="text-primary font-weight-bold">Sign Up</router-link> 
                                    and confirm an account
                             </div>
                        </span>
                    </div>
                    <div class="list-clicks__right">
                        <div class="button button_orange button_big">
                            Earn {{ offer.price }}</div>
                        </div>
                </a>
            </li>
        </ul> 
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        props: {
            offers: {
                required: true,
                type: Array
            }
        },
        computed:{
        ...mapGetters(['auth'])
        },
    }
</script>