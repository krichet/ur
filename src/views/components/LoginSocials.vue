<template>
    <ul class="list-social">
        <li 
            class="list-social__item"
            @click.prevent="loginWithGoogle"
        >
            <a href="#" class="list-social__link list-social__link_social-1">
            <img src="/img/img_social_1.jpg" alt>
            </a>
        </li>
        <li 
            class="list-social__item"
            @click.prevent="loginWithFacebook"
        >
            <a href="#" class="list-social__link list-social__link_social-2">
            <img src="/img/img_social_2.jpg" alt>
            </a>
        </li>
        <!-- <li class="list-social__item">
            <a href="#" class="list-social__link list-social__link_social-3">
            <img src="/img/img_social_3.jpg" alt>
            </a>
        </li> -->
        </ul>       
</template>

<script>
    import { initFbsdk } from 'configs/facebook_oAuth.js'
    export default{
        mounted () {
            initFbsdk()
        },
        methods: {
            loginWithGoogle () {
            this.$gAuth
                .signIn()
                .then(GoogleUser => {
					/*
					
						https://developers.google.com/identity/sign-in/web/people
						https://developers.google.com/identity/sign-in/web/sign-in
					
					*/
                    // on success do something
                    console.log('GoogleUser', GoogleUser)
					console.log('Object.keys(GoogleUser)[0]', Object.keys(GoogleUser)[0]) 
                    console.log('getId', GoogleUser.getId())
					//console.log('getEmail', GoogleUser.getBasicProfile().getEmail())
                    console.log('getBasicProfile', GoogleUser.getBasicProfile())
                    // console.log('getAuthResponse', GoogleUser.getAuthResponse())
					const email = GoogleUser.getBasicProfile().getEmail()
					const name = GoogleUser.getBasicProfile().getName()
                    alert(email + ' ' + name)
                    var userInfo = {
                        loginType: 'google',
                        google: GoogleUser
                    }
                    // this.$store.commit('setLoginUser', userInfo)
                    // router.push('/home')
                })
                .catch(error => {
                    console.log('error', error)
                })
            },
            loginWithFacebook () {
                FB.login(response => {
                    var userInfo = {
                        loginType: 'fb',
                        fb: response
                    }
                    console.log('fb response', response)
                    // this.$store.commit('setLoginUser', userInfo)
                    // router.push('/home')
                    if(response.status === 'connected'){
                            FB.api('/me?fields=id,name,email', function(response) {
                            console.log('RESPONSE: ', response);
                            // console.log('Successful login for: ' + response.name);
                            alert(response.name + ' ' + response.email)
                            });
                    }
                }, {scope: 'public_profile,email'})
            }
        }
    }
</script>