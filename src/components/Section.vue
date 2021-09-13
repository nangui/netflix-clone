<template>
  <section :id="id" :class="classes">
    <div class="max-w-screen-lg mx-auto" :class="innerClasses">
      <slot name="first"></slot>
      <slot></slot>
      <slot name="second"></slot>
    </div>
  </section>
</template>

<script setup>
defineProps({
  id: {
    type: String,
    default: null,
  },
  classes: {
    type: String,
    default: '',
  },
  innerClasses: {
    type: String,
    default: '',
  },
})
</script>

<style lang="scss">
section {
  border-bottom: 8px solid #222;
  padding: 50px 5%;
  
  @media (min-width: 768px) {
    padding: 4.375rem 2.813rem;
  }
}
</style>