import React, {useCallback} from 'react';
import {Clock, Mail, X} from 'lucide-react';
import {Button} from "@/components/ui/Button";
import {getStatusColor} from "@/utils/utils";
import {Student} from "@/types";
import {StudentAvatar} from "@/pages/ClassDetailPage/components/StudentAvatar.tsx";

interface Props {
    students: Student[];
}

export const StudentAttendanceList: React.FC<Props> = ({students}) => {

    // Fonctions locales pour simuler la mise à jour du statut et l'envoi d'un email
    const handleUpdateStatus = useCallback((studentId: string, newStatus: Student['status']) => {
        console.log(`Mise à jour du statut de l'étudiant ${studentId} vers : ${newStatus}`);
        // Ici, vous pouvez mettre à jour l'état local ou simuler un appel API
    }, []);

    const handleSendEmail = useCallback((email: string) => {
        console.log(`Envoi d'email à : ${email}`);
        // Ici, vous pouvez simuler l'ouverture d'un formulaire de contact ou autre
    }, []);

    return (
        <div className="bg-white rounded-lg shadow-sm">
            <div className="p-6 border-b border-[#ECF0F1]">
                <h2 className="text-lg font-medium text-[#2C3E50]">Student Attendance</h2>
            </div>
            <div className="p-6">
                <div className="space-y-4">
                    {students.map(student => (
                        <div
                            key={student.userId}
                            className="flex items-center justify-between p-4 bg-[#F8FAFC] rounded-lg"
                        >
                            <div className="flex items-center space-x-4">
                                <StudentAvatar
                                    profilePictureUrl={student.profilePictureUrl}
                                    firstName={student.firstName}
                                    lastName={student.lastName}
                                />
                                <div>
                                    <h3 className="font-medium text-[#2C3E50]">
                                        {student.firstName} {student.lastName}
                                    </h3>
                                    <p className="text-sm text-[#7F8C8D]">{student.email}</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-2">
                <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor(student.status)}`}>
                  {student.status.charAt(0).toUpperCase() + student.status.slice(1)}
                </span>
                                <Button
                                    variant="secondary"
                                    size="sm"
                                    onClick={() => handleUpdateStatus(student.userId, 'late')}
                                    className={student.status === 'late' ? 'bg-[#F1C40F] text-white' : ''}
                                >
                                    <Clock className="h-4 w-4"/>
                                </Button>
                                <Button
                                    variant="secondary"
                                    size="sm"
                                    onClick={() => handleUpdateStatus(student.userId, 'absent')}
                                    className={student.status === 'absent' ? 'bg-[#E74C3C] text-white' : ''}
                                >
                                    <X className="h-4 w-4"/>
                                </Button>
                                <Button
                                    variant="secondary"
                                    size="sm"
                                    onClick={() => handleSendEmail(student.email)}
                                >
                                    <Mail className="h-4 w-4"/>
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
