<template>
  <img class="chair" :class="{ active }" :style="style" src="../assets/chair big.svg" />
</template>

<script>
export default {
  name: "Chair",
  props: ["active", "size"],
  computed: {
    style() {
      return {
        width: `${this.size}px`
      };
    }
  }
};
</script>

<style lang="scss">
.chair {
  width: 60px;
  opacity: 0.3;
  margin: 10px;
  z-index: 2;
  cursor: pointer;
  transition: all 0.3s ease-in;
  &.active {
    opacity: 1;
  }
  &:hover {
    transform: scale(1.15);
    opacity: 0.6;
    &.active {
      opacity: 1;
    }
  }
}
</style>
