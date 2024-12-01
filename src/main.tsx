import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {RouterProvider} from "react-router";

import {Routes} from "@/routes";
import './index.css'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={Routes}/>
    </StrictMode>,
)
