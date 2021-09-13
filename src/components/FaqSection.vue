<template>
  <Section id="faq" class="faq bg-black">
    <template v-slot:default>
      <div class="faq-inner font-normal text-white">
        <h1 class="faq-inner-title text-center md:text-2xl font-semibold mb-2">Frequently Asked Questions</h1>
        <faq-list />
        <div class="w-4/5 md:w-3/4 mx-auto max-w-prose">
          <cta-form styles="max-width: 640px;" />
        </div>
      </div>
    </template>
  </Section>
</template>

<script setup>
import Section from './Section.vue'
import CtaForm from './CtaForm.vue'
import FaqList from './FaqList.vue';
</script>

<style lang="scss" scoped>
.faq {
  padding: 50px 0;
  @media (min-width: 640px) {
    padding: 75px 45px;
  }
}
.faq-inner {
  @media (min-width: 768px) {
    font-size: 1.625rem;
  }
  .faq-inner-title {
    line-height: 1.1;
    @media (min-width: 768px) {
      font-size: 3.125rem;
    }
  }
}
</style>
