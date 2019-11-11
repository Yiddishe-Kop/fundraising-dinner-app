<template>
  <div class="overlay">
    <div @animationend="animateOut" class="modal animated zoomInRight">
      <chair :active="true" style="width: 100%;" />
      <slot />
    </div>
  </div>
</template>

<script>
import Chair from "./Chair";

export default {
  name: "Modal",
  components: { Chair },
  methods: {
    animateOut(e) {
      e.target.style.display = "flex";
      setTimeout(() => {
        e.target.classList.remove("zoomInRight");
        e.target.classList.add("zoomOutLeft");

        setTimeout(() => {
          e.target.classList.remove("zoomOutLeft");
          e.target.style.display = "none";
          this.$store.commit("closeModal");
        }, 1000);
      }, 500);
    }
  }
};
</script>

<style lang="scss">
.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: hsla(210, 17%, 60%, 0.55);
  z-index: 999;
  @apply flex items-center justify-center;
  .modal {
    width: 50%;
    height: 50%;
    animation-duration: 1s;
    @apply flex items-center justify-center;
  }
}
</style>
