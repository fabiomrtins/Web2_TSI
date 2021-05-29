<template>
  <div
    class="h-auto min-h-screen w-screen bg-purple-dark flex flex-col justify-center items-center md:h-screen md:bg-purple-dark md:flex md:flex-col md:items-center"
  >
    <div class="text-white">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <div class="flex w-auto justify-center items-center">
      <h1 class="text-7xl text-white mt-8 mb-8">Check it</h1>
      <svg viewBox="0 0 40 25" class="w-10 h-10" transform="translate(5,25)">
        <g>
          <path fill="#FFFFFF" d="M0,0v20h20V0H0z M18,18H2V2h16V18z" />
          <polygon
            fill="#FFFFFF"
            points="16,7.1 14.6,5.6 8,12.2 5.4,9.7 4,11.1 8,15.1  "
          />
        </g>
      </svg>
    </div>
    <router-view />
  </div>
  <!-- <List />
    <Home /> -->
</template>

// <script>
// import Home from "@/views/Home.vue";
// import List from "@/components/List.vue";

// export default {
//   components: {
//     Home,
//     List,
//   },
// };
//
</script>
