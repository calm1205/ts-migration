<template>
  <h2>users</h2>
  <ul v-for="user in users" :key="user.id">
    <li>{{ user.username }}</li>
  </ul>
</template>

<script>
import { mapGetters, mapActions } from "vuex"

export default {
  name: "UsersView",
  computed: {
    ...mapGetters(["users"]),
  },
  methods: {
    ...mapActions(["getUsers"]),
  },
  created() {
    this.getUsers()
  },
}
</script>

<style></style>
