const routes = [{
        path: '/index',
        name: 'index',
        children: [{
                path: 'hot',
                name: 'hot',
                component: () =>
                    import ('@/views/index/hot/index.vue')
            },
            {
                path: 'weekend',
                name: 'weekend',
                component: () =>
                    import ('@/views/index/weekend/index.vue')
            },
            {
                path: 'feature',
                name: 'feature',
                component: () =>
                    import ('@/views/index/feature/index.vue')
            },
            {
                path: 'theme',
                name: 'theme',
                component: () =>
                    import ('@/views/index/theme/index.vue')
            },
            {
                path: '/index',
                redirect: '/index/hot'
            }
        ],
        component: () =>
            import ('@/views/index/index.vue')
    },
    {
        path: '/detail',
        name: 'detail',
        component: () =>
            import ('@/views/detail/detail.vue')
    },
    {
        path: '/search',
        name: 'search',
        component: () =>
            import ('@/views/search/index.vue')
    },
    {
        path: '/',
        redirect: '/index'
    }

]
export default routes