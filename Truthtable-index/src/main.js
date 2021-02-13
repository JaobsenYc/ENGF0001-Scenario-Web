import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Index from './pages/index.vue'
import Search from './pages/search.vue'

import '../node_modules/jquery/dist/jquery.js'

import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/css/bootstrap-grid.css'
import '../src/assets/css/style1.css'

Vue.use(VueRouter)
    // Vue.use(ElementUI);
const routes = [{
    path: '/',
    component: Search
}, {
    path: '/index',
    component: Index
}]
const router = new VueRouter({
    routes,
    mode: 'history'
})
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
