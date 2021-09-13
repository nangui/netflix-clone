<template>
  <Section id="enjoy" classes="min-h-72 md:min-h-unset bg-black md:pt-2" inner-classes="flex flex-col md:flex-row justify-center text-white items-center">
    <template v-slot:first>
      <TitleSection title="Enjoy on your TV." subtitle="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more." classes="md:pr-12" />
    </template>
    <template v-slot:second>
      <image-container>
        <img class="absolute md:static inset-0 z-10" src="../assets/tv.png" alt="TV" />
        <div class="md:absolute w-full h-full z-20 top-0 left-0 transform">
          <video class="video w-full h-full" autoplay playsinline muted loop>
            <source src="../assets/video-tv.m4v" type="video/mp4" />
          </video>
        </div>
      </image-container>
    </template>
  </Section>
</template>

<script setup>
import Section from '../components/Section.vue'
import TitleSection from '../components/TitleSection.vue'
import ImageContainer from '../components/ImageContainer.vue'
</script>

<style lang="scss" scoped>
.image-container {
  > div {
    max-width: 73%;
    max-height: 55%;
    transform: translateX(-2px) translateY(38%);
    @media (min-width: 768px) {
      transform: translateX(4rem) translateY(38%);
    }
    @media (min-width: 1110px) and (max-width: 1120px) {
      transform: translateX(4rem) translateY(37%);
    }
    @media (min-width: 1121px) and (max-width: 1200px) {
      transform: translateX(4rem) translateY(37%);
    }
  }
}
</style>
