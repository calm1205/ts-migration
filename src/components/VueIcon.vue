<template>
  <a class="vue-icon" href="https://vuejs.org/" target="_blank">
    <img src="@/assets/vue.svg" class="logo vue" alt="Vue logo" />
  </a>
</template>

<script>
export default {
  name: "VueIcon",
}
</script>

<style scoped>
.vue-icon {
  display: block;
  width: 100%;
}
.logo {
  width: 100%;
  will-change: filter;
  transition: filter 300ms;
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
