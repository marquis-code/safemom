<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
      <div class="max-w-2xl">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl" data-aos="fade-in">{{ t('meetLeadership') }}</h2>
        <p class="mt-6 text-lg leading-8 text-gray-600" data-aos="fade-in">{{ t('leadershipDescription') }}</p>
      </div>
      <ul role="list" class="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2" data-aos="fade-in">
        <li v-for="itm in members" :key="itm.name" data-aos="fade-in">
          <div class="flex items-center gap-x-6">
            <img class="h-16 w-16 rounded-full border shadow" :src="itm.image" alt=""
              data-aos="fade-in">
            <div>
              <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900" data-aos="fade-in">{{
          itm.name }}</h3>
              <p class="text-sm font-semibold leading-6 text-indigo-600" data-aos="fade-in">{{ t(itm.positionKey) }}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

import ceo from '@/assets/img/ceo.jpeg'
import cto from '@/assets/img/cto.jpeg'
import qa from '@/assets/img/qa.jpeg'
import ai from '@/assets/img/ai.jpeg'

const members = ref([
  {
    image: ceo,
    name: 'Micheal Sunmoni',
    positionKey: 'michealSunmoni'
  },
  {
    image: cto,
    name: 'Joshua Saanumi',
    positionKey: 'joshuaSaanumi'
  },
  {
    image: qa,
    name: 'Bukola Awowole',
    positionKey: 'bukolaAwowole'
  },
  {
    image: ai,
    name: 'Marquis Abah',
    positionKey: 'marquisAbah'
  }
])
</script>
