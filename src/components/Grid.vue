<template>
  <div class="grid">
    <div class="inner">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "Grid"
};
</script>

<style lang="scss">
.grid {
  margin: auto;
  flex: 2 2;
  height: 100%;
  // padding: 5% 9% 7% 13%;
  // padding: 8% 8% 8% 16%;
  padding: 6% 7% 6% 13%; // Full HD
  .inner {
    height: 100%;
    overflow: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-flow: column wrap;
  }
}
</style>
