<template>
  <NuxtLink :to="href">{{ text }}</NuxtLink>
</template>

<script>
export default {
  name: "Cta",
  props: {
    href: String,
    text: String,
  },
};
</script>
