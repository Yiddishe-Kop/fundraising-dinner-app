<template>
  <div class="banner">
    <img src="../assets/logo.png" class="logo" />
    <div class="title">
      <h1 class="count">
        <span>{{num}}</span>
        /{{total}}
      </h1>
      <h2>chair sponsorships pledged</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  props: ["num", "total"]
};
</script>

<style lang="scss">
.banner {
  background-image: url("../assets/banner.png");
  background-size: cover;
  @apply flex py-2 px-10 text-gray-300 font-extrabold text-center;

  .logo {
    height: 250px;
    margin-bottom: -100px;
    position: relative;
    top: 30px;
    z-index: 10;
  }
  .title {
    white-space: nowrap;
    align-items: center;
    @apply flex ml-12;
    .count {
      font-size: 140px;
      font-weight: 400;
      span {
        font-weight: 700;
        color: var(--brand);
      }
    }
    h2 {
      font-size: 22px;
      text-transform: uppercase;
      width: 50px;
      color: var(--brand);
      white-space: normal;
      @apply ml-4 border-0;
    }
  }
}
</style>
