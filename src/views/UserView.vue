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
import { mapGetters, mapActions } from "vuex"

export default {
  name: "UserView",
  props: {
    userId: { type: Number, required: true },
  },
  watch: {
    $route(to, from) {
      this.getUser({ userId: to.params.id })
    },
  },
  computed: {
    ...mapGetters(["user"]),
  },
  methods: {
    ...mapActions(["getUser"]),
  },
  created() {
    this.getUser({ userId: this.userId })
    console.log(this.user)
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
