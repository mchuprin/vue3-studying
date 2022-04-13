<script lang="ts">
/* eslint-disable */
import { useCountInfo } from '@/components/composables/sendCounterComposable';
import { setCountInfo } from '@/components/composables/sendCounterComposable';
import {
  computed,
  toRef,
  toRefs,
  watch,
} from 'vue';

export default {
  name: 'PageLayoutLeftSidebarItem',
  props: ['item'],
  setup(props: any) {
    const { isMax, isMin, fetch } = useCountInfo(props.item.id);
    return {
      isMax,
      isMin,
      setCountInfo,
  };
  },
};
</script>
<template>
  <router-link
    :class="{ 'max-rating': isMax, 'min-rating': isMin }"
    class="item d-flex flex-row"
    @click="setCountInfo(item.id)"
    :to="{ name: item.name, params: { id: item.id }}"
  >
    <i class="mr-5" :class="item.icon"></i>
    <p>{{ item.name }}</p>
  </router-link>
</template>

<style scoped lang="scss">
@import "scss/styles";

.item {
  text-decoration: none;
  padding: 20px;
  color: white;
}
.max-rating{
  background: #35d035;
}
.min-rating {
  background: #d31f1f;
}
.active-menu-item {
  background: $light-pink;
  color: $dark-blue;
}
.item:hover {
  background: $light-pink;
}
.sidebar:hover {
  min-width: $left-sidebar-max-width;
}
</style>
