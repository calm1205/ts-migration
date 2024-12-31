<template>
  <h2>Task</h2>
  <ul>
    <li>id: {{ task.id }}</li>
    <li>todo: {{ task.todo }}</li>
  </ul>
</template>

<script>
import axios from "axios"

export default {
  name: "TaskView",
  data() {
    return {
      task: {},
    }
  },
  watch: {
    $route(to, from) {
      this.init(to.params.id)
    },
  },
  props: {
    taskId: { type: Number, required: true },
  },
  methods: {
    async init(taskId) {
      const response = await axios.get(
        `https://dummyjson.com/todo/${this.taskId}`,
      )
      this.task = await response.data
    },
  },
  created() {
    this.task = this.init(this.taskId)
  },
}
</script>

<style></style>
