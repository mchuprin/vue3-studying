<template>
  <div class="skeleton mt-4 d-flex flex-column">
    <div class="skeleton__head d-flex align-items-center px-3 py-2">
      <div class="skeleton__avatar" />
      <div class="skeleton__text-plug ml-3"></div>
    </div>
    <div class="skeleton__body p-3">
      <div class="skeleton__image-plug mb-3"></div>
      <div class="skeleton__text-plug"></div>
    </div>
  </div>
</template>

<style lang="scss">
.skeleton {
  width: 600px;
  background: #dab6c2;
  &__head {
    box-sizing: border-box;
    width: 100%;
    background: #ac8b9a;
  }
  &__avatar {
    width: 50px;
    height: 50px;
    background: antiquewhite;
    border-radius: 50%;
  }
  &__text-plug {
    height: 20px;
    width: 300px;
    border-radius: 10px;
    background: antiquewhite;
  }
  &__image-plug {
    height: 100px;
    border-radius: 10px;
    background: antiquewhite;
  }
}
</style>
