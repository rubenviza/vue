import { createApp } from 'vue'
import App from './App.vue'
import Intro from './Intro.vue'
import Metodos from './Metodos.vue'
import Reactiv_PrComp from './Reactiv_PrComp.vue'

import './assets/main.css'

createApp(Intro).mount('#intro')
createApp(Metodos).mount('#metodos')
createApp(Reactiv_PrComp).mount('#reactiv_prcomp')
createApp(App).mount('#app')