<template>
  <Section id="create-profile" classes="bg-black" inner-classes="flex flex-col md:flex-row-reverse justify-center items-center text-white align-center">
    <template v-slot:first>
      <TitleSection title="Create profile for kids" subtitle="Send kids on adventures with their favorite characters in a space made just for them—free with your membership." classes="md:pl-12"/>
    </template>
    <template v-slot:second>
      <image-container>
        <img src="../assets/kids.png" alt="Kids" />
      </image-container>
    </template>
  </Section>
</template>

<script setup>
import Section from './Section.vue'
import TitleSection from './TitleSection.vue'
import ImageContainer from './ImageContainer.vue'
</script>
