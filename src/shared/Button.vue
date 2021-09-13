<template>
  <button :disabled='disabled' :type="type" :class="classes" v-on:click="$emit('exec-action')">
    <slot></slot>
  </button>
</template>

<script setup>

defineProps({
  type: {
    type: String,
    default: 'button'
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  classes: {
    type: String,
    required: false,
  }
})

defineEmits(['exec-action'])

</script>
