<template>
  <section class="relative h-[800px] flex flex-col justify-center">
    <Header />
    <img
      class="absolute object-cover w-full h-full object-center"
      :src="imageSource"
      :alt="imageName"
    />
    <div class="container relative">
      <div class="max-w-[700px]">
        <BigTitle title="Connect on Soundwalker" />

        <p class="max-w-[500px]">
          Discover, stream, and share a constantly expanding mix of music from
          emerging and major electronic artists around the world.
        </p>

        <CtaLink href="/sign-up" text="Sign Up" />

        <ScriptText text="for Free" />
      </div>
    </div>
  </section>
</template>

<script>
import BigTitle from "./microComponents/BigTitle.vue";
import CtaLink from "./microComponents/CtaLink.vue";
import ScriptText from "./microComponents/ScriptText.vue";
import Header from "./Header.vue";
export default {
  name: "Hero",
  props: {
    imageName: String,
  },
  components: { BigTitle, CtaLink, ScriptText, Header },
  computed: {
    imageSource() {
      return require(`~/assets/images/${this.imageName}.jpg`);
    },
  },
};
</script>
