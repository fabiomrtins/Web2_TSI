<template>
    <h1>Stopwatch</h1>
    <p>
      <button @click="resetStopwatch">Reset</button>
      {{ $store.state.minutes }}:{{ $store.state.seconds }}:{{ $store.state.ms }}
      <button v-if="this.isCounting == false" @click="startStopwatch">Start</button>
      <button v-if="this.isCounting == true" @click="stopStopwatch">Stop</button>
    </p>
</template>
<script>
export default {
  data() {
    return {
      secondsInterval: "",
      minutesInterval: "",
      milliSecondsInterval: "",
      isCounting: false,
    };
  },
  methods: {
    startStopwatch() {
      if (this.isCounting) {
        return;
      }
      this.isCounting = true;
      this.minutesInterval = setInterval(() => this.$store.commit("startMinutesCount"), 60000);
      this.secondsInterval = setInterval(() => this.$store.commit("startSecondsCount"), 1000);
      this.milliSecondsInterval = setInterval(() => this.$store.commit("startMillisecondsCount"), 10);
    },
    stopStopwatch() {
      this.isCounting = false;
      clearInterval(this.minutesInterval);
      clearInterval(this.secondsInterval);
      clearInterval(this.milliSecondsInterval);
    },
    resetStopwatch() {
      clearInterval(this.minutesInterval);
      clearInterval(this.secondsInterval);
      clearInterval(this.milliSecondsInterval);
      this.isCounting = false;
      this.$store.commit("resetTime");
    },
  },
};
</script>
