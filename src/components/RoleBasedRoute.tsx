import React from 'react';
import {Navigate} from 'react-router';
import {useAuth} from '@/contexts/AuthContext';
import {UserRoleResponse} from "@/models/UserRoleResponse.ts";

interface RoleBasedRouteProps {
    children: React.ReactNode;
    allowedRoles: UserRoleResponse[];
}

export const RoleBasedRoute: React.FC<RoleBasedRouteProps> = ({ children, allowedRoles }) => {
    const { user, isLoading } = useAuth();

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-[#7F8C8D]">Loading...</div>
            </div>
        );
    }

    if (!user) {
        // Si l'utilisateur n'est pas authentifié, on redirige vers la page de login.
        return <Navigate to="/login" replace />;
    }

    // Vérifier si l'utilisateur a au moins un rôle parmi ceux autorisés
    const hasAccess = user.roles.some(role => allowedRoles.includes(role));
    if (!hasAccess) {
        // Vous pouvez rediriger vers une page d'erreur ou afficher un message "Accès refusé"
        return <div>Access Denied</div>;
    }

    return <>{children}</>;
};
