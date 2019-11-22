<template>
  <marquee-text class="carousel" :repeat="repeat" :duration="speed" :key="names[names.length-1]">
    <span v-for="(name, i) in names" :key="name + i" class="name">{{name}}</span>
  </marquee-text>
</template>

<script>
export default {
  name: "Carousel",
  props: ["names"],
  computed: {
    speed() {
      let len = this.names.length;
      if (len < 6) {
        return 10;
      } else if (len < 35) {
        return 20;
      } else {
        return 40;
      }
    },
    repeat() {
      let len = this.names.length;
      if (len < 5) {
        return 4;
      } else if (len < 10) {
        return 2;
      } else {
        return 1;
      }
    }
  }
};
</script>

<style lang="scss">
.carousel {
  user-select: none;
  background-color: var(--brand);
  color: var(--dark);
  @apply px-5 py-3 text-2xl font-bold text-left;
  span.name {
    color: var(--dark);
    background-color: var(--dark);
    @apply mx-2 py-1 px-3 rounded text-gray-300;
  }
}
</style>
