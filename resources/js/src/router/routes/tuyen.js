export default [
    {
        path: '/error-404',
        name: 'error-404',
        component: () => import('@/views/error/Error404.vue'),
        meta: {
            layout: 'full',
            resource: 'Auth',
            action: 'read',
        },
    },
    {
        path: '/tuyen',
        name: 'tuyen',
        component: () => import('@/views/tuyen/tuyen.vue'),
        meta: {
            layout: 'full',
            resource: 'Auth',
        },
    },

]
