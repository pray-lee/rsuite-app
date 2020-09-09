import React from 'react'

import App from '../App'
import Login from '../pages/login'
import NotFound from '../pages/notFound'

const baseRoutes = [
    {
        pathname: '/',
        component: App,
        exact: true
    },
    {
        pathname: '/login',
        component: Login
    },
    {
        pathname: '/404',
        component: NotFound
    },
]

export default baseRoutes
