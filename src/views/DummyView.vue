<template>
  <h2>Dummy View</h2>
  <div>{{ index }}</div>
</template>

<script>
export default {
  name: "DummyView",
  props: {
    index: { type: Number, required: false },
  },
}
</script>

<style scoped></style>
