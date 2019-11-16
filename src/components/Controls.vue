<template>
  <panel title="Control Panel">
    <controls-row
      label="Target Fundraising Amount (ILS)"
      type="number"
      :value="$store.state.targetAmount"
      @change="e => $store.commit('updateTargetAmount', e.target.value)"
    />
    <controls-row
      label="Number of chairs"
      type="number"
      :value="$store.state.numOfChairs"
      @change="e => $store.commit('updateNumOfChairs', e.target.value)"
    />
    <controls-row
      label="Chair Size"
      type="number"
      :value="$store.state.chairSize"
      @change="e => $store.commit('updatechairSize', e.target.value)"
    />
    <controls-row
      label="Add a Donor"
      type="text"
      :value="name"
      @change="e => name = e.target.value"
      @enter="e => addName(e.target.value)"
    />
    <controls-row
      label="Add a Donation"
      type="number"
      :value="donation"
      @change="e => donation = e.target.value"
      @enter="e => addDonation(e.target.value)"
    />
  </panel>
</template>

<script>
import Panel from "./Panel";
import ControlsRow from "./ControlsRow";

export default {
  name: "Controls",
  components: { Panel, ControlsRow },
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
</style>
