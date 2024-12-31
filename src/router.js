import { createMemoryHistory, createRouter } from "vue-router"
import MainView from "@/views/MainView.vue"
import DummyView from "@/views/DummyView.vue"
import NotFoundView from "@/views/NotFoundView.vue"

const routes = [
  { name: "main", path: "/", component: MainView },
  {
    name: "dummy",
    path: `/dummy/:index`,
    component: DummyView,
    props: (route) => ({ index: Number(route.params.index) }),
  },
  { name: "notFound", path: "/:pathMatch(.*)*", component: NotFoundView },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})
