<script lang="ts">
import { onMounted, reactive, ref } from 'vue';

const loadPostInfo = () => {
  // eslint-disable-next-line no-return-await
  return new Promise((resolve) => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setTimeout(() => {
    }, 1000);
  });
};

export default {
  props: ['post'],
  setup() {
    const timeout = ref<any>();
    onMounted(async () => {
      timeout.value = await loadPostInfo();
    });
    // return { post };
  },
};
</script>

<template>
  <div class="post d-flex flex-column align-items-center justify-content-center my-4" v-if="post">
    <div class="post__head d-flex align-items-center justify-content-center px-4 py-2">
      <div class="post__avatar">
        <img
          v-if="post.avatar"
          class="post__image"
          :src="post.avatar"
          alt="avatar"
        >
        <span v-else>{{ post.author[0].toUpperCase() }}</span>
      </div>
      <h3 class="post-head__author">{{ post.author }}</h3>
      <p class="post-head__time">{{ post.time.substr(0, 10).split('-').reverse().join('.') }}</p>
    </div>
    <div class="post__body">
      <img class="post__post-image mt-4" :src="post.image" alt="image">
      <p class="p-3">{{ post.content }}</p>
    </div>
  </div>

</template>

<style lang="scss">
.post {
  width: 600px;
  &__head {
    box-sizing: border-box;
    width: 100%;
    background: #ac8b9a;
  }
  &__image {
    border-radius: 50%;
    width: 50px;
    flex-basis: 10%;
  }
  &__author {
    margin-left: 10px;
    flex-basis: 80%;
    text-align: start;
    align-self: center;
  }
  &__time {
    justify-self: flex-end;
    flex-basis: 10%;
  }
  &__post-image {
    width: 400px;
  }
  &__body {
    background: #dab6c2;
  }
}

</style>
