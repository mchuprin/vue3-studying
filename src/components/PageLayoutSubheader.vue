<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    msg: String,
  },
})
export default class PageLayoutSubheader extends Vue {
  get title(): any {
    return this.$route.meta.title || '';
  }
}
</script>

<template>
  <header class="subheader d-flex align-items-center">
    <h4>{{ title }}</h4>
  </header>
</template>

<style scoped lang="scss">
@import "scss/styles";

.subheader {
  padding: 0 0 0 70px;
  font-size: 22px;
  color: white;
  height: $subheader-height;
  background: $lilac;
  margin-top: $header-height;
}
</style>
