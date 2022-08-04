<template>
  <div
    class="
      group
      relative
      flex
      py-[60px]
      px-[80px]
      bg-card-hover
      bg-[length:0_100%]
      hover:bg-[length:100%_100%]
      bg-no-repeat
      transition-all
      duration-[.6s]
    "
  >
    <div class="relative z-[2]">
      <div
        class="
          absolute
          top-[60px]
          -left-[90px]
          transform
          -rotate-90
          z-[2]
          uppercase
          text-[12px]
        "
      >
        {{ tag }}
      </div>
      <div class="px-[75px]">
        <h3
          class="
            uppercase
            font-title
            italic
            text-[72px] text-title
            max-w-[246px]
            leading-[.9em]
            mb-[20px]
          "
        >
          {{ title }}
        </h3>

        <ScriptText :text="cursive" />
      </div>
    </div>

    <div class="relative flex-1 transiton-all duration-[.2s] ease-in-out">
      <img
        class="
          absolute
          z-[2]
          right-0
          transform
          rotate-0
          transition-all
          duration-[.8s]
          ease-in-out
          group-hover:right-[130px] group-hover:rotate-[-180deg]
        "
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
