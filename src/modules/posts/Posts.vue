<script>
import { defineAsyncComponent, onMounted, ref } from 'vue';
import axios from 'axios';
import PostSkeleton from './components/PostSkeleton.vue';
import PostError from './components/PostError.vue';

const Post = defineAsyncComponent({
  loader: () => import('./components/Post.vue'),
  loadingComponent: PostSkeleton,
  errorComponent: PostError,
});

export default {
  components: { Post },
  setup() {
    const posts = ref(null);

    axios.get('https://api.npoint.io/c326b8f00209b5f48388')
      .then((res) => posts.value = res.data);

    return { posts };
  },
};
</script>

<template>
  <div v-for="post in posts" :key="post.id">
    <Post :post="post"/>
  </div>
<!--  <Suspense>-->
<!--    <template #default>-->
<!--      <Post />-->
<!--    </template>-->
<!--    <template #fallback>-->
<!--      <PostSkeleton />-->
<!--    </template>-->
<!--  </Suspense>-->
</template>

<style lang="scss">
.posts {
  width: 80%;
}
</style>
