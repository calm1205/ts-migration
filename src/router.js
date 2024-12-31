import { createWebHistory, createRouter } from "vue-router"
import MainView from "@/views/MainView.vue"
import DummiesView from "@/views/DummiesView.vue"
import DummyView from "@/views/DummyView.vue"
import UserView from "@/views/UserView.vue"
import UsersView from "@/views/UsersView.vue"
import TaskView from "@/views/TaskView.vue"
import TasksView from "@/views/TasksView.vue"
import NotFoundView from "@/views/NotFoundView.vue"

const routes = [
  { name: "main", path: "/", component: MainView },
  {
    name: "dummies",
    path: `/dummies`,
    component: DummiesView,
  },
  {
    name: "dummy",
    path: `/dummy/:id`,
    component: DummyView,
    props: (route) => ({ id: Number(route.params.id) }),
  },
  { name: "users", component: UsersView, path: "/users" },
  {
    name: "user",
    path: `/user/:id`,
    component: UserView,
    props: (route) => ({ userId: Number(route.params.id) }),
  },
  { name: "tasks", component: TasksView, path: "/tasks" },
  {
    name: "task",
    path: `/task/:id`,
    component: TaskView,
    props: (route) => ({ taskId: Number(route.params.id) }),
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
