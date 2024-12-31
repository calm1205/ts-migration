<template>
  <ul>
    <li>username: {{ user?.username }}</li>
    <li>userId: {{ userId }}</li>
    <li>age: {{ user?.age }}</li>
    <li>birthDate: {{ user?.birthDate }}</li>
    <li>gender: {{ user?.gender }}</li>
    <li>email: {{ user?.email }}</li>
    <li>phone: {{ user?.phone }}</li>
  </ul>
</template>

<script>
import axios from "axios"

export default {
  name: "UserView",
  data() {
    return {
      user: null,
    }
  },
  props: {
    userId: { type: Number, required: true },
  },
  watch: {
    $route(to, from) {
      this.init(to.params.id)
    },
  },
  methods: {
    async init(userId) {
      const response = await axios.get(
        `https:/dummyjson.com/user/${this.userId}`,
      )
      this.user = response.data
    },
  },
  created() {
    this.init(this.userId)
  },
}
</script>

<style scoped>
ul {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 10px;
}
</style>
