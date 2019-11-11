<template>
  <main>
    <div class="total-raised">
      <div class="amount">₪{{$store.state.amountRaised}}</div>
      <div class="total">of ₪{{$store.state.targetAmount}}</div>
      <span class="percent">{{$store.getters.percentageRaised}}%</span>
    </div>
    <div class="controls">
      <div class="card">
        <h2>Control Panel</h2>
        <div class="form">
          <div class="row">
            <label>Target Fundraising Amount (ILS)</label>
            <input
              type="number"
              @change="e => $store.commit('updateTargetAmount', e.target.value)"
              :value="$store.state.targetAmount"
              style="width: 100px"
            />
          </div>
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
              @keyup.enter="e => addDonation(e.target.value)"
              v-model="donation"
              placeholder="Amount"
            />
          </div>
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
      name: "",
      donation: ""
    };
  },
  methods: {
    addName(name) {
      this.$store.commit("addName", name);
      this.name = "";
    },
    addDonation(num) {
      this.$store.commit("addDonation", num);
      this.donation = "";
    }
  }
};
</script>

<style lang="scss">
.total-raised {
  @apply inline-block m-3 mx-auto px-6 py-3 rounded bg-gray-100 shadow;
  .amount {
    @apply text-4xl font-extrabold text-green-600;
  }
  .total {
    @apply text-gray-600 text-right;
  }
  .percent {
    @apply px-2 font-bold bg-green-200 text-green-700 rounded mt-2 inline-block;
  }
}
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
