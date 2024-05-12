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
        <h1 class="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"  data-aos="flip-up" data-aos-duration="4000">Healthy Moms, Happy
          Beginnings.</h1>
        <p class="mt-6 text-lg leading-8 text-gray-600" data-aos="fade-in">Empowering Motherhood, Embracing Joy. Bridging Care, Crafting
          Tomorrow. Every Mother’s Guide to a Blissful
          Journey.</p>
        <div class="mt-10 flex items-center gap-x-6" data-aos="fade-in">
          <a href="#" data-aos="fade-in"
            class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get
            started</a>
          <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Learn more <span
              aria-hidden="true">→</span></a>
        </div>
      </div>
      <div class="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
        <div
          class="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none flex justify-center items-center">
          <image-slider />
          <!-- <div class="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4"> -->
          <!-- <img :src="require(`@/assets/img/${currentImage}.png`)" alt="Slideshow Image" class="mx-auto w-full h-[500px] max-w-full drop-shadow-xl" /> -->
          <!-- <img src="@/assets/img/mobile3.png" alt="" class="mx-auto w-full h-[500px] max-w-full drop-shadow-xl" /> -->
          <!-- </div> -->
        </div>
      </div>
    </div>
  </div>

  <!-- <div class="relative isolate overflow-hidden bg-gray-900">
    <svg
      class="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
      aria-hidden="true">
      <defs>
        <pattern id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc" width="200" height="200" x="50%" y="-1"
          patternUnits="userSpaceOnUse">
          <path d="M.5 200V.5H200" fill="none" />
        </pattern>
      </defs>
      <svg x="50%" y="-1" class="overflow-visible fill-gray-800/20">
        <path d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
          stroke-width="0" />
      </svg>
      <rect width="100%" height="100%" stroke-width="0" fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)" />
    </svg>
    <div
      class="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
      aria-hidden="true">
      <div class="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
        style="clip-path: polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)">
      </div>
    </div>
    <div class="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
      <div class="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
        <img class="h-20" src="@/assets/img/logo2.png" alt="Your Company">
        <h1 class="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">Healthy Moms, Happy
          Beginnings
        </h1>
        <p class="mt-6 text-lg leading-8 text-gray-300">Empowering Motherhood, Embracing Joy. Bridging Care, Crafting
          Tomorrow. Every Mother’s Guide to a Blissful
          Journey.</p>
        <div class="mt-10 flex items-center gap-x-6">
          <a href="#"
            class="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400">Get
            started</a>
          <a href="#" class="text-sm font-semibold leading-6 text-white">Learn more <span
              aria-hidden="true">→</span></a>
        </div>
      </div>
      <div class="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
        <img src="@/assets/img/mobile1.png" alt="" class="mx-auto w-full h-[500px] max-w-full drop-shadow-xl" />
      </div>
    </div>
  </div> -->

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
