<template>
  <li class="inline-block ml-0 w-1/2 md:w-1/4 align-top">
    <a :href="link" class="hover:underline">{{ label }}</a>
  </li>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    default: '#',
  },
})
</script>
