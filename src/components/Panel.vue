<template>
  <div class="panel">
    <div class="card">
      <h2>{{title}}</h2>
      <div class="form">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Panel",
  props: ["title"]
};
</script>

<style lang="scss">
.panel {
  padding: 8px;
  .card {
    max-width: 500px;
    @apply m-10 mt-16 mx-auto p-5 rounded bg-gray-100 shadow;
    .form {
      @apply p-4;
    }
  }
}
</style>
