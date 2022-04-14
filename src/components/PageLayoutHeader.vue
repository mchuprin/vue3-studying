<template>
  <header class="header">
    <div class="header__user">
      <p class="header__login">wesper76</p>
      <i class="fas fa-angle-up"></i>
    </div>
  </header>
</template>

<script lang="ts">
export default {
  name: 'PageLayoutHeader',
};
</script>

<style scoped lang="scss">
@import "scss/styles.scss";
//@import "../scss/styles.scss";

.header {
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  position: fixed;
  background: $lilac;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: $header-height;
  box-shadow: 0 1px 5px 1px rgba(0,0,0,0.5);
  padding: 0 50px;
  &__login {
    width: fit-content;
    margin: 0;
    color: white;
    margin-right: 10px;
  }
  &__user {
    display: flex;
    flex-direction: row;
  }
  &__logo {
    width: 200px
  }
  &__icon {
    width: $icon-width;
  }
}
</style>
