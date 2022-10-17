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
        path: '/test',
        name: 'test',
        component: () => import('@/views/test/test.vue'),
        meta: {
            layout: 'full',
            resource: 'Auth',
        },
    },

]
