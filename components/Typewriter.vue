<template>
  <div class="typewriter-wrapper" v-if="showTypewriter">
    <div class="typewriter-text overflow-hidden border-r-2 border-gray-900 whitespace-nowrap" v-html="displayedText">
    </div>
  </div>
  <div v-else>
    <!-- The rest of your page content goes here -->
    <p>Now showing the rest of the content.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "Welcome to Safe Mum",
      displayedText: "",
      showTypewriter: true,
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
          // Wait a bit before showing the rest of the content
          setTimeout(() => {
            this.showTypewriter = false;
          }, 1000); // Adjust this delay as needed
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
.typewriter-wrapper {
  max-width: max-content;
  margin: auto;
  padding: 1rem;
  font-family: monospace;
  font-size: 1.25rem;
}

.typewriter-text {
  animation: typewriter 4s steps(30) 1s forwards,
    blinkCursor 750ms steps(30) infinite;
}
</style>
