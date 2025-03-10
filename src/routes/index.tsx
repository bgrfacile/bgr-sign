import {createBrowserRouter, Navigate, NonIndexRouteObject} from "react-router";
import {DefaultLayout} from "@/layouts/DefaultLayout.tsx";
import {Login} from "@/pages/Login/Login.tsx";
import {ClassDetailPage} from "@/pages/ClassDetailPage/ClassDetailPage.tsx";
import {AttendancePage} from "@/pages/AttendancePage/AttendancePage.tsx";
import {AttendanceDetailPage} from "@/pages/AttendanceDetailPage/AttendanceDetailPage.tsx";
import {ReportsPage} from "@/pages/ReportsPage/ReportsPage.tsx";
import SettingsPage from "@/pages/SettingsPage/SettingsPage";
import {Dashboard} from "@/pages/Dashboard/Dashboard.tsx";
import {Error404} from "@/pages/Error404/Error404.tsx";
import {LoaderLayout} from "@/routes/loaders/LoaderLayout.ts";
import {loginLoader} from "@/routes/loaders/loginLoader.ts";

const routesList: NonIndexRouteObject[] = [
    {
        id: "main",
        path: "/",
        element: <DefaultLayout/>,
        loader: LoaderLayout,
        children: [
            {
                index: true,
                element: <Navigate to="/dashboard" replace/>
            },
            {
                path: "/dashboard",
                element: (<Dashboard/>)
            },
            {
                path: "/course/:courseId",
                element: (<ClassDetailPage/>)
            },
            {
                path: "/attendance",
                element: (<AttendancePage/>)
            },
            {
                path: "/attendance/:recordId",
                element: (<AttendanceDetailPage/>)
            },
            {
                path: "/reports",
                element: (<ReportsPage/>)
            },
            {
                path: "/settings",
                element: (<SettingsPage/>)
            }
        ]
    },
    {
        path: "/login",
        element: <Login/>,
        loader: loginLoader,
    },
    {
        path: "*",
        element: <Error404 />,
    }

];

export const Routes = createBrowserRouter(routesList, {
    basename: "/",
    window,
    future: {
        v7_relativeSplatPath: true,
    },
});

if (import.meta.hot) {
    import.meta.hot.accept();
    import.meta.hot.dispose(() => Routes.dispose());
}