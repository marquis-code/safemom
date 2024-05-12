<template>
  <div class="bg-white">
    <div class="mx-auto max-w-7xl px-6 py-24 sm:pt-32 lg:px-8 lg:py-40">
      <div class="lg:grid lg:grid-cols-12 lg:gap-8">
        <div class="lg:col-span-5">
          <h2 class="text-2xl font-bold leading-10 tracking-tight text-gray-900" data-aos="fade-in">Frequently asked
            questions</h2>
          <p class="mt-4 text-base leading-7 text-gray-600" data-aos="fade-in">Can’t find the answer you’re looking for?
            Reach out to our
            <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500" data-aos="fade-in">customer
              support</a> team.
          </p>
        </div>
        <div class="mt-10 lg:col-span-7 lg:mt-0">
          <dl class="space-y-10" data-aos="fade-in">
            <div v-for="itm in faqs" :key="itm.questions" data-aos="fade-in">
              <dt class="text-base font-semibold leading-7 text-gray-900" data-aos="fade-in">{{ itm.questions }}?</dt>
              <dd class="mt-2 text-base leading-7 text-gray-600" data-aos="fade-in">{{ itm.answers }}</dd>
            </div>

            <!-- More questions... -->
          </dl>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
const faqs = ref([
  {
    questions: 'How SafeMom hires talent',
    answers: 'SafeMom recruits talent through a rigorous selection process, leveraging industry networks, social media, and specialized job platforms to identify professionals with a passion for maternal health and innovation.'
  },
  {
    questions: 'How SafeMom To builds processes and structure',
    answers: 'SafeMom builds processes and structures by implementing best practices in project management, adopting agile methodologies for flexibility, and fostering a culture of continuous improvement to enhance service delivery and operational efficiency.'
  },
  {
    questions: 'How SafeMom intends to scale into new African markets',
    answers: 'SafeMom plans to scale into new African markets by forming strategic partnerships with local health organizations, customizing its platform to meet regional needs, and utilizing mobile technology to overcome accessibility challenges, ensuring a broad and impactful reach.'
  }
])
</script>
