import Vue from 'vue'
import VueRouter from 'vue-router'
import Router from 'vue-router'
import HelloWorld from './../components/HelloWorld.vue'
import FirstPage from './../components/FirstPage.vue'
import SecondPage from './../components/SecondPage.vue'
import ThirdPage from './../components/ThirdPage.vue'
import ResultPage from './../components/ResultPage.vue'

Vue.use(Router)


const routes= [
    { path: '/', component: HelloWorld },
    { path: '/FirstPage', component: FirstPage },
    { path: '/SecondPage', component: SecondPage },
    { path: '/ThirdPage', component: ThirdPage },
    { path: '/ResultPage', component: ResultPage },
]


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
