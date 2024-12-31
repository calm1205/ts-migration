<template>
  <div class="main-sidebar">
    <div class="title">
      <div class="title__icon">
        <VueIcon />
      </div>
      <h2 class="title__text">ts-migration</h2>
    </div>

    <div class="menus">
      <div class="menu" v-for="menu in menus" :key="menu.title">
        <div class="menu__divider"></div>

        <p class="menu__title">{{ menu.title }}</p>

        <router-link
          v-for="(item, index) in menu.items"
          :to="{ name: menu.title, params: { id: index + 1 } }"
          :key="item"
        >
          <span>{{ item }}</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import VueIcon from "@/components/VueIcon.vue"

export default {
  name: "AppSidebar",
  components: {
    VueIcon,
  },
  props: {
    /**
     * @type {{title: string, items: string[]}[]}
     */
    menus: { type: Array, required: true },
  },
}
</script>

<style>
.main-sidebar {
  padding: 20px 30px;
}
.title {
  display: flex;
  align-items: center;
  gap: 10px;
}
.title__icon {
  width: 30px;
}
.title__text {
  font-size: 1.2rem;
}
.menus {
  margin-top: 20px;
}
.menus,
.menu {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.menu__title {
  font-weight: bold;
}
.menu__divider {
  width: 100%;
  height: 1px;
  background-color: #2e2e32;
}
</style>
