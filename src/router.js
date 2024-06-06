import { createMemoryHistory, createRouter } from 'vue-router'
import HomePage from './pages/HomePage.vue'
import AboutPage from './pages/AboutPage.vue'
import PostPage from './pages/PostPage.vue'
import MapPage from './pages/MapPage.vue'
import ContactPage from './pages/ContactPage.vue'
import SearchPage from './pages/SearchPage.vue'

const routes = [
    { path: '/', component: HomePage },
    { path: '/about', component: AboutPage },
    { path: '/map', component: MapPage },
    { path: '/contact', component: ContactPage },
    { path: '/search/:query', component: SearchPage, props: true },
    { path: '/post/:slug', component: PostPage, props: true },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router