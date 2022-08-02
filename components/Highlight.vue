<template>
  <section>
    <div class="container">
      <div class="grid grid-cols-2">
        <HighlightCard
          tag="TOP ECLECTIC Sounds"
          title="Next Equinox Surfer"
          cursive="How to menage"
          imageName="cd-cover-1"
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
