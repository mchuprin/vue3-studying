<script lang="ts">
import { reactive } from 'vue';
import { addIcon } from '@/testCounter/iconsStore';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Icon',
  props: ['item'],
  // created() {
  //   console.log('props', (this as any).$props);
  // },
};
</script>

<template>
  <router-link class="item d-flex flex-row" :to="{ name: 'Icon', params: { id: item.id }}">
    <i class="mr-5 fas fa-caret-square-right"></i>
    <p>{{ item.name }}</p>
  </router-link>
</template>

<style scoped lang="scss">
.item {
  text-decoration: none;
  padding: 20px;
  color: white;
}
.active-menu-item {
  background: $light-pink;
  color: $dark-blue;
}
.item:hover {
  background: $light-pink;
}
//.sidebar:hover {
//  min-width: $left-sidebar-max-width;
//}
</style>
