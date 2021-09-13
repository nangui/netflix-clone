<template>
  <div class="w-full hero relative" id="hero-section">
    <img class="object-fit w-full h-full" src="../assets/hero.jpeg" alt="background"/>
    <div class='z-20 absolute hero-cover inset-0 flex flex-col justify-center 2xl:justify-start 2xl:pt-52 items-center'>
      <div class="w-4/5 sm:w-3/5">
        <div class="title-container mt-20 sm:mt-0 mx-auto mb-2 sm:mb-6 space-y-2">
          <h1 class="font-extrabold	text-white text-2xl sm:text-5xl tracking-wide text-center mb-5">Unlimited movies, TV shows, and more.</h1>
          <h3 class="text-center text-white text-xl sm:text-2xl">Watch anywhere. Cancel anytime.</h3>
        </div>
        <cta-form styles="max-width: 950px;" />
      </div>
    </div>
  </div>
</template>

<script setup>
import CtaForm from './CtaForm.vue'
</script>

<style lang="scss" scoped>
  .hero {
    border-bottom: 8px solid #222;
    height: 520px;
    max-height: 748px;
    @media (min-width: 768px) {
      height: 88vh;
    }
  }
  .hero-cover {
    background: rgba(0,0,0,.4);
    background-image: linear-gradient(to top,rgba(0,0,0,.8) 0,rgba(0,0,0,0) 40%,rgba(0,0,0,0) 75%,rgba(0,0,0,.8) 100%);
  }
  .title-container {
    max-width: 640px;
    line-height: 1.1;
  }
</style>
