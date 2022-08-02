<template>
  <section class="relative h-[800px] flex flex-col justify-end overflow-hidden">
    <Header />
    <img
      class="absolute object-cover w-full h-full object-center"
      :src="imageSource"
      :alt="imageName"
    />

    <h2
      class="
        font-title
        text-primary
        opacity-16
        tracking-[40px]
        text-[650px]
        uppercase
        absolute
        pt-[200px]
        top-[50%]
        left-[50%]
        transform
        -translate-x-[50%] -translate-y-[50%]
      "
    >
      SOUNDwalker
    </h2>
    <div class="container relative pb-[180px]">
      <div class="max-w-[700px]">
        <BigTitle title="Connect on Soundwalker" />

        <p class="max-w-[500px] mb-[43px]">
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
