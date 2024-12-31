<template>
  <h2>users</h2>
  <ul v-for="user in users" :key="user.id">
    <li>{{ user.username }}</li>
  </ul>
</template>

<script>
import axios from "axios"

export default {
  name: "UsersView",
  data() {
    return {
      users: [],
    }
  },
  methods: {
    async fetchUsers() {
      const response = await axios.get("https://dummyjson.com/users")
      this.users = response.data.users
    },
  },
  created() {
    this.fetchUsers()
  },
}
</script>

<style></style>
