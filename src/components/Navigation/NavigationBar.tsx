import {FC} from 'react';
import {Link, useLocation} from 'react-router';
import {getNavigationItems} from '@/utils/navigationConfig';
import {useAuth} from '@/contexts/AuthContext';

export const NavigationBar: FC = () => {
    const location = useLocation();
    const {user} = useAuth();
    const navigationItems = getNavigationItems(user?.roles);

    const isActive = (path: string) => location.pathname === path;

    return (<nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#ECF0F1] px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-around">
            {navigationItems.map((item, index) => (
                <Link
                    key={index}
                    to={item.path}
                    className={`flex flex-col items-center space-y-1 ${
                        isActive(item.path) ? 'text-[#1ABC9C]' : 'text-[#7F8C8D]'
                    }`}
                >
                    <item.icon className="h-6 w-6"/>
                    <span className="text-xs">{item.label}</span>
                </Link>
            ))}
        </div>
    </nav>);
};
