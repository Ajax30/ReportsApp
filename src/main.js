import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css'
import { createApp } from 'vue'
import router from 'vue-router'
import VueAxios from 'vue-axios'
import axios from 'axios'
import App from './App.vue'

createApp(App).use(router)
							.use(VueAxios, axios)
							.provide('$apiBaseUrl', 'http://178.63.13.157:8090/mock-api/api')
							.mount('#app')

import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap-datepicker/dist/js/bootstrap-datepicker.js'
