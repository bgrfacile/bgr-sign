import {createBrowserRouter, Navigate, NonIndexRouteObject} from "react-router";
import {DefaultLayout} from "@/layouts/DefaultLayout.tsx";
import {Login} from "@/pages/Login/Login.tsx";
import {RoleBasedRoute} from "@/components/RoleBasedRoute.tsx";
import {ClassDetailPage} from "@/pages/ClassDetailPage/ClassDetailPage.tsx";
import {AttendancePage} from "@/pages/AttendancePage/AttendancePage.tsx";
import {AttendanceDetailPage} from "@/pages/AttendanceDetailPage/AttendanceDetailPage.tsx";
import {ReportsPage} from "@/pages/ReportsPage/ReportsPage.tsx";
import SettingsPage from "@/pages/SettingsPage/SettingsPage";
import {Dashboard} from "@/pages/Dashboard/Dashboard.tsx";
import {loginAction} from "@/routes/actions/loginAction.ts";
import {Error404} from "@/pages/Error404/Error404.tsx";
import {loginLoader} from "@/routes/loaders/loginLoader.ts";

const routesList: NonIndexRouteObject[] = [
    {
        id: "main",
        path: "/",
        element: <DefaultLayout/>,
        children: [
            {
                index: true,
                element: <Navigate to="/dashboard" replace/>
            },
            {
                path: "/dashboard",
                element: (<RoleBasedRoute allowedRoles={['admin', 'teacher', 'student', 'parent']}>
                    <Dashboard/>
                </RoleBasedRoute>)
            },
            {
                path: "/class/:classId",
                element: (<RoleBasedRoute allowedRoles={['admin', 'teacher']}>
                    <ClassDetailPage/>
                </RoleBasedRoute>)
            },
            {
                path: "/attendance",
                element: (<RoleBasedRoute allowedRoles={['admin', 'teacher', 'student']}>
                    <AttendancePage/>
                </RoleBasedRoute>)
            },
            {
                path: "/attendance/:recordId",
                element: (<RoleBasedRoute allowedRoles={['admin', 'teacher']}>
                    <AttendanceDetailPage/>
                </RoleBasedRoute>)
            },
            {
                path: "/reports",
                element: (<RoleBasedRoute allowedRoles={['admin', 'teacher']}>
                    <ReportsPage/>
                </RoleBasedRoute>)
            },
            {
                path: "/settings",
                element: (<RoleBasedRoute allowedRoles={['admin', 'teacher', 'student', 'parent']}>
                    <SettingsPage/>
                </RoleBasedRoute>)
            }
        ]
    },
    {
        path: "/login",
        element: <Login/>,
        action: loginAction,
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