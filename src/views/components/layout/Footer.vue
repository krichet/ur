<template>
	<footer>
		<div class="wrapper footer-wrapper">
			<div class="footer-banners">
				<bottom-banner-one></bottom-banner-one>
				<bottom-banner-two></bottom-banner-two>
				<bottom-banner-three></bottom-banner-three>
				<bottom-video-banner></bottom-video-banner>
			</div>	
			<div>
				<div class="footer-left">
					<ul class="footer-nav">
						<li class="footer-nav__item"><router-link to="/rules" class="footer-nav__link">Rules</router-link></li>
						<li class="footer-nav__item"><router-link to="/faq" class="footer-nav__link">FAQ</router-link></li>
						<li class="footer-nav__item"><router-link to="/privacy-policy" class="footer-nav__link">Privacy Policy</router-link></li>
						<li class="footer-nav__item"><router-link to="/contact" class="footer-nav__link">Contact Us</router-link></li>
						<li class="footer-nav__item"><router-link to="/guide" class="footer-nav__link">Guide</router-link></li>
						<li class="footer-nav__item"><router-link to="/about" class="footer-nav__link">About Us</router-link></li>
					</ul>
					<p>Use this field to push you site to the TOP by means of SEO. Use this field to push you site to the TOP by means of SEO. Use this field to push you site to the TOP by means of SEO. Use this field to push you site to the TOP by means of SEO. Use this field to push you site to the TOP by means of SEO. Use this field to push you site to the TOP by means of SEO. Use this field to push you site to the TOP by means of SEO.</p>
					<p>Use this field to push you site to the TOP by means of SEO. Use this field to push you site to the TOP by means of SEO. Use this field to push you site to the TOP by means of SEO. Use this field to push you site</p>
					<p class="copy">© 2007-{{ (new Date()).getFullYear() }} UniqueRewards.com, Inc. Designed by <a href="http://krichet.com/en/develop-en">KRICHET</a></p>
				</div>
				<div class="footer-img">
					<img src="/img/footer_img.png" alt="">
				</div>
			</div>		
		</div>			
	</footer>    
</template>
<script>
import BottomVideoBanner from '../banners/BottomVideoBanner.vue'
    export default {
  components: { BottomVideoBanner },
	
	}
</script>