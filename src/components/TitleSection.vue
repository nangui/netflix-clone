<template>
  <div :class="classes" class="first text-center md:text-left flex flex-col justify-center align-center">
    <h1 class="title mb-2">{{ title }}</h1>
    <h2 class="subtitle font-normal">{{ subtitle }}</h2>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: '',
  },
  subtitle: {
    type: String,
    default: '',
  },
  classes: {
    type: String,
    default: '',
  },
})
</script>

<style lang="scss" scoped>
  .first {
    width: 100%;
    @media (min-width: 768px) {
      width: 52%;
    }
  }
  .title {
    font-size: 1.625rem;
    line-height: 1.1;
    @media (min-width: 768px) {
      font-size: 3.125rem;
    }
  }
  .subtitle {
    font-size: 1.125rem;
    @media (min-width: 768px) {
      font-size: 1.625rem;
    }
  }
</style>