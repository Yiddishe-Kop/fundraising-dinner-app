<template>
  <main>
    <img class="shul" src="./assets/shul 2.png" ref="shul" />
    <grid :style="gridStyle">
      <chair
        v-for="chair in $store.state.numOfChairs"
        :active="chair <= $store.getters.chairsSponsored"
        :size="$store.state.chairSize"
        :key="chair"
      />
    </grid>
  </main>
</template>

<script>
import Grid from "./components/Grid";
import Chair from "./components/Chair";

export default {
  name: "Screen",
  components: { Grid, Chair },
  data() {
    return {
      gridStyle: {
        width: ""
      }
    };
  },
  created() {
    this.$store.watch(
      (state, getters) => getters.fullChairsSponsored,
      (newValue, oldValue) => {
        console.log(`Updating from ${oldValue} to ${newValue}`);
        this.$store.commit("showModal");
      }
    );
  },
  mounted() {
    setTimeout(() => {
      let shulWidth = this.$refs.shul.offsetWidth;
      let shulHeight = this.$refs.shul.offsetHeight;
      this.gridStyle = {
        width: `${shulWidth}px`,
        height: `${shulHeight}px`
      };
    }, 1000);
  }
};
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

$padding-top: 6rem;
$padding: 4rem;

main {
  padding: $padding;
  padding-top: $padding-top;
  @apply relative bg-gray-400;
  img.shul {
    z-index: 1;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 4rem;
    right: 4rem;
    height: calc(100% - #{$padding * 1.5} - #{$padding-top});
    // width: 100%;
  }
}
</style>
