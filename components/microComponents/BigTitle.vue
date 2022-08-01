<template>
  <h3 class="text-[104px] text-title font-title uppercase italic">
    {{ title }}
  </h3>
</template>

<script>
export default {
  name: "BigTitle",
  props: {
    title: String,
  },
};
</script>
