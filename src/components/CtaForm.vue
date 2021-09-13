<template>
  <form @submit.prevent="handleSignup" class="cta-form form flex flex-col mx-auto" :style="styles">
    <p class="text-white text-center font-light text-xl mb-2 md:mb-4">Ready to watch? Enter your email to create or restart your membership.</p>
    <div class="w-full flex flex-col md:flex-row justify-center relative max-w-prose place-self-center">
      <Input classes="md:placeholder-gray-500 px-2 md:px-3 h-12 md:h-14" placeholder="Email Address" label="Email address" type="email" v-model="email" />
      <Button type="submit" class="flex md:w-max mt-2 md:mt-0 items-center self-center md:self-auto justify-center bg-netflix-red text-white md:text-2xl pl-2 md:pl-5 md:pr-5 py-2">
        <span class="font-light mr-2">{{ !loading.value ? 'Get Started': 'Loading...'}}</span><vue-feather type="chevron-right" v-if="!loading.value"></vue-feather>
      </Button>
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { supabase } from '../../supabase'
import Input from '../shared/Input.vue'
import Button from '../shared/Button.vue'

const loading = ref(false)
const email = ref('')

defineProps({
  styles: {
    type: String,
    default: '',
  }
})

const handleSignup = async () => {
  try {
    loading.value = true
    email.value = email.value.trim()
    email.value = ''
    const { error } = await supabase.auth.signIn({ email: email.value })
    if (error) throw error
    alert("Check your email for the login link!")
  } catch (error) {
    console.error(error.error_description || error.message)
  } finally {
    loading.value = false
  }
}
</script>

<style>
.form {
  padding-top: 0.85rem;
}
@media (min-width: 768px) {
  .vue-feather svg {
    width: 2rem;
    height: 2rem;
  }
}
</style>
