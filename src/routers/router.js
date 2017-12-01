import VueRouter from "vue-router"

import Vue from "vue"

//使用Vue.use方法加载VueRouter模块
Vue.use(VueRouter)

//引入组件 tab栏相关的组件
import HomeContainer from "../components/tabcontainers/HomeContainer.vue"
import MemberContainer from "../components/tabcontainers/MemberContainer.vue"
import CartContainer from "../components/tabcontainers/CartContainer.vue"
import SearchContainer from "../components/tabcontainers/SearchContainer.vue"

//新闻组件
import Newsinfo from "../components/news/NewsInfo.vue"
import NewsList from "../components/news/NewsList.vue"

export default new VueRouter({
    routes: [{
            path: "/",
            component: HomeContainer
        },
        {
             path: "/home",
            component: HomeContainer
        },
        {
            path: "/member",
            component: MemberContainer
        },
        {
            path: "/cart",
            component: CartContainer
        },
        {
            path: "/search",
            component: SearchContainer
        },
        {
            path:"/",
            redirect:"/home"
        },
        {
            path:"/home/newslist",
            component:NewsList
        },
        {
            path:"/home/newsinfo/:id",
            component:Newsinfo
        }
    ]
});