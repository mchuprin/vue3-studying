<template>
  <PageLayoutHeader/>
  <PageLayoutSubheader/>
  <PageLayoutLeftSidebar/>
  <main class="main d-flex flex-column align-items-center py-3">
    <router-view/>
  </main>
</template>

<script lang="ts">
import PageLayoutHeader from '@/components/PageLayoutHeader.vue';
import PageLayoutSubheader from '@/components/PageLayoutSubheader.vue';
import PageLayoutLeftSidebar from '@/components/PageLayoutLeftSidebar.vue';

export default {
  components: {
    PageLayoutHeader,
    PageLayoutSubheader,
    PageLayoutLeftSidebar,
  },
};
</script>

<style scoped lang="scss">
.main {
  background: #9885b2;
  height: 100vh;
  overflow: scroll;
}
</style>
