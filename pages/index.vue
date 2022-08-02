<template>
  <main>
    <Hero imageName="hero" />
    <Highlight />
  </main>
</template>

<script>
import Hero from "../components/Hero.vue";
import Highlight from "../components/Highlight.vue";

export default {
  components: { Hero, Highlight },
};
</script>

<style>
</style>
