<template>
  <div class="relative isolate overflow-hidden bg-white">
    <svg
      class="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
      aria-hidden="true">
      <defs>
        <pattern id="0787a7c5-978c-4f66-83c7-11c213f99cb7" width="200" height="200" x="50%" y="-1"
          patternUnits="userSpaceOnUse">
          <path d="M.5 200V.5H200" fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" stroke-width="0" fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)" />
    </svg>
    <div class="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
      <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
        <img class="h-20" src="@/assets/img/logo2.png" alt="Your Company">
        <h1 class="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"  data-aos="flip-up" data-aos-duration="4000">{{ $t('healthyMoms') }}</h1>
        <p class="mt-6 text-lg leading-8 text-gray-600" data-aos="fade-in">{{ $t('empoweringMotherhood')}}</p>
        <div class="mt-10 flex items-center gap-x-6" data-aos="fade-in">
          <NuxtLink to="/auth" data-aos="fade-in"
            class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            {{ $t('getStarted')}}</NuxtLink>
          <a href="#" class="text-sm font-semibold leading-6 text-gray-900">{{ $t('learnMore')}} <span
              aria-hidden="true">→</span></a>
        </div>
      </div>
      <div class="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
        <div
          class="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none flex justify-center items-center">
          <image-slider />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ImageSlider from '@/components/ImageSlider.vue';
export default {
  data() {
    return {
      showMenu: false,
      images: [
        'mobile1',
        'mobile2',
        'mobile3',
        // Add more images as needed
      ],
      currentIndex: 0,
    }
  },
  computed: {
    currentImage() {
      return this.images[this.currentIndex];
    },
  },
  mounted() {
    setInterval(this.nextImage, 3000); // Change image every 3000 milliseconds (3 seconds)
  },
  methods: {
    nextImage() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
  },
  components: {
    ImageSlider
  }
}
</script>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
