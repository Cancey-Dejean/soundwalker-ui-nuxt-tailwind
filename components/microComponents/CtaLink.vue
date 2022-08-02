<template>
  <NuxtLink
    :to="href"
    class="
      inline-block
      font-title
      text-[32px]
      italic
      tracking-[1px]
      uppercase
      text-title
    "
    >{{ text }}</NuxtLink
  >
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
