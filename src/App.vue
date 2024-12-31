<template>
  <AppLayout>
    <template #sidebar>
      <AppSidebar
        :menus="[
          {
            title: 'user',
            path: 'users',
            items: [
              { title: 'User 1', path: 'user' },
              { title: 'User 2', path: 'user' },
              { title: 'User 3', path: 'user' },
            ],
          },
          {
            title: 'task',
            path: 'tasks',
            items: [
              { title: 'Task 1', path: 'task' },
              { title: 'Task 2', path: 'task' },
              { title: 'Task 3', path: 'task' },
            ],
          },
          {
            title: 'dummy',
            path: 'dummies',
            items: [
              { title: 'Dummy 1', path: 'dummy' },
              { title: 'Dummy 2', path: 'dummy' },
              { title: 'Dummy 3', path: 'dummy' },
            ],
          },
        ]"
      />
    </template>
    <template #header>
      <AppHeader />
    </template>
  </AppLayout>
</template>

<script>
import AppLayout from "@/components/AppLayout.vue"
import AppSidebar from "@/components/AppSidebar.vue"
import AppHeader from "@/components/AppHeader.vue"

export default {
  name: "App",
  components: {
    AppLayout,
    AppSidebar,
    AppHeader,
  },
}
</script>
