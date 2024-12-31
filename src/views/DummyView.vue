<template>
  <h2>Dummy View</h2>
  <div>{{ id }}</div>
</template>

<script>
export default {
  name: "DummyView",
  props: {
    id: { type: Number, required: false },
  },
}
</script>

<style scoped></style>
