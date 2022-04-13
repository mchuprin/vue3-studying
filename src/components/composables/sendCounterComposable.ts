/* eslint-disable */
import axios from 'axios';
import {
  computed,
  ref,
} from 'vue';

const allItems: any = ref([0]);

export const fetch = async () => {
  const items = await axios.get('https://api.npoint.io/45882e001c78662b4af5');
  // @ts-ignore
  allItems.value = items.data;
};

export const setCountInfo = async (id?: number) => {
  allItems.value.find((item: any) => {
    if (item.id === id) {
      item.count ++;
    }
  })
  const itemsCopy = [...allItems.value];
  await axios.post('https://api.npoint.io/45882e001c78662b4af5', [
    ...itemsCopy
  ])
}

export const useCountInfo = (id?: number) => {
  const isMax: any = computed(() => allItems.value.reduce((prev: any, curr: any) => (curr.count > prev.count ? curr : prev)).id === id);
  const isMin: any = computed(() => allItems.value.reduce((prev: any, curr: any) => (curr.count < prev.count ? curr : prev)).id === id);

  return {
    isMax,
    isMin,
    fetch,
  };
}
