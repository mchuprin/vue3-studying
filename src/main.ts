import { createApp } from 'vue';
import 'bootstrap-utilities/bootstrap-utilities.css';
import App from './App.vue';
import router from './router';

createApp(App)
  .use(router)
  .mount('#app');
