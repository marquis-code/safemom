<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
      <div class="max-w-2xl">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl" data-aos="fade-in">Meet our
          leadership</h2>
        <p class="mt-6 text-lg leading-8 text-gray-600" data-aos="fade-in">Our team is our proudest asset,
          embodying
          innovation, dedication, and a relentless pursuit of excellence. Together, we're not just setting standards;
          we're redefining them. Get to know the brilliant minds propelling us forward.</p>
      </div>
      <ul role="list" class="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2" data-aos="fade-in">
        <li v-for="itm in members" :key="itm.name" data-aos="fade-in">
          <div class="flex items-center gap-x-6">
            <img class="h-16 w-16 rounded-full border shadow" :src="itm.image" alt=""
              data-aos="fade-in">
            <div>
              <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900" data-aos="fade-in">{{
          itm.name }}</h3>
              <p class="text-sm font-semibold leading-6 text-indigo-600" data-aos="fade-in">{{ itm.position }}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>

</template>

<script setup lang="ts">
import ceo from '@/assets/img/ceo.jpeg'
import cto from '@/assets/img/cto.jpeg'
import qa from '@/assets/img/qa.jpeg'
import cmo from '@/assets/img/cmo.jpeg'
import coo from '@/assets/img/coo.jpeg'
import ai from '@/assets/img/ai.jpeg'
const members = ref([
  {
    image: ceo,
    name: 'Micheal Sunmoni',
    position: 'Chief Executive Officer (CEO)'
  },
  {
    image: cto,
    name: 'Joshua Saanumi',
    position: 'Chief Technology Officer (CTO)'
  },
  {
    image: qa,
    name: 'Bukola Awowole',
    position: 'Chief Product Officer (CPO)'
  },
  {
    image: cmo,
    name: 'Jesulewami Oreweme',
    position: 'Chief Marketing Officer (CMO)'
  },
  {
    image: coo,
    name: 'Abdulkhaliq Abdulrasaq',
    position: 'Chief Operating Officer (COO)'
  },
  {
    image: ai,
    name: 'Marquis Abah',
    position: 'AI Engineer'
  }
])
</script>
