<template>
  <li class="faq-list-item mb-2">
    <button @click="toggleAnswer" class="block relative font-normal w-full mb-px border-0 text-left faq-question cursor-pointer">
      {{ question }}
      <svg id="thin-x" fill="#fff" viewBox="0 0 26 26" class="transition-all duration-500 ease-in-out absolute top-1/2 right-4 svg-icon" focusable="true"><path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path></svg>
    </button>
    <div class="faq-answer faq-answer-closed transition-all duration-500 ease-in-out">
      <span class="inline-block text-left font-normal">
        <slot></slot>
      </span>
    </div>
  </li>
</template>

<script setup>
defineProps({
  question: {
    type: String,
    required: true,
  },
})

const toggleAnswer = (event) => {
  event.target.children[0].classList.toggle('svg-open')
  event.target.parentNode.children[1].classList.toggle('faq-answer-closed')
  event.target.parentNode.children[1].classList.toggle('faq-answer-open')
}

</script>

<style lang="scss" scoped>
.faq-question,
  .faq-answer {
    background: #303030;
  }
  .faq-question {
    padding: 0.8em 2.2em 0.8em 1.2em;
    font-size: 1.125rem;

    @media (min-width: 768px) {
      font-size: 1.625rem;
    }
    .svg-icon {
      -webkit-transform: translateY(-50%) rotate(-45deg);
      transform: translateY(-50%) rotate(-45deg);
      width: 1em;
      height: 1em;

      &.svg-open {
        -webkit-transform: translateY(-50%) rotate(0deg);
        transform: translateY(-50%) rotate(0deg);
      }
    }
  }
  .faq-answer {
    overflow: hidden;
    span {
      font-size: 1.625rem;
    }
    &.faq-answer-closed {
      max-height: 0;
      -webkit-transition: max-height .25s cubic-bezier(.5,0,.1,1);
      -o-transition: max-height .25s cubic-bezier(.5,0,.1,1);
      -moz-transition: max-height .25s cubic-bezier(.5,0,.1,1);
      transition: max-height .25s cubic-bezier(.5,0,.1,1);
    }
    &.faq-answer-open {
      max-height: 1200px;
      padding: 1.2em;
      -webkit-transition: max-height .25s cubic-bezier(.5,0,.1,1);
      -o-transition: max-height .25s cubic-bezier(.5,0,.1,1);
      -moz-transition: max-height .25s cubic-bezier(.5,0,.1,1);
      transition: max-height .25s cubic-bezier(.5,0,.1,1);
    }
  }
</style>
