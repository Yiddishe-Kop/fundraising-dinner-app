<template>
  <div class="row">
    <label :for="label">{{label}}</label>
    <input
      :type="type"
      :value="value"
      style="width: 100px"
      :id="label"
      @change="e => $emit('change', e)"
      @keyup.enter="e => $emit('enter', e)"
    />
  </div>
</template>

<script>
export default {
  name: "ControlsRow",
  props: ["label", "type", "value"]
};
</script>

<style lang="scss">
.row {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  @apply mb-5;
  label {
    flex: 1 0 200px;
    @apply text-left;
  }
}
</style>
