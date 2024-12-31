import { createWebHistory, createRouter } from "vue-router"
import MainView from "@/views/MainView.vue"
import DummyView from "@/views/DummyView.vue"
import UserView from "@/views/UserView.vue"
import NotFoundView from "@/views/NotFoundView.vue"

const routes = [
  { name: "main", path: "/", component: MainView },
  {
    name: "dummy",
    path: `/dummy/:id`,
    component: DummyView,
    props: (route) => ({ id: Number(route.params.id) }),
  },
  {
    name: "user",
    path: `/user/:id`,
    component: UserView,
    props: (route) => ({ userId: Number(route.params.id) }),
  },
  {
    name: "notFound",
    path: "/:pathMatch(.*)*",
    component: NotFoundView,
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
