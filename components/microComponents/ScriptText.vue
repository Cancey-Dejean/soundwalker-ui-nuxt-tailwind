<template>
  <p class="font-cursive text-[25px] text-primary">{{ text }}</p>
</template>

<script>
export default {
  name: "ScriptText",
  props: {
    text: String,
  },
};
</script>
