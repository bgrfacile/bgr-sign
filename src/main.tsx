import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {RouterProvider} from "react-router";

import {Routes} from "@/routes";
import './index.css'
import {AuthProvider} from "@/contexts/AuthContext.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <AuthProvider>
            <RouterProvider router={Routes} />
        </AuthProvider>
    </StrictMode>,
)
