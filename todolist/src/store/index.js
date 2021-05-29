import { createStore } from 'vuex'

export default createStore({
  state: {
    taskList: JSON.parse(localStorage.getItem("taskList")) ?? [],
  },
  mutations: {
    setList(state, formText){
      state.taskList.push(formText);
      localStorage.setItem("taskList", JSON.stringify(state.taskList));
    },
    changeTaskStatus(state, index){
      let task = state.taskList[index]
      task.completed = !task.completed
      localStorage.setItem("taskList", JSON.stringify(state.taskList));
    },
    changeList(state, index){
      state.taskList.splice(index, 1)
      localStorage.setItem("taskList", JSON.stringify(state.taskList));
    }
  },
  actions: {
  },
  modules: {
  }
})
