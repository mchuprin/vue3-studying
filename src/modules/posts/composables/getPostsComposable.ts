import { ref } from 'vue';
import axios from 'axios';

export const posts = ref(null);

export const getPosts = async () => {
  posts.value = await axios.get('https://api.npoint.io/c326b8f00209b5f48388');
};
