<template>
  <div
    class="flex flex-col bg-black-light text-white max-h-96 min-h-112 w-full s:max-w-sm sm:w-96 sm:max-w-sm p-2 mb-2 rounded-sm sm:m-4"
  >
    <div class="flex justify-center items-baseline mb-2">
      <h1 class="flex mt-2 text-4xl">
        {{ msg ?? "To Do List" }}
        <svg
          viewBox="0 0 100 100"
          fill="white"
          class="flex justify-center items-center h-12 w-12"
        >
          <g>
            <path
              d="M34.869,8.709l0,-1.134c0,-1.611 0.64,-3.156 1.78,-4.296c1.139,-1.139 2.684,-1.779 4.296,-1.779l19.109,
        0c1.611,0 3.157,0.64 4.296,1.779c1.139,1.14 1.78,2.685 1.78,4.296l0,1.134l11.474,0c2.098,0 4.111,0.834 5.595,
        2.318c1.484,1.484 2.318,3.496 2.318,5.595l0,74.965c0,2.098 -0.834,4.111 -2.318,5.595c-1.484,1.484 -3.497,2.318 -5.595,
        2.318l-54.209,0c-2.099,0 -4.111,-0.834 -5.595,-2.318c-1.484,-1.484 -2.318,-3.497 -2.318,-5.595l0,-74.965c0,-2.099 0.834,
        -4.111 2.318,-5.595c1.484,-1.484 3.496,-2.318 5.595,-2.318l11.474,0Zm0,3.92l-11.474,0c-1.059,0 -2.075,0.421 -2.823,
        1.17c-0.749,0.749 -1.17,1.764 -1.17,2.823l0,74.965c0,1.059 0.421,2.074 1.17,2.823c0.748,0.749 1.764,1.17 2.823,1.17l54.209,0c1.059,0 2.074,-0.421 2.823,-1.17c0.749,-0.749 1.17,-1.764 1.17,-2.823l0,-74.965c0,-1.059 -0.421,-2.074 -1.17,-2.823c-0.749,-0.749 -1.764,-1.17 -2.823,-1.17l-11.474,0l0,0.137c0,2.165 -1.755,3.92 -3.92,3.92l-23.421,0c-2.165,0 -3.92,-1.755 -3.92,-3.92l0,-0.137Zm-2.694,66.038l5.257,-5.257c0.768,-0.768 2.014,-0.768 2.781,0c0.768,0.767 0.768,2.013 0,2.781l-6.647,6.648c-0.768,0.768 -2.014,0.768 -2.782,0l-2.824,-2.824c-0.767,-0.768 -0.767,-2.014 0,-2.782c0.768,-0.767 2.014,-0.767 2.782,0l1.433,1.434Zm13.531,1.917l27.235,0c1.082,0 1.96,-0.878 1.96,-1.96c0,-1.081 -0.878,-1.96 -1.96,-1.96l-27.235,0c-1.082,0 -1.96,0.879 -1.96,1.96c0,1.082 0.878,1.96 1.96,1.96Zm-13.531,-25.437l5.257,-5.257c0.768,-0.768 2.014,-0.768 2.781,0c0.768,0.767 0.768,2.013 0,2.781l-6.647,6.648c-0.768,0.768 -2.014,0.768 -2.782,-0l-2.824,-2.824c-0.767,-0.768 -0.767,-2.014 0,-2.782c0.768,-0.767 2.014,-0.767 2.782,0l1.433,1.434Zm13.531,1.917l27.235,0c1.082,0 1.96,-0.878 1.96,-1.96c0,-1.081 -0.878,-1.96 -1.96,-1.96l-27.235,0c-1.082,0 -1.96,0.879 -1.96,1.96c0,1.082 0.878,1.96 1.96,1.96Zm-13.511,-25.526l5.257,-5.257c0.768,-0.768 2.014,-0.768 2.782,0c0.767,0.767 0.767,2.014 0,2.781l-6.648,6.648c-0.768,0.768 -2.014,0.768 -2.782,0l-2.824,-2.824c-0.767,-0.767 -0.767,-2.014 0,-2.781c0.768,-0.768 2.014,-0.768 2.782,0l1.433,1.433Zm13.511,2.006l27.235,-0c1.082,-0 1.96,-0.878 1.96,-1.96c0,-1.081 -0.878,-1.96 -1.96,-1.96l-27.235,-0c-1.082,-0 -1.96,0.879 -1.96,1.96c0,1.082 0.878,1.96 1.96,1.96Zm16.504,-25.969c0,-0.571 -0.228,-1.12 -0.632,-1.524c-0.404,-0.404 -0.952,-0.631
         -1.524,-0.631l-19.109,-0c-0.572,-0 -1.12,0.227 -1.524,0.631c-0.405,0.404 -0.632,0.953 -0.632,1.524l0,5.191l23.421,-0l0,
         -5.191Z"
            />
          </g>
        </svg>
      </h1>
    </div>
    <div
      class="flex flex-col min-w-full overflow-y-auto overflow-x-visible"
      id="tasklist-container"
    >
      <ul>
        <p v-if="this.$store.state.taskList.length == 0">
          There are no tasks here yet.
        </p>
        <div
          class="flex flex-row items-center p-4 bg-black-grey min-w-full mb-2"
          v-for="(task, index) in this.$store.state.taskList"
          :key="index"
          :ref="task + index"
        >
          <li
            class="flex truncate whitespace-normal items-center min-w-full"
            :class="{ 'line-through': task.completed }"
          >
            <input
              type="checkbox"
              class="min-w-5 h-5 mx-1"
              :checked="task.completed"
              @click="strikeThrough(index)"
            />
            {{ task.text }}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 847 1058.75"
              shape-rendering="geometricPrecision"
              text-rendering="geometricPrecision"
              image-rendering="optimizeQuality"
              class="min-w-5 h-5 mx-2 place-self-end text-white fill-current ml-auto"
              @click="removeTask(index)"
            >
              <g transform="translate(0, 150)">
                <path
                  d="M19 88l69-69 335 336L759 19l68 69-335 335 335 336-68 68-336-335L88 827l-69-68 336-336z"
                />
              </g>
            </svg>
          </li>
        </div>
      </ul>
    </div>
    <div class="flex w-auto max mt-auto min-h-10">
      <input type="text" placeholder="Type your task here..." class="w-full text-black-light outline-none" v-model="form.text" />
      <button
        class="w-16 bg-black-grey text-white text-center text-xl outline-none border-2 border-black-grey hover:border-white z-10"
        @click="addTask"
      >
        +
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    msg: String,
  },
  data() {
    return {
      form: {
        text: "",
      },
    };
  },
  methods: {
    addTask() {
      if (this.form.text == 0) {
        return;
      }
      this.$store.commit("setList", {
        text: this.form.text,
        completed: false,
      });
      this.form.text = "";
    },
    removeTask(index) {
      this.$store.commit("changeList", index);
    },

    strikeThrough(index) {
      this.$store.commit("changeTaskStatus", index);
    },
  },
};
</script>
