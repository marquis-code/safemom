<template>
  <div class="relative overflow-hidden">
    <transition name="fade" @before-enter="beforeEnter" @enter="enter" @leave="leave">
      <img v-if="currentImage" :key="currentImage" :src="currentImage"
        alt="Slideshow Image" class="mx-auto w-full h-[500px] max-w-full drop-shadow-xl" />
    </transition>
  </div>
</template>

<script setup lang="ts">
import mobile1 from '@/assets/img/mobile1.png'
import mobile2 from '@/assets/img/mobile2.png'
import mobile3 from '@/assets/img/mobile3.png'
import mobile4 from '@/assets/img/mobile4.png'
const currentIndex = ref(0)

const images = ref([mobile1, mobile2, mobile3, mobile4])

const currentImage = computed(() => {
  return images.value[currentIndex.value];
})
onMounted(() => {
  setInterval(nextImage, 5000);
})

const nextImage = () => {
  currentIndex.value = (currentIndex.value + 1) % images.value.length;
}

const beforeEnter = (el: any) => {
  el.style.opacity = 0;
  el.style.transform = "scale(1.1)";
}

const enter = (el: any, done: any) => {
  el.offsetWidth; // trigger reflow
  el.style.transition = "opacity 2s ease-in-out, transform 2s ease-in-out";
  el.style.opacity = 1;
  el.style.transform = "scale(1)";
  done();
}

const leave = (el: any, done: any) => {
  el.style.transition = "opacity 2s ease-in-out, transform 2s ease-in-out";
  el.style.opacity = 0;
  el.style.transform = "scale(1.1)";
  done();
}

</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s ease-in-out, transform 2s ease-in-out;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active in <2.1.8 */
  {
  opacity: 0;
  transform: scale(1.1);
}

.image-slider-container {
  height: 300px;
  /* Adjust based on your needs */
  position: relative;
}
</style>
