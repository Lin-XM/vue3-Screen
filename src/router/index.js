import { createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path:'/home',
        name:'home',
        component:()=> import('../views/homePage.vue')
    },
    {
        path:'/',
        redirect:'/home'
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})
export default  router