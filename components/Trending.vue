<template>
  <section class="relative py-[200px] overflow-hidden">
    <img
      class="absolute w-[200%] top-[50%] right-0 transform -translate-y-[50%]"
      src="~/assets/images/trend-bg.svg"
      alt=""
    />

    <div class="container px-0">
      <TrendingSlider />
      <div class="flex">
        <!-- <TrendingCard
          tag="Postermywall music records"
          number="01"
          imageName="t-cover-1"
          altText="Trending Cover"
          title="Electronic"
          desc="Ken Adams Mixtape"
        /> -->
        <!-- <TrendingCard
          tag="Postermywall music records"
          number="02"
          imageName="t-cover-2"
          altText="Trending Cover"
          title="Kid Cudi"
          desc="Man on the Moon: The End of Day"
        />
        <TrendingCard
          tag="Postermywall music records"
          number="03"
          imageName="t-cover-3"
          altText="Trending Cover"
          title="Beach House"
          desc="Seven"
        />
        <TrendingCard
          tag="Postermywall music records"
          number="04"
          imageName="t-cover-4"
          altText="Trending Cover"
          title="Tangerine dream"
          desc="Rubycon"
        /> -->
      </div>
    </div>
  </section>
</template>

<script>
import TrendingCard from "./microComponents/TrendingCard.vue";
import TrendingSlider from "./microComponents/TrendingSlider.vue";

export default {
  name: "Trending",
  components: { TrendingCard, TrendingSlider },
};
</script>

