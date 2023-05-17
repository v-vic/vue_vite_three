import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Buycart from '../views/Buycart.vue'
import Product from '../views/Product.vue'

const routes = [
    { path: '/', component: Home, name: 'home' },
    { path: '/about', component: About, name: 'about' },
    { path: '/buycart', component: Buycart, name: 'buycart' },
    { path: '/product', component: Product, name: 'product' },
    
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router