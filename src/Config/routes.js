import { lazy } from 'react';

const routes = [
    {
        path: "/",
        component : lazy(() => import('../Pages/Signin/Signin')),
        exact: true
    },
    {
        path: "/login",
        component : lazy(() => import('../Pages/Signin/Signin')),
        exact: true
    },
    // {
    //     path: "/dashboard",
    //     component : lazy(() => import('../Pages/Dashboard/Dashboard')),
    //     exact: true
    // },
    {
        path: "*",
        component: lazy(() => import("../Pages/Dashboard/Dashboard")),
        exact: false,
    },
];

export default routes;