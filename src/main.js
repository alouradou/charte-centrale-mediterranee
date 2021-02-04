import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VuePlyr from 'vue-plyr'
import VueScrollTo from 'vue-scrollto'
import 'vue-plyr/dist/vue-plyr.css'

createApp(App)
  .use(router)
  .use(VueScrollTo)
  .use(VuePlyr, {
    plyr: {
      controls: ['play', 'progress', 'mute', 'volume', 'fullscreen']
    }
  })
  .mount('#app')
