<template>
  <div class="main-header">
    <ul>
      <li>item1</li>
      <li>item2</li>
      <li>item3</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
}
</script>

<style>
.main-header {
  width: 100%;
  height: 50px;
  background-color: #1b1b1f;
  display: flex;
  flex-direction: row-reverse;
}
ul {
  padding: 0 20px;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
}
li {
  list-style: none;
}
</style>
