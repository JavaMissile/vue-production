import Detail from '@/views/Detail'
import Home from '@/views/Home'
import Login from '@/views/Login'
import Register from '@/views/Register'
import Search from '@/views/Search'
import AddCartSuccess from '@/views/AddCartSuccess'
import ShopCart from '@/views/ShopCart'
import Trade from '@/views/Trade'
import Pay from '@/views/Pay'
import PaySuccess from '@/views/PaySuccess'
import Center from '@/views/Center'
import GroupOrder from '@/views/Center/groupOrder'
import MyOrder from '@/views/Center/myOrder'

export default [
    {
        path: '/center',
        component: Center,
        meta: { show: true },
        children: [
            {
                path: 'myorder',
                component: MyOrder,
            },
            {
                path: 'grouporder',
                component: GroupOrder,
            },
            {
                path: '/center',
                redirect: '/center/myorder'
            }
        ]
    },
    {
        path: '/paysuccess',
        component: PaySuccess,
        meta: { show: true },
    },
    {
        path: '/pay',
        component: Pay,
        meta: { show: true },
    },
    {
        path: '/trade',
        component: Trade,
        meta: { show: true },
    },
    {
        path: '/addcartsuccess',
        name: "addcartsuccess",
        component: AddCartSuccess,
        meta: { show: true },
    },
    {
        path: '/shopcart',
        component: ShopCart,
        meta: { show: true },
    },
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