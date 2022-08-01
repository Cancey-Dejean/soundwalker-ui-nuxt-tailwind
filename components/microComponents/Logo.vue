<template>
  <img class="" :src="imageSource" :alt="imageName" />
</template>

<script>
export default {
  name: "Logo",
  props: {
    imageName: String,
  },
  computed: {
    imageSource() {
      return require(`~/assets/images/${this.imageName}.svg`);
    },
  },
};
</script>
