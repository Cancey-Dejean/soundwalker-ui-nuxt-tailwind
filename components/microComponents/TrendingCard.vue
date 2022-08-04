<template>
  <div
    class="
      group
      relative
      flex flex-col
      pt-[50px]
      pl-[60px]
      bg-card-hover
      bg-[length:0_100%]
      hover:bg-[length:100%_100%]
      bg-no-repeat
      transition-all
      duration-[.6s]
      overflow-hidden
    "
  >
    <div class="relative z-[2]">
      <!-- Top -->
      <div class="relative z-[2] flex gap-x-[30px]">
        <div class="relative w-[50%]">
          <p
            class="absolute top-[33px] left-0 text-[12px] uppercase text-title"
          >
            {{ tag }}
          </p>
          <div
            class="text-[314px] leading-[1] font-title text-primary opacity-16"
          >
            {{ number }}
          </div>
        </div>

        <div class="relative overflow-hidden">
          <img
            class="w-[55%] h-full object-cover object-left ml-auto"
            :src="imageSource"
            loading="lazy"
            :alt="altText"
          />
        </div>
      </div>

      <!-- Text -->
      <div class="relative z-[2]">
        <h4>{{ title }}</h4>
        <p>{{ desc }}</p>
      </div>

      <!-- PlayShare -->
      <div
        class="relative z-[2] flex items-center justify-between gap-x-[30px]"
      >
        <button
          type="button"
          class="flex items-center gap-x-[15px] max-w-[65px]"
        >
          Listen <img src="~/assets/images/trend-play.svg" alt="" />
        </button>

        <a href="#">Share</a>
      </div>
    </div>

    <div
      class="
        absolute
        bottom-0
        left-0
        z-[2]
        h-[3px]
        bg-primary
        max-w-[417px]
        w-full
      "
    ></div>
  </div>
</template>

<script>
export default {
  name: "TrendingCard",
  props: {
    tag: String,
    number: String,
    imageName: String,
    altText: String,
    title: String,
    desc: String,
  },

  computed: {
    imageSource() {
      return require(`~/assets/images/${this.imageName}.png`);
    },
  },
};
</script>
