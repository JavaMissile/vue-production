import Detail from '@/views/Detail'
import Home from '@/views/Home'
import Login from '@/views/Login'
import Register from '@/views/Register'
import Search from '@/views/Search'

export default [
    {
        path: '/detail/:skuid',
        component: Detail,
        meta: { show: true },
    },
    {
        path: '/home',
        component: Home,
        meta: { show: true },
    },
    {
        path: '/login',
        component: Login,
        meta: { show: false },
    },
    {
        path: '/register',
        component: Register,
        meta: { show: false },
    },
    {
        path: '/search/:keyword?',
        component: Search,
        meta: { show: true },
        name: "search",
        props: ($route) => ({
            keyword: $route.params.keyword, k: $route.query.k
        })
    },
    {
        path: '/*',
        redirect: "/home"
    },
]