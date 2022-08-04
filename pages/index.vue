<template>
  <main class="relative">
    <Hero imageName="hero" />
    <Highlight />
    <Trending />
  </main>
</template>

<script>
import Hero from "../components/Hero.vue";
import Highlight from "../components/Highlight.vue";
import Trending from "../components/Trending.vue";

export default {
  components: { Hero, Highlight, Trending },
};
</script>

<style>
</style>
