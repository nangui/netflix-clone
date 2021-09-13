<template>
  <ul class="faq-list md:my-8 mx-auto list-none">
    <faq-list-item question="What is Netflix?">
      Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
      <br><br>
      You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!
    </faq-list-item>
    <faq-list-item question="How much does Netflix cost?">
      Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from USD3.99 to USD11.99 a month. No extra costs, no contracts.
    </faq-list-item>
    <faq-list-item question="Where can I watch?">
      Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
      <br><br>
      You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
    </faq-list-item>
    <faq-list-item question="What can I watch on Netflix?">
      Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
    </faq-list-item>
    <faq-list-item question="How do I cancel?">
      Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
    </faq-list-item>
    <faq-list-item question="Is Netflix good for kids?">
      The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.
      <br><br>
      Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
    </faq-list-item>
  </ul>
</template>

<script setup>
import FaqListItem from './FaqListItem.vue'
</script>

<style lang="scss" scoped>
.faq-list {
  max-width: 815px;
  margin: 1.25em auto;
  @media (min-width: 768px) {
    width: 75%;
    margin: 2em auto;
  }
}
</style>
