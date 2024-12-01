import {FC} from "react";
import { Bell, UserCircle } from 'lucide-react';

export const Header: FC = () => {
    return (<>
        <header className="bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <h1 className="text-2xl font-bold text-blue-600">BgrSign</h1>
                    </div>

                    <div className="flex items-center space-x-4">
                        <button className="p-2 text-gray-500 hover:text-gray-700">
                            <Bell className="w-6 h-6"/>
                        </button>
                        <button className="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
                            <UserCircle className="w-8 h-8"/>
                            <span className="hidden md:block font-medium">John Doe</span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    </>);
}