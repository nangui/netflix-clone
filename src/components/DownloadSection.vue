<template>
  <Section id="download" classes="bg-black" inner-classes="flex md:flex-row-reverse flex-col justify-center text-white items-center">
    <template v-slot:first>
      <TitleSection title="Download your shows to watch offline." subtitle="Save your favorites easily and always have something to watch." classes="md:pl-12"/>
    </template>
    <template v-slot:second>
      <image-container>
        <img src="../assets/mobile-0819.jpeg" alt="Mobile" />
        <div class="absolute flex items-center rounded-xl w-full z-10 bg-black bottom-0 mb:bottom-4 transform card-animation">
          <img src="../assets/boxshot.png" alt="Box shot" />
          <div class="flex-grow">
            <h4 class="text-base font-semibold">Stranger Things</h4>
            <p class="text-blue-800 text-sm">Downloading...</p>
          </div>
          <div class="box"></div>
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
.card-animation {
  border: 2px solid rgba(255,255,255,.25);
  box-shadow: 0 0 2em 0 #000;
  padding: 0.5em 0.75em;
  max-width: 60%;
}
.card-animation > img {
  max-width: 100%;
  max-height: 4.5rem;
  margin-right: 1em;
}
.image-container {
  > div {
    max-width: 73%;
    max-height: 55%;
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
.box {
  content: "";
  width: 3em;
  height: 3em;
  outline: 2px solid #000;
  outline-offset: -2px;
  display: block;
  background-image: url('../assets/download-icon.gif');
  background-size: 100%;
}
</style>