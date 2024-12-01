import {createBrowserRouter, NonIndexRouteObject} from "react-router";
import {SiteMapLayout} from "@/layouts/SiteMapLayout.tsx";
import {HomePage} from "@/pages/HomePage.tsx";

const routesList: NonIndexRouteObject[] = [
    {
        id: "main",
        path: "/",
        element: <SiteMapLayout/>,
        children: [
            {
                index: true,
                element: <HomePage/>
            }
        ]
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