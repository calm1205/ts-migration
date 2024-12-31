import axios from "axios"

export const userModule = {
  state: () => ({
    user: {
      username: "",
      userId: NaN,
      age: NaN,
      birthDate: "",
      gender: "",
      email: "",
      phone: "",
    },
    users: [],
  }),
  mutations: {
    setUser(state, payload) {
      state.user = payload
    },
    setUsers(state, payload) {
      state.users = payload
    },
  },
  getters: {
    user(state) {
      return state.user
    },
    users(state) {
      return state.users
    },
  },
  actions: {
    async getUser({ commit }, payload) {
      const { userId } = payload
      const response = await axios.get(`https:/dummyjson.com/user/${userId}`)
      commit("setUser", response.data)
    },
    async getUsers({ commit }) {
      const response = await axios.get("https:/dummyjson.com/users")
      commit("setUsers", response.data.users)
    },
  },
}
