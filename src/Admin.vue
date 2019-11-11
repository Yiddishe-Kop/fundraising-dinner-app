<template>
  <main>
    <div class="controls">
      <div class="card">
        <h2>Control Panel</h2>
        <div class="form">
          <div class="row">
            <label>Number of chairs</label>
            <input
              type="number"
              @change="e => $store.commit('updateNumOfChairs', e.target.value)"
              :value="$store.state.numOfChairs"
              style="width: 60px"
            />
          </div>
          <div class="row">
            <label>Chair Size</label>
            <input
              type="number"
              @change="e => $store.commit('updatechairSize', e.target.value)"
              :value="$store.state.chairSize"
              style="width: 60px"
            />
          </div>
          <div class="row">
            <label>Add a Name</label>
            <input
              type="text"
              @keyup.enter="e => addName(e.target.value)"
              v-model="name"
              placeholder="Name"
            />
          </div>
          <div class="row">
            <label>Add Donation</label>
            <input
              type="number"
              @keyup.enter="e => addName(e.target.value)"
              v-model="name"
              placeholder="Amount"
            />
          </div>

          <button @click="$store.commit('add')" class="control">+</button>
          <button @click="$store.commit('remove')" class="control">-</button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Admin",
  data() {
    return {
      name: ""
    };
  },
  methods: {
    addName(name) {
      this.$store.commit("addName", name);
      this.name = "";
    }
  }
};
</script>

<style lang="scss">
.controls {
  padding: 8px;
  height: 100%;
  .card {
    max-width: 500px;
    @apply m-10 mt-16 mx-auto p-5 rounded bg-gray-100 shadow;
    .form {
      @apply p-4;
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
    }
  }
}
</style>
