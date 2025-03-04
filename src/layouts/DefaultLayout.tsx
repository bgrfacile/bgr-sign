import {FC} from 'react';
import {Outlet} from 'react-router';
import {Header} from "@/components/Header/Header.tsx";
import {NavigationBar} from "@/components/Navigation/NavigationBar.tsx";

export const DefaultLayout: FC = () => {
    return (
        <div className="min-h-screen bg-[#F8FAFC]">
            <Header/>
            <main>
                <Outlet />
            </main>
            <NavigationBar />
        </div>
    );
};
