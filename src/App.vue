<script setup>
import Navbar from "./components/Navbar.vue";
import Splash from "./components/Splash.vue";
import About from "./components/About.vue";
import Portfolio from "./components/Portfolio.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <Navbar />
  <Splash />
  <About />
  <Portfolio />
  <Footer />
</template>
˜
<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
