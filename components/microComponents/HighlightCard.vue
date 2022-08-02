<template>
  <div
    class="
      relative
      flex
      bg-card-hover
      bg-[length:0_100%]
      hover:bg-[length:100%_100%]
      bg-no-repeat
      transition-all
      duration-[.6s]
    "
  >
    <div class="relative z-[2]">{{ tag }}</div>

    <div class="relative z-[2]">
      <h3>{{ title }}</h3>
      <ScriptText :text="cursive" />
    </div>

    <div
      class="
        relative
        flex-1
        transiton-all
        duration-[.2s]
        delay-[.3s]
        ease-in-out
      "
    >
      <img
        class="absolute z-[2] right-0 cd__inner"
        src="~/assets/images/cd.png"
        loading="lazy"
        alt="CD image"
      />
      <img
        class="relative z-[2] ml-auto"
        :src="imageSource"
        loading="lazy"
        :alt="altText"
      />
    </div>
    <!-- <div
      class="
        absolute
        z-[1]
        bg-[#fff]
        transition-all
        duration-[.8s]
        ease-in
        left-0
        h-full
        w-0
        group-hover:left-0 group-hover:w-full
      "
    ></div> -->
  </div>
</template>

<script>
import ScriptText from "./ScriptText.vue";
export default {
  name: "HighlightCard",
  props: {
    tag: String,
    title: String,
    cursive: String,
    imageName: String,
    altText: String,
  },
  components: { ScriptText },
  computed: {
    imageSource() {
      return require(`~/assets/images/${this.imageName}.png`);
    },
  },
};
</script>
