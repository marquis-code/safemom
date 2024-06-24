<template>
  <main>
    <navigation-bar></navigation-bar>
    <!-- <LanguageSwitcher /> -->
    <hero-section class="mb-10 lg:mb-20" />
    <content-section />
    <the-problem />
    <the-solution />
    <MealsCarousel id="products" />
    <our-team />
    <pricing-section />
    <frequently-asked />
    <contact-us />
    <footer-section />
  </main>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>