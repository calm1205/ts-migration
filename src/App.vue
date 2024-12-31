<template>
  <AppLayout>
    <template #sidebar>
      <AppSidebar
        :menus="[
          {
            title: 'user',
            items: ['User 1', 'User 2', 'User 3', 'User 4', 'User 5'],
          },
          { title: 'dummy', items: ['Item 1', 'Item 2', 'Item 3'] },
          { title: 'dummy', items: ['Item 1', 'Item 2', 'Item 3'] },
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
