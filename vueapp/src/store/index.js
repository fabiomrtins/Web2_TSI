import { createStore } from 'vuex';

export default createStore({
  state: {
    date: new Date().toLocaleDateString(),
    hour: new Date().toLocaleTimeString(),
    minutes: 0,
    seconds: 0,
    ms: 0
  },
  mutations: {
    getHour(state){
     state.hour = new Date().toLocaleTimeString();
    },
    startMillisecondsCount(state){
     state.ms = state.ms + 1;
     if(state.ms > 99){
       state.ms = state.ms = 0;
     }
    },
    startMinutesCount(state){
     state.minutes = state.minutes + 1
    },
    startSecondsCount(state){
     state.seconds = state.seconds + 1;
     if(state.seconds > 59){
       state.seconds = 0;
     }
    },
    resetTime(state){
      state.minutes = 0;
      state.seconds = 0;
      state.ms = 0;
    }
  },
  actions: {
  },
  modules: {
  }
})


