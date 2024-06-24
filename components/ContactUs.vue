<template>
    <main>
       <section class="min-h-screen bg-cover " style="background-image: url('./contact2.jpeg')">
           <div class="flex flex-col min-h-screen bg-black/60">
               <div class="container flex flex-col flex-1 px-6 py-12 mx-auto">
                   <div class="flex-1 lg:flex lg:items-center lg:-mx-6">
                       <div class="text-white lg:w-1/2 lg:mx-6">
                           <h1 class="text-2xl font-semibold capitalize lg:text-3xl" data-aos="flip-left">{{ t('reachOutMum') }}</h1>
   
                           <p class="max-w-xl mt-6" data-aos="flip-left">
                               {{ t('welcomeMessage') }}
                           </p>
   
                           <button data-aos="flip-left"
                               class="px-8 hidden py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">
                               {{ t('getInTouch') }}
                           </button>
   
                           <div class="mt-6 md:mt-8">
                               <h3 class="text-gray-300 " data-aos="flip-left">{{ t('followUs') }}</h3>
   
                               <div class="flex mt-4 -mx-1.5 " data-aos="flip-left">
   
                                   <a class="mx-1.5 text-white transition-colors duration-300 transform hover:text-blue-500"
                                       href="https://www.instagram.com/safemom_" target="_blank">
                                       <svg class="w-8 h-8" viewBox="0 0 24 24" fill="none"
                                           xmlns="http://www.w3.org/2000/svg">
                                           <path
                                               d="M11.9294 7.72275C9.65868 7.72275 7.82715 9.55428 7.82715 11.825C7.82715 14.0956 9.65868 15.9271 11.9294 15.9271C14.2 15.9271 16.0316 14.0956 16.0316 11.825C16.0316 9.55428 14.2 7.72275 11.9294 7.72275ZM11.9294 14.4919C10.462 14.4919 9.26239 13.2959 9.26239 11.825C9.26239 10.354 10.4584 9.15799 11.9294 9.15799C13.4003 9.15799 14.5963 10.354 14.5963 11.825C14.5963 13.2959 13.3967 14.4919 11.9294 14.4919ZM17.1562 7.55495C17.1562 8.08692 16.7277 8.51178 16.1994 8.51178C15.6674 8.51178 15.2425 8.08335 15.2425 7.55495C15.2425 7.02656 15.671 6.59813 16.1994 6.59813C16.7277 6.59813 17.1562 7.02656 17.1562 7.55495ZM19.8731 8.52606C19.8124 7.24434 19.5197 6.10901 18.5807 5.17361C17.6453 4.23821 16.51 3.94545 15.2282 3.88118C13.9073 3.80621 9.94787 3.80621 8.62689 3.88118C7.34874 3.94188 6.21341 4.23464 5.27444 5.17004C4.33547 6.10544 4.04628 7.24077 3.98201 8.52249C3.90704 9.84347 3.90704 13.8029 3.98201 15.1238C4.04271 16.4056 4.33547 17.5409 5.27444 18.4763C6.21341 19.4117 7.34517 19.7045 8.62689 19.7687C9.94787 19.8437 13.9073 19.8437 15.2282 19.7687C16.51 19.708 17.6453 19.4153 18.5807 18.4763C19.5161 17.5409 19.8089 16.4056 19.8731 15.1238C19.9481 13.8029 19.9481 9.84704 19.8731 8.52606ZM18.1665 16.5412C17.8881 17.241 17.349 17.7801 16.6456 18.0621C15.5924 18.4799 13.0932 18.3835 11.9294 18.3835C10.7655 18.3835 8.26272 18.4763 7.21307 18.0621C6.51331 17.7837 5.9742 17.2446 5.69215 16.5412C5.27444 15.488 5.37083 12.9888 5.37083 11.825C5.37083 10.6611 5.27801 8.15832 5.69215 7.10867C5.97063 6.40891 6.50974 5.8698 7.21307 5.58775C8.26629 5.17004 10.7655 5.26643 11.9294 5.26643C13.0932 5.26643 15.596 5.17361 16.6456 5.58775C17.3454 5.86623 17.8845 6.40534 18.1665 7.10867C18.5843 8.16189 18.4879 10.6611 18.4879 11.825C18.4879 12.9888 18.5843 15.4916 18.1665 16.5412Z"
                                               fill="currentColor" />
                                       </svg>
                                   </a>
                               </div>
                           </div>
                       </div>
   
                       <div class="mt-8 lg:w-1/2 lg:mx-6">
                           <div
                               class="w-full px-8 py-10 mx-auto overflow-hidden bg-white shadow-2xl rounded-xl dark:bg-gray-900 lg:max-w-xl">
                               <h1 class="text-xl font-medium text-gray-700 dark:text-gray-200" data-aos="flip-left">
                                   {{ t('contactForm') }}</h1>
   
                               <p class="mt-2 text-gray-500 dark:text-gray-400" data-aos="flip-left">
                                   {{ t('askUs') }}
                               </p>
   
                               <form @submit.prevent="handleSubmit" class="mt-6" data-aos="flip-left">
                                   <div class="flex-1" data-aos="flip-left">
                                       <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">{{ t('fullName') }}</label>
                                       <input v-model="formData.fullName" type="text" placeholder=""
                                           class="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                   </div>
   
                                   <div class="flex-1 mt-6" data-aos="flip-left">
                                       <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">{{ t('emailAddress') }}</label>
                                       <input v-model="formData.email" type="email" placeholder=""
                                           class="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                   </div>
   
                                   <div class="flex-1 mt-6" data-aos="flip-left">
                                       <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">{{ t('phoneNumber') }}</label>
                                       <input v-model="formData.phone" type="tel" placeholder=""
                                           class="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                   </div>
   
                                   <div class="w-full mt-6" data-aos="flip-left">
                                       <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">{{ t('message') }}</label>
                                       <textarea v-model="formData.message"
                                           class="block w-full h-32 px-5 py-3 resize-none mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                           placeholder=""></textarea>
                                   </div>
   
                                   <div class="mt-8 flex justify-end" data-aos="flip-left">
                                       <button type="submit" :disabled="!isFormEmpty || processing"
                                           class="rounded-md bg-indigo-600 disabled:cursor-not-allowed disabled:opacity-25 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                           {{ processing ? t('processing') : t('sendMessage') }}</button>
                                   </div>
                               </form>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </section>
       <CoreBaseModal :show="showModal" @update:show="showModal = $event">
           <section class="max-w-2xl px-3 py-6 mx-auto">
               <main class="mt-8 space-y-6">
                   <img class="object-cover w-full h-56 rounded-lg md:h-72"
                       src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                       alt="">
   
                   <h2 class="mt-6 text-gray-800 font-semibold text-lg">{{ t('hello') }} {{
                                   capitalizeFirstLetter(formData.fullName) }},</h2>
   
                   <p class="mt-2 leading-loose text-gray-800 text-sm">
                       {{ t('thankYouMessage') }}
                   </p>
   
                   <p class="mt-2 text-gray-800 text-sm">
                       {{ t('bestRegards') }} <br>
                       {{ t('theSafeMomTeam') }}
                   </p>
               </main>
           </section>
       </CoreBaseModal>
    </main>
   </template>
   
   <script setup lang="ts">
   import { useI18n } from 'vue-i18n'
   const { t } = useI18n()
   
   const processing = ref(false)
   const formData = ref({
       fullName: '',
       email: '',
       phone: '',
       message: ''
   });
   
   const handleSubmit = async () => {
       processing.value = true
       const url = 'https://safemom-contact-form.onrender.com/api/auth/signup';
       try {
           const response = await fetch(url, {
               method: 'POST',
               headers: {
                   'Content-Type': 'application/json'
               },
               body: JSON.stringify(formData.value)
           });
   
           if (!response.ok) {
               throw new Error('Network response was not ok.');
           }
   
           await response.json();
           showModal.value = true
           formData.value.fullName = ''
           formData.value.phone = ''
           formData.value.email = ''
           formData.value.message = ''
       } catch (error) {
           if (process.client) {
               useNuxtApp().$toast('Error submitting form');
           }
       } finally {
           processing.value = false
       }
   }
   
   const isFormEmpty = computed(() => {
       return !!(formData.value.fullName && formData.value.email, formData.value.phone && formData.value.message)
   })
   
   const capitalizeFirstLetter = (string: string) => {
       if (!string) return string; // Handle null, undefined, or empty string
       return string.charAt(0).toUpperCase() + string.slice(1);
   }
   
   const showModal = ref(false);
   </script>
   