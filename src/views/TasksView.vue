<template>
  <h2>Tasks</h2>
  <ul v-for="task in tasks" :key="task.id">
    <li>id: {{ task.id }}</li>
    <li>todo: {{ task.todo }}</li>
  </ul>
</template>

<script>
import axios from "axios"

export default {
  name: "TasksView",
  data() {
    return {
      tasks: [],
    }
  },
  methods: {
    async fetchTasks() {
      const response = await axios.get("https://dummyjson.com/todos")
      this.tasks = await response.data.todos
    },
  },
  created() {
    this.fetchTasks()
  },
}
</script>

<style></style>
