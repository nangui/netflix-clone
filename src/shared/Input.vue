<template>
  <div class="input-group relative flex-1">
    <input :type="type" class="form-input w-full" :value="modelValue" :class="classes" :placeholder="placeholder" @input="$emit('update:modelValue', $event.target.value)" />
  </div>
</template>
<script setup>
defineProps({
  label: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    default: ''
  },
  classes: {
    type: String,
    default: ''
  },
  modelValue: {
    type: String,
    default: '',
  },
})

</script>
<style>
  input:focus-within ~ label {
    transform: translate(0);
  }
</style>
