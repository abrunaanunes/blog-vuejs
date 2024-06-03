import { createMemoryHistory, createRouter } from 'vue-router'
import HomePage from './pages/HomePage.vue'
import AboutPage from './pages/AboutPage.vue'
import PostPage from './pages/PostPage.vue'
import MapPage from './pages/MapPage.vue'

const routes = [
    { path: '/', component: HomePage },
    { path: '/about', component: AboutPage },
    { path: '/map', component: MapPage },
    { path: '/post/:slug', component: PostPage, props: true },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router