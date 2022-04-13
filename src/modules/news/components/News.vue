<script lang="ts">
import { reactive, watch, computed } from 'vue';
import { addIcon } from '@/testCounter/iconsStore';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'News',
  setup(props: any, context: any) {
    // TODO: Move to composable
    const formData = reactive({
      name: '',
      icon: null,
    });

    const disableButton = computed(() => (formData.name === '' || formData.icon == null));

    const uploadImage = async (files: any) => {
      const uploadedFiles = [...files];
      const reader = new FileReader();
      // eslint-disable-next-line array-callback-return
      const processedFiles = await Promise.all(
        // eslint-disable-next-line array-callback-return
        uploadedFiles.map((file: any) => {
          reader.readAsDataURL(file);
          // eslint-disable-next-line no-shadow
          return new Promise((resolve, reject) => {
            reader.onload = (ev: any) => {
              resolve(ev.target.result);
            };
          });
        }),
      );
      // eslint-disable-next-line prefer-destructuring
      (formData.icon as any) = processedFiles[0];
    };

    const submitForm = (data: any) => {
      addIcon({
        ...formData,
        id: Math.random(),
        to: formData.name,
      });
      formData.name = '';
    };

    return {
      formData,
      submitForm,
      uploadImage,
      addIcon,
      disableButton,
    };
  },
};
</script>

<template>
  <div class="d-flex flex-column justify-content-center align-items-center">
    <form @submit.prevent="submitForm" class="form d-flex flex-column w-25 align-items-center">
      <label class="mt-5" for="name">
        <input id="name" class="form__input" v-model="formData.name"/>
      </label>
      <UploadImageButton @upload="uploadImage" accept=".png" />
      <button type="submit" class="mt-3 form__button" :disabled="disableButton">Add</button>
    </form>
  </div>

</template>

<style scoped lang="scss">
.form {
  height: 200px;
  &__input {
    background: #dab6c2;
    outline: none;
    border: none;
    height: 20px;
    }
  &__button {
    background: $lilac;
    outline: none;
    border: none;
    width: 150px;
    height: 30px;
    font-size: 15px;
    background: $lilac;
    color: white;
    border-radius: 3px;
  }
  &__button:hover {
    cursor: pointer;
    box-shadow: 0px 0px 8px 0px #6a3a4f;
  }
  &__button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}
</style>
