<template>
  <div>
    <div v-if="showOverlay" class="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
      <p class="text-white text-2xl font-mono" v-html="displayedText"></p>
    </div>
    <NuxtPage />
    <div class="fixed bottom-1 left-0 m-4 z-50">
      <a href="https://wa.me/+2348128375404" target="_blank">
        <img src="@/assets/icons/whatsapp.svg" class="h-14 w-14" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "✨ Welcome to Safe Mom ✨",
      displayedText: "",
      showOverlay: true,
    };
  },
  methods: {
    typeText() {
      let i = 0;
      const typingInterval = setInterval(() => {
        if (i < this.text.length) {
          this.displayedText += this.text.charAt(i);
          i++;
        } else {
          clearInterval(typingInterval);
          // Fade out overlay and show the page content
          setTimeout(() => {
            this.showOverlay = false;
          }, 1000); // Adjust delay as needed
        }
      }, 150); // Adjust typing speed as needed
    },
  },
  mounted() {
    this.typeText();
  },
};
</script>

<style scoped>
/* You can adjust styles as needed */
</style>
