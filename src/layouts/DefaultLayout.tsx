import { FC, useState } from 'react';
import {
    Bell,
    ChevronDown,
    LogOut,
    Settings
} from 'lucide-react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router';
import { useAuth } from '../contexts/AuthContext';
import { Notifications } from '@/components/Notifications';
import { MOCK_NOTIFICATIONS } from '@/data/Mock';
import {getNavigationItems} from "@/utils/navigationConfig.ts";
import {Header} from "@/components/Header/Header.tsx";
import {NavigationBar} from "@/components/Navigation/NavigationBar.tsx";

export const DefaultLayout: FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { user, logout } = useAuth();
    const [showProfileMenu, setShowProfileMenu] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);
    const [notifications, setNotifications] = useState(MOCK_NOTIFICATIONS);

    const isActive = (path: string) => location.pathname === path;

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    const handleMarkAsRead = (id: string) => {
        setNotifications(notifications.map(n =>
            n.id === id ? { ...n, read: true } : n
        ));
    };

    const unreadCount = notifications.filter(n => !n.read).length;

    // Récupération des éléments de navigation en fonction des rôles de l’utilisateur
    const navigationItems = getNavigationItems(user?.roles);

    return (
        <div className="min-h-screen bg-[#F8FAFC]">
            <Header unreadCount={unreadCount} onMarkAsRead={handleMarkAsRead} />
            {/* Header */}
            {/*<header className="bg-white border-b border-[#ECF0F1] py-4">*/}
            {/*    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">*/}
            {/*        <div className="flex justify-between items-center">*/}
            {/*            <div className="flex items-center space-x-4">*/}
            {/*                <div className="relative">*/}
            {/*                    <div*/}
            {/*                        onClick={() => setShowProfileMenu(!showProfileMenu)}*/}
            {/*                        className="group flex items-center space-x-2 cursor-pointer"*/}
            {/*                    >*/}
            {/*                        <div className="h-10 w-10 rounded-full bg-[#1ABC9C] flex items-center justify-center text-white">*/}
            {/*                            {user?.firstName?.[0]}*/}
            {/*                        </div>*/}
            {/*                        <div>*/}
            {/*                            <h1 className="text-2xl font-bold text-[#2C3E50]">*/}
            {/*                                Hello, {user?.firstName}!*/}
            {/*                            </h1>*/}
            {/*                            <p className="text-[#7F8C8D]">*/}
            {/*                                {user?.roles.includes('student')*/}
            {/*                                    ? 'View your attendance'*/}
            {/*                                    : 'Manage your classes and attendance'}*/}
            {/*                            </p>*/}
            {/*                        </div>*/}
            {/*                        <ChevronDown className="h-4 w-4 text-[#7F8C8D]" />*/}
            {/*                    </div>*/}

            {/*                     Profile Dropdown Menu */}
            {/*                    {showProfileMenu && (*/}
            {/*                        <div className="absolute top-full left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">*/}
            {/*                            <div className="py-1">*/}
            {/*                                <Link*/}
            {/*                                    to="/settings"*/}
            {/*                                    className="flex items-center px-4 py-2 text-sm text-[#2C3E50] hover:bg-[#F8FAFC]"*/}
            {/*                                    onClick={() => setShowProfileMenu(false)}*/}
            {/*                                >*/}
            {/*                                    <Settings className="h-4 w-4 mr-2" />*/}
            {/*                                    Settings*/}
            {/*                                </Link>*/}
            {/*                                <button*/}
            {/*                                    onClick={handleLogout}*/}
            {/*                                    className="flex items-center w-full px-4 py-2 text-sm text-[#E74C3C] hover:bg-[#F8FAFC]"*/}
            {/*                                >*/}
            {/*                                    <LogOut className="h-4 w-4 mr-2" />*/}
            {/*                                    Sign Out*/}
            {/*                                </button>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                    )}*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="relative">*/}
            {/*                <button*/}
            {/*                    className="p-2 text-[#7F8C8D] hover:text-[#34495E] relative"*/}
            {/*                    onClick={() => setShowNotifications(!showNotifications)}*/}
            {/*                >*/}
            {/*                    <Bell className="h-6 w-6" />*/}
            {/*                    {unreadCount > 0 && (*/}
            {/*                        <span className="absolute -top-1 -right-1 h-5 w-5 bg-[#E74C3C] rounded-full flex items-center justify-center text-white text-xs">*/}
            {/*        {unreadCount}*/}
            {/*      </span>*/}
            {/*                    )}*/}
            {/*                </button>*/}
            {/*                <Notifications*/}
            {/*                    notifications={notifications}*/}
            {/*                    isOpen={showNotifications}*/}
            {/*                    onClose={() => setShowNotifications(false)}*/}
            {/*                    onMarkAsRead={handleMarkAsRead}*/}
            {/*                />*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</header>*/}

            {/* Main Content */}
            <main>
                <Outlet />
            </main>

            <NavigationBar />
            {/* Bottom Navigation */}
            {/*<nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#ECF0F1] px-6 py-4">
                <div className="max-w-7xl mx-auto flex justify-around">
                    {navigationItems.map((item, index) => (
                        <Link
                            key={index}
                            to={item.path}
                            className={`flex flex-col items-center space-y-1 ${
                                isActive(item.path) ? 'text-[#1ABC9C]' : 'text-[#7F8C8D]'
                            }`}
                        >
                            <item.icon className="h-6 w-6" />
                            <span className="text-xs">{item.label}</span>
                        </Link>
                    ))}
                </div>
            </nav>*/}
        </div>
    );
};
