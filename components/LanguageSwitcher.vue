<template>
    <div>
      <select @change="changeLanguage($event.target.value)" :value="currentLocale">
        <option v-for="locale in locales" :key="locale.code" :value="locale.code">
          {{ locale.name }}
        </option>
      </select>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  
  const { locale, availableLocales } = useI18n()
  
  const locales = [
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'French' },
    { code: 'es', name: 'Spanish' },
    { code: 'yo', name: 'Yoruba' },
    { code: 'ig', name: 'Igbo' },
    { code: 'ha', name: 'Hausa' }
  ]
  
  const currentLocale = locale
  
  const changeLanguage = (code: string) => {
    locale.value = code
  }
  </script>
  
  <style scoped>
  select {
    padding: 8px;
    margin: 10px;
  }
  </style>
  