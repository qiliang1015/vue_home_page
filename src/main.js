import { createApp } from 'vue'
import App from './App.vue'
import './assets/icons/iconfont.js'

import {
    ElCarousel,
    ElCarouselItem
} from 'element-plus'

const app = createApp(App)

app.component(ElCarousel.name, ElCarousel)
app.component(ElCarouselItem.name, ElCarouselItem)

app.mount('#app')
