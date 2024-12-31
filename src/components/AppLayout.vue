<template>
  <div class="app-layout">
    <div class="sidebar">
      <slot name="sidebar"></slot>
    </div>
    <div class="content">
      <slot name="header"></slot>

      <main>
        <RouterView />
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppLayout",
}
</script>

<style scoped>
.app-layout {
  display: flex;
  height: 100vh;
  width: 100vw;
}
.sidebar {
  width: 300px;
  background-color: #161618;
}
.content {
  flex: 1 1 0%;
}
main {
  padding: 20px;
}
</style>
