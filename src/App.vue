<template>
  <AppLayout>
    <template #sidebar>
      <AppSidebar
        :menus="[
          { title: 'Menu 1', items: ['Item 1', 'Item 2', 'Item 3'] },
          { title: 'Menu 2', items: ['Item 1', 'Item 2', 'Item 3'] },
          { title: 'Menu 3', items: ['Item 1', 'Item 2', 'Item 3'] },
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
