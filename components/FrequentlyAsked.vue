<template>
  <div class="bg-white">
    <div class="mx-auto max-w-7xl px-6 py-24 sm:pt-32 lg:px-8 lg:py-40">
      <div class="lg:grid lg:grid-cols-12 lg:gap-8">
        <div class="lg:col-span-5">
          <h2 class="text-2xl font-bold leading-10 tracking-tight text-gray-900" data-aos="fade-in">{{ t('faq') }}</h2>
          <p class="mt-4 text-base leading-7 text-gray-600" data-aos="fade-in">
            {{ t('reachOut') }}
            <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500" data-aos="fade-in">{{ t('customerSupport') }}</a>
          </p>
        </div>
        <div class="mt-10 lg:col-span-7 lg:mt-0">
          <dl class="space-y-10" data-aos="fade-in">
            <div v-for="itm in faqs" :key="itm.questions" data-aos="fade-in">
              <dt class="text-base font-semibold leading-7 text-gray-900" data-aos="fade-in">{{ t(itm.questions) }}?</dt>
              <dd class="mt-2 text-base leading-7 text-gray-600" data-aos="fade-in">{{ t(itm.answers) }}</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const faqs = ref([
  {
    questions: 'howWeHire',
    answers: 'hireProcess'
  },
  {
    questions: 'buildProcesses',
    answers: 'processesStructure'
  },
  {
    questions: 'scaleMarkets',
    answers: 'scaleIntoNewMarkets'
  }
])
</script>
