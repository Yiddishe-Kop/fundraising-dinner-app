<template>
  <main>
    <div class="total-raised">
      <div class="amount">₪{{$store.state.amountRaised}}</div>
      <div class="total">of ₪{{$store.state.targetAmount}}</div>
      <span class="percent">{{$store.getters.percentageRaised}}%</span>
    </div>
    <controls />
    <panel title="Donors List">
      <ul>
        <li v-for="(name, i) in $store.state.names" :key="name + i">
          <div>
            <span class="text-xs text-gray-500">{{i + 1}}</span>
            <span class="ml-2">{{name}}</span>
          </div>
          <button @click="$store.commit('removeName', i)">-</button>
        </li>
      </ul>
    </panel>
  </main>
</template>

<script>
import Controls from "./components/Controls";
import Panel from "./components/Panel";

export default {
  name: "Admin",
  components: { Controls, Panel }
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

li {
  color: var(--dark);
  user-select: none;
  @apply flex justify-between align-baseline bg-gray-300 font-bold text-left py-1 px-3 mb-1 rounded;
  button {
    @apply bg-red-300 text-gray-100 font-bold px-3 rounded-full;
    &:hover {
      @apply bg-red-700;
    }
  }
  &:hover {
    transform: scale(1.05);
  }
}
</style>
