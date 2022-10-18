export default [
    {
        header: 'Customer',
    },
    {
        title: 'Customer',
        icon: 'CopyIcon',
        children: [
            {
                title: 'List',
                route: 'users-list',
            },
            {
                title: 'View',
                route: 'users-view',
            },
            {
                title: 'Edit',
                route: 'users-edit',
            },
        ],
    },
]