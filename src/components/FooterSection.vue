<template>
  <div class="footer-container w-full bg-black">
    <div class="footer-content">
      <p class="footer-top">
        <router-link to="/contactus">Questions? Contact us.</router-link>
      </p>
      <ul class="footer-links list-none">
        <footer-item label="FAQ" />
        <footer-item label="Help Center" />
        <footer-item label="Account" />
        <footer-item label="Media Center" />
        <footer-item label="Investor Relations" />
        <footer-item label="Jobs" />
        <footer-item label="Ways to Watch" />
        <footer-item label="Terms of use" />
        <footer-item label="Privacy" />
        <footer-item label="Cookie Preferences" />
        <footer-item label="Corporate Information" />
        <footer-item label="Contact Us" />
        <footer-item label="Speed Test" />
        <footer-item label="Legal Notices" />
        <footer-item label="Only on Netflix" />
      </ul>
      <p class="footer-country">Netflix Senegal</p>
    </div>
  </div>
</template>

<script setup>
import FooterItem from './FooterItem.vue'
</script>

<style lang="scss" scoped>
.footer-container {
  max-width: 1920px;
  @media (min-width: 768px) {
    padding: 70px 45px 0;
  }
  padding: 50px 5%;
  margin: 0 auto;
  .footer-content {
    margin: 0 auto;
    width: 90%;
    color: #757575;
    min-width: 190px;
    padding-bottom: 20px;
    font-size: 1em;
    color: #757575;
    position: relative;
    .footer-top {
      margin: 0 0 30px;
      font-size: 1em;
    }
    .footer-links {
      font-size: 13px;

      li {
        margin-bottom: 16px;
        padding-right: 12px;
        min-width: 100px;

        a {
          color: #757575;
        }
      }
    }
    .footer-country {
      font-size: 13px;
      margin-top: 24px;
      margin-bottom: 1em;
    } 
  }
}
</style>
