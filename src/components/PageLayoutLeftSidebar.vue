<script setup lang="ts">
import PageLayoutLeftSidebarItem from '@/components/PageLayoutLeftSidebarItem.vue';
import { fetch } from '@/components/composables/sendCounterComposable';

fetch();

const navItems: any = [
  {
    to: 'Posts',
    icon: 'far fa-newspaper',
    name: 'Posts',
    id: 1,
  },
];
</script>

<template>
  <div class="sidebar">
    <PageLayoutLeftSidebarItem
      v-for="item in navItems" :item="item"
      :key="item.to"
    />
  </div>
</template>

<style scoped lang="scss">
@import "scss/styles";

.sidebar {
  position: fixed;
  background: $purple;
  top: $header-height;
  min-width: $left-sidebar-min-width;
  max-width: $left-sidebar-min-width;
  z-index: $z-index-page-layout;
  height: 100vh;
  transition: 0.8s;
  overflow: hidden;
}
.sidebar:hover {
  min-width: $left-sidebar-max-width;
}
</style>
