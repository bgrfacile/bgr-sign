import {FC} from 'react';
import {useAuth} from "@/contexts/AuthContext.tsx";
import {StudentDashboard} from "@/pages/Dashboard/StudentDashboard.tsx";
import {TeacherDashboard} from "@/pages/Dashboard/TeacherDashboard.tsx";
import {useChangeDocumentTitle} from "@/hooks/use-change-document-title.ts";


export const Dashboard: FC = () => {
    useChangeDocumentTitle("Dashboard");
    const {user, isLoading} = useAuth();
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!user) {
        return <div>Aucun utilisateur connecté</div>;
    }

    // Détermination du rôle principal (priorité à 'student' puis 'teacher')
    const primaryRole = user.roles.includes('student')
        ? 'student'
        : user.roles.includes('teacher')
            ? 'teacher'
            : 'other';

    switch (primaryRole) {
        case 'student':
            return <StudentDashboard/>;
        case 'teacher':
            return <TeacherDashboard/>;
        default:
            return <div>Dashboard not available for your role</div>;
    }
};