<template>
  <div class="flex flex-col justify-center items-center md:block my-18 md:my-0 relative image-container">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.image-container {
  @media (min-width: 768px) {
    width: 48%;
  }
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
</style>
