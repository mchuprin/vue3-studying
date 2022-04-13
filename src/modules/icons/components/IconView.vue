<script lang="ts">
import { computed, reactive } from 'vue';
import { addIcon, icons } from '@/testCounter/iconsStore';
import { useRoute } from 'vue-router';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Icon',
  props: ['item'],
  setup() {
    const route = useRoute();
    const item = computed(() => icons.find((icon: any) => icon.id === Number(route.params.id)));
    // const id = Number(route.params.id);
    // const item = icons.find((icon: any) => icon.id === id);
    // console.log(item);
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      item,
    };
  },
};
</script>

<template>
  <h2>{{ item.name }}</h2>
  <img :src="item.icon" alt="hoba">
</template>

<style scoped lang="scss">
.form {
  background: #2c3e50;
  height: 300px;
}
//.active-menu-item {
//  background: $light-pink;
//  color: $dark-blue;
//}
</style>
