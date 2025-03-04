import React from 'react';
import { Navigate } from 'react-router';
import { useAuth } from '@/contexts/AuthContext';
import { UserRoleResponse } from "@/models/UserRoleResponse.ts";

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

    // Vérifier si l'utilisateur a au moins un rôle parmi ceux autorisés
    const hasAccess = user?.roles.some(role => allowedRoles.includes(role));
    if (!user || !hasAccess) {
        return <Navigate to="/login" replace />;
    }

    return <>{children}</>;
};
