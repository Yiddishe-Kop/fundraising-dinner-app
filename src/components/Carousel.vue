<template>
  <marquee-text class="carousel" :repeat="4" :duration="10">{{formattedNames}}</marquee-text>
</template>

<script>
export default {
  name: "Carousel",
  props: ["names"],
  computed: {
    formattedNames() {
      if (this.names.length === 0) return " ";
      return this.names.join(" - ") + " - ";
    }
  }
};
</script>

<style lang="scss">
.carousel {
  background-color: var(--brand);
  color: var(--dark);
  @apply px-5 py-3 text-lg font-bold text-left;
  span {
    @apply mx-2;
  }
}
</style>
