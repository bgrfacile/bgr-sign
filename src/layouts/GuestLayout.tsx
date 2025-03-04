import {FC} from "react";
import {Outlet} from "react-router";

export const GuestLayout: FC = () => {
    return (
        <>
            <main className="min-h-screen bg-gray-50">
                <div className="max-w-7xl mx-auto flex-grow px-4 sm:px-6 lg:px-8 py-8">
                    <Outlet/>
                </div>
            </main>
        </>
    );
}