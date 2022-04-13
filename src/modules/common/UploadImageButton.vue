<template>
  <label
    class="input-button mt-3 d-flex justify-content-center align-items-center"
    for="input"
  >
    <input
      type="file"
      name="file"
      id="input"
      v-bind="$attrs"
      class="input-button__upload"
      @change="uploadImage"
    >
    <span>Upload image</span>
  </label>
</template>

<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
  props: ['type'],
  // eslint-disable-next-line vue/no-setup-props-destructure,no-shadow
  setup({ type }: any, { emit }: any) {
    // eslint-disable-next-line consistent-return,no-shadow

    const showFiles = (e: any) => {
      console.log(e.target.files);
    };
    const uploadImage = async (e: any) => {
      emit('upload', e.target.files);
      // const files = [...e.target.files];
    };

    return {
      uploadImage,
      showFiles,
    };
  },
});
</script>

<style scoped lang="scss">
.input-button {
  width: 150px;
  height: 30px;
  background: $lilac;
  color: white;
  border-radius: 3px;
  &__upload {
    opacity: 0;
    visibility: hidden;
    position: absolute;
  }
}
.input-button:hover {
  cursor: pointer;
  box-shadow: 0px 0px 8px 0px #6a3a4f;
}
</style>
