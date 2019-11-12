<template>
  <div class="grid">
    <slot />
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
  overflow: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: column wrap;
  // padding: 8% 9% 10% 16%;
  padding: 5% 9% 7% 13%; // Full HD
}
</style>
