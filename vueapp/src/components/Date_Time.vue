<template>
  <div>
    <h1>Hour</h1>
    <p>{{ $store.state.hour }}</p>
    <p>{{ $store.state.date }} </p>
  </div>
</template>

<script>
export default {
  created() {
    setInterval(() => this.$store.commit("getHour"), 1000);
  },
};
</script>

