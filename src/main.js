import Vue from 'vue'
import App from './App.vue'
import "./../node_modules/bootstrap/dist/css/bootstrap.css"
import "./styles/index.css"
import router from './router/index.js'
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000'
Vue.prototype.$axios = axios


new Vue({
    el: '#app',
    router,
    render: h => h(App)
})