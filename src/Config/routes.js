import { lazy } from 'react';

import PeopleIcon from '@mui/icons-material/People';
import AccountBoxSharp from '@mui/icons-material/AccountBoxSharp';

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
    {
        path: "/signup",
        component : lazy(() => import('../Pages/Signup/Signup')),
        exact: true
    },
    {
        path: "*",
        component: lazy(() => import("../Pages/Dashboard/Dashboard")),
        exact: false,
    },
];

const privateRoutesList = [
    {
        exact: true,
        to: "/appoinments",
        icon: <PeopleIcon />,
        label: "Appoinments",
        component: lazy(() => import("../Pages/Appoinment/Appoinment"))
    },
    {
        exact: true,
        to: "/slots",
        label: "Slots",
        icon: <AccountBoxSharp />,
        component: lazy(() => import("../Pages/Slots/Slot")),
    },
];

export {
    routes,
    privateRoutesList
};