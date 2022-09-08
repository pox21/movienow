import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router';
import { store } from '@/store';

import 'simplebar';
import 'simplebar/dist/simplebar.css';
import 'normalize.css';
import '@/main.scss';

const app = createApp(App);

app.use(store);
app.use(router);

app.mount('#app');
