<template>
  <div id="app">
    <banner :num="$store.getters.fullChairsSponsored" :total="$store.state.numOfChairs" />
    <router-view></router-view>
    <transition name="fade">
      <modal v-if="$store.state.showModal"></modal>
    </transition>
    <carousel :names="$store.state.names" />
    <footer>
      <router-link
        :to="$route.path == '/' ? '/admin' : '/'"
      >{{$route.path == '/' ? 'Control Panel' : 'Home'}}</router-link>
    </footer>
  </div>
</template>

<script>
import Banner from "./components/Banner";
import Carousel from "./components/Carousel";
import Modal from "./components/Modal";

export default {
  name: "App",
  components: { Banner, Carousel, Modal },
  mounted() {
    // console.log(this.$route);
  }
};
</script>

<style lang="scss">
main {
  flex: 2 2;
  overflow: auto;
}
footer {
  background-color: var(--dark);
  padding: 8px;
  min-height: 40px;
}
</style>
