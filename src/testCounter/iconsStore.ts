import { reactive } from 'vue';

export const icons = reactive([]);

export const addIcon = (item: any) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  icons.push(item);
  console.log(icons);
};
