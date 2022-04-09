import "bootstrap/dist/css/bootstrap.min.css"
import { createApp } from 'vue'
import router from 'vue-router'
import VueAxios from 'vue-axios'
import axios from 'axios'
import App from './App.vue'

createApp(App).use(router)
							.use(VueAxios, axios)
							.mount('#app')

import "bootstrap/dist/js/bootstrap.js"
