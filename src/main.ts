import { createApp } from 'vue';
import CommonPlugin from '@/modules/common/common.plugin';
import 'bootstrap-utilities/bootstrap-utilities.css';
import App from './App.vue';
import router from './router';
import store from './store';

createApp(App)
  .use(CommonPlugin)
  .use(store)
  .use(router)
  .mount('#app');
