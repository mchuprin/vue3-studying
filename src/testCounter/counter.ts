import { reactive, ref } from 'vue';

export const number = ref(0);

// eslint-disable-next-line import/prefer-default-export
export const increment = () => {
  number.value += 1;
  console.log('increment', number.value);
};
