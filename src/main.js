import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { router } from '@/router/index.js';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import { plugin, defaultConfig } from '@formkit/vue';
import config from '../formkit.config.js';
import axios from 'axios';
import App from './App.vue';

import '@assets/app.scss';

const app = createApp(App);  // Itt már elérjük az App komponenst

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

app.use(router);
app.use(plugin, defaultConfig(config));
app.use(pinia);

app.mount('#app');

// Axios alapértelmezett beállítások
axios.defaults.baseURL = 'http://localhost:8000';
