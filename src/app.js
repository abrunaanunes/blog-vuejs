import { createApp } from 'vue'
import './app.css'
import App from './App.vue'
import router from './router.js'
import FontAwesomeIcon from "./components/FontAwesomeIcon.vue"


createApp(App)
  .use(router)
  .component("fa-icon", FontAwesomeIcon)
  .mount('#app')
