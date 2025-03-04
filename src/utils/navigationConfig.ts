import { Home, ClipboardList, PieChart, Settings } from 'lucide-react';
import type { FC } from 'react';
import type { UserRoleResponse } from '@/models/UserRoleResponse';

export interface NavigationItem {
    icon: FC<{ className?: string }>;
    label: string;
    path: string;
}

/**
 * Retourne la liste des éléments de navigation en fonction des rôles de l’utilisateur.
 *
 * @param roles - Tableau de rôles de l’utilisateur
 * @returns NavigationItem[]
 */
export const getNavigationItems = (roles: UserRoleResponse[] | undefined): NavigationItem[] => {
    if (roles && roles.includes('student')) {
        return [
            { icon: Home, label: 'Home', path: '/dashboard' },
            { icon: ClipboardList, label: 'My Attendance', path: '/attendance' },
            { icon: Settings, label: 'Settings', path: '/settings' }
        ];
    }
    return [
        { icon: Home, label: 'Home', path: '/dashboard' },
        { icon: ClipboardList, label: 'Attendance', path: '/attendance' },
        { icon: PieChart, label: 'Reports', path: '/reports' },
        { icon: Settings, label: 'Settings', path: '/settings' }
    ];
};
