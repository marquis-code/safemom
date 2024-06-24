<template>
  <div class="overflow-hidden bg-white">
    <div class="relative mx-auto max-w-7xl px-6 lg:px-8">
      <div class="absolute bottom-0 left-3/4 top-0 hidden w-screen bg-gray-50 lg:block"></div>
      <div class="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
        <div>
          <h2 class="text-lg font-semibold text-indigo-600" data-aos="flip-left"> {{ $t('caseStudy') }}</h2>
          <h3 class="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl" data-aos="flip-left">
            {{ $t('meetAmara') }}</h3>
        </div>
      </div>
      <div class="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
        <div class="relative lg:col-start-2 lg:row-start-1">
          <svg class="absolute right-0 top-0 -mr-20 -mt-20 hidden lg:block" width="404" height="384" fill="none"
            viewBox="0 0 404 384" aria-hidden="true">
            <defs>
              <pattern id="de316486-4a29-4312-bdfc-fbce2132a2c1" x="0" y="0" width="20" height="20"
                patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="384" fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
          </svg>
          <div class="relative mx-auto max-w-prose text-base lg:max-w-none">
            <figure>
              <div class="aspect-h-7 aspect-w-12 lg:aspect-none">
                <img class="rounded-lg object-cover object-center shadow-lg" data-aos="flip-left"
                  src="@/assets/img/preg1.png" alt="Whitney leaning against a railing on a downtown street" width="1184"
                  height="1376">
              </div>
            </figure>
          </div>
        </div>
        <div class="mt-8 lg:mt-0">
          <div class="mx-auto max-w-prose text-base lg:max-w-none space-y-3 text-justify" data-aos="flip-left">
            <p data-aos="flip-left">
              {{ $t('story') }}
           </p>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>