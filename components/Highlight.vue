<template>
  <section>
    <div class="container px-0">
      <div class="grid grid-cols-2">
        <HighlightCard
          tag="TOP ECLECTIC Sounds"
          title="Next Equinox Surfer"
          cursive="How to manage"
          imageName="cd-cover-2"
          altText="CD cover"
        />

        <HighlightCard
          tag="Top 20 on Soundwalker"
          title="Massive Attack revival"
          cursive="Future Proof"
          imageName="cd-cover-1"
          altText="CD image"
        />
      </div>
    </div>
  </section>
</template>

<script>
import HighlightCard from "./microComponents/HighlightCard.vue";
export default {
  name: "Highlight",
  components: { HighlightCard },
};
</script>
