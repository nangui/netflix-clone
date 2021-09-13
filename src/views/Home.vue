<template>
  <hero-section />
  <enjoy-section />
  <download-section />
  <watch-everywhere-section />
  <kids-section />
  <faq-section />
  <footer-section />
</template>
<script setup>
import HeroSection from '../components/HeroSection.vue'
import Section from '../components/Section.vue'
import TitleSection from '../components/TitleSection.vue'
import ImageContainer from '../components/ImageContainer.vue'
import EnjoySection from '../components/EnjoySection.vue'
import DownloadSection from '../components/DownloadSection.vue'
import WatchEverywhereSection from '../components/WatchEverywhereSection.vue'
import KidsSection from '../components/KidsSection.vue'
import FaqSection from '../components/FaqSection.vue'
import FooterSection from '../components/FooterSection.vue'
</script>

<style lang="scss" scoped>
.footer {
  max-width: 1920px;
  padding: 70px 45px 0;
  margin: 0 auto;
  .footer-content {
    margin: 0 auto;
    width: 90%;
    color: #757575;
    min-width: 190px;
    padding-bottom: 20px;
    font-size: 1em;
    color: #757575;
    position: relative;
    .footer-top {
      margin: 0 0 30px;
      font-size: 1em;
    }
    .footer-links {
      font-size: 13px;

      li {
        margin-bottom: 16px;
        padding-right: 12px;
        min-width: 100px;

        a {
          color: #757575;
        }
      }
    }
    .footer-country {
      font-size: 13px;
      margin-top: 24px;
      margin-bottom: 1em;
    } 
  }
}
</style>
