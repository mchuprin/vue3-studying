<script setup lang="ts">
import PageLayoutLeftSidebarItem from '@/components/PageLayoutLeftSidebarItem.vue';
import { fetch } from '@/components/composables/sendCounterComposable';

fetch();

const navItems: any = [
  {
    to: 'News',
    icon: 'far fa-newspaper',
    name: 'News',
    id: 1,
  },
  {
    to: 'Posts',
    icon: 'far fa-newspaper',
    name: 'Posts',
    id: 2,
  },
  {
    to: 'News',
    icon: 'far fa-newspaper',
    name: 'News',
    id: 3,
  },
  {
    to: 'News',
    icon: 'far fa-newspaper',
    name: 'News',
    id: 4,
  },
];
</script>

<template>
  <div class="sidebar">
    <PageLayoutLeftSidebarItem
      v-for="item in navItems" :item="item"
      :key="item.to"
    />
<!--    <Icon v-for="icon in icons" :item="icon" :key="icon.id" />-->
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
