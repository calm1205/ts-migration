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
  }),
  mutations: {
    setUser(state, payload) {
      state.user = payload
    },
  },
  getters: {
    user(state) {
      return state.user
    },
  },
  actions: {
    async getUser({ commit }, payload) {
      const { userId } = payload
      const response = await axios.get(`https:/dummyjson.com/user/${userId}`)
      commit("setUser", response.data)
    },
  },
}
