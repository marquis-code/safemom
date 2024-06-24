<template>
  <footer class="bg-gray-900" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">{{ t('footerHeading') }}</h2>
    <div class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
      <div class="xl:grid xl:grid-cols-3 xl:gap-8">
        <div class="space-y-8">
          <img class="h-20" src="@/assets/img/logo2.png" alt="Company name">
          <p class="text-sm leading-6 text-gray-300">{{ t('healthyMoms') }}</p>
          <div class="flex space-x-6">
            <a href="https://www.instagram.com/safemom_" class="text-gray-500 hover:text-gray-400">
              <span class="sr-only">{{ t('instagram') }}</span>
              <svg class="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11.9294 7.72275C9.65868 7.72275 7.82715 9.55428 7.82715 11.825C7.82715 14.0956 9.65868 15.9271 11.9294 15.9271C14.2 15.9271 16.0316 14.0956 16.0316 11.825C16.0316 9.55428 14.2 7.72275 11.9294 7.72275ZM11.9294 14.4919C10.462 14.4919 9.26239 13.2959 9.26239 11.825C9.26239 10.354 10.4584 9.15799 11.9294 9.15799C13.4003 9.15799 14.5963 10.354 14.5963 11.825C14.5963 13.2959 13.3967 14.4919 11.9294 14.4919ZM17.1562 7.55495C17.1562 8.08692 16.7277 8.51178 16.1994 8.51178C15.6674 8.51178 15.2425 8.08335 15.2425 7.55495C15.2425 7.02656 15.671 6.59813 16.1994 6.59813C16.7277 6.59813 17.1562 7.02656 17.1562 7.55495ZM19.8731 8.52606C19.8124 7.24434 19.5197 6.10901 18.5807 5.17361C17.6453 4.23821 16.51 3.94545 15.2282 3.88118C13.9073 3.80621 9.94787 3.80621 8.62689 3.88118C7.34874 3.94188 6.21341 4.23464 5.27444 5.17004C4.33547 6.10544 4.04628 7.24077 3.98201 8.52249C3.90704 9.84347 3.90704 13.8029 3.98201 15.1238C4.04271 16.4056 4.33547 17.5409 5.27444 18.4763C6.21341 19.4117 7.34517 19.7045 8.62689 19.7687C9.94787 19.8437 13.9073 19.8437 15.2282 19.7687C16.51 19.708 17.6453 19.4153 18.5807 18.4763C19.5161 17.5409 19.8089 16.4056 19.8731 15.1238C19.9481 13.8029 19.9481 9.84704 19.8731 8.52606ZM18.1665 16.5412C17.8881 17.241 17.349 17.7801 16.6456 18.0621C15.5924 18.4799 13.0932 18.3835 11.9294 18.3835C10.7655 18.3835 8.26272 18.4763 7.21307 18.0621C6.51331 17.7837 5.9742 17.2446 5.69215 16.5412C5.27444 15.488 5.37083 12.9888 5.37083 11.825C5.37083 10.6611 5.27801 8.15832 5.69215 7.10867C5.97063 6.40891 6.50974 5.8698 7.21307 5.58775C8.26629 5.17004 10.7655 5.26643 11.9294 5.26643C13.0932 5.26643 15.596 5.17361 16.6456 5.58775C17.3454 5.86623 17.8845 6.40534 18.1665 7.10867C18.5843 8.16189 18.4879 10.6611 18.4879 11.825C18.4879 12.9888 18.5843 15.4916 18.1665 16.5412Z"
                  fill="currentColor" />
              </svg>
            </a>
          </div>
        </div>
        <div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 class="text-sm font-semibold leading-6 text-white">{{ t('solutions') }}</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li>
                  <a href="#" class="text-sm leading-6 text-gray-300 hover:text-white">{{ t('marketing') }}</a>
                </li>
                <li>
                  <a href="#" class="text-sm leading-6 text-gray-300 hover:text-white">{{ t('analytics') }}</a>
                </li>
                <li>
                  <a href="#" class="text-sm leading-6 text-gray-300 hover:text-white">{{ t('commerce') }}</a>
                </li>
                <li>
                  <a href="#" class="text-sm leading-6 text-gray-300 hover:text-white">{{ t('insights') }}</a>
                </li>
              </ul>
            </div>
            <div class="mt-10 md:mt-0">
              <h3 class="text-sm font-semibold leading-6 text-white">{{ t('support') }}</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li>
                  <a href="#" class="text-sm leading-6 text-gray-300 hover:text-white">{{ t('pricing') }}</a>
                </li>
                <li>
                  <a href="#" class="text-sm leading-6 text-gray-300 hover:text-white">{{ t('documentation') }}</a>
                </li>
                <li>
                  <a href="#" class="text-sm leading-6 text-gray-300 hover:text-white">{{ t('guides') }}</a>
                </li>
                <li>
                  <a href="#" class="text-sm leading-6 text-gray-300 hover:text-white">{{ t('apiStatus') }}</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 class="text-sm font-semibold leading-6 text-white">{{ t('company') }}</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li>
                  <a href="#" class="text-sm leading-6 text-gray-300 hover:text-white">{{ t('about') }}</a>
                </li>
                <li>
                  <a href="#" class="text-sm leading-6 text-gray-300 hover:text-white">{{ t('blog') }}</a>
                </li>
                <li>
                  <a href="#" class="text-sm leading-6 text-gray-300 hover:text-white">{{ t('jobs') }}</a>
                </li>
                <li>
                  <a href="#" class="text-sm leading-6 text-gray-300 hover:text-white">{{ t('press') }}</a>
                </li>
                <li>
                  <a href="#" class="text-sm leading-6 text-gray-300 hover:text-white">{{ t('partners') }}</a>
                </li>
              </ul>
            </div>
            <div class="mt-10 md:mt-0">
              <h3 class="text-sm font-semibold leading-6 text-white">{{ t('legal') }}</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li>
                  <a href="#" class="text-sm leading-6 text-gray-300 hover:text-white">{{ t('claim') }}</a>
                </li>
                <li>
                  <a href="#" class="text-sm leading-6 text-gray-300 hover:text-white">{{ t('privacy') }}</a>
                </li>
                <li>
                  <a href="#" class="text-sm leading-6 text-gray-300 hover:text-white">{{ t('terms') }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
        <p class="text-xs leading-5 text-gray-400">&copy; 2020 SafeMom, Inc. {{ t('allRightsReserved') }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
