import React from 'react';
import {Clock, Mail, X} from 'lucide-react';
import {Button} from "@/components/ui/Button";
import {getStatusColor} from "@/utils/utils";
import {Student} from "@/types";

interface Props {
    students: Student[] | null;
    onUpdateStatus: (studentId: string, newStatus: Student['status']) => void;
    onSendEmail: (email: string) => void;
}

export const StudentAttendanceList: React.FC<Props> = (
    {
        students,
        onUpdateStatus,
        onSendEmail
    }) => {
    return (
        <div className="bg-white rounded-lg shadow-sm">
            <div className="p-6 border-b border-[#ECF0F1]">
                <h2 className="text-lg font-medium text-[#2C3E50]">Student Attendance</h2>
            </div>
            <div className="p-6">
                <div className="space-y-4">
                    {students != null ? students.map(student => (
                        <div key={student.userId} className="flex items-center justify-between p-4 bg-[#F8FAFC] rounded-lg">
                            <div className="flex items-center space-x-4">
                                <div
                                    className="h-10 w-10 rounded-full bg-[#1ABC9C] flex items-center justify-center text-white font-medium">
                                    {student.avatar}
                                </div>
                                <div>
                                    <h3 className="font-medium text-[#2C3E50]">{student.firstName} {student.lastName}</h3>
                                    <p className="text-sm text-[#7F8C8D]">{student.email}</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-2">
                                <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor(student.status)}`}>
                                    {student.status.charAt(0).toUpperCase() + student.status.slice(1)}
                                </span>

                                {/*visible que pour Admin*/}
                                {/*<Button
                                    variant="secondary"
                                    size="sm"
                                    onClick={() => onUpdateStatus(student.userId, 'present')}
                                    className={student.status === 'present' ? 'bg-[#1ABC9C] text-white' : ''}
                                >
                                    <Check className="h-4 w-4"/>
                                </Button>*/}

                                <Button
                                    variant="secondary"
                                    size="sm"
                                    onClick={() => onUpdateStatus(student.userId, 'late')}
                                    className={student.status === 'late' ? 'bg-[#F1C40F] text-white' : ''}
                                >
                                    <Clock className="h-4 w-4"/>
                                </Button>

                                <Button
                                    variant="secondary"
                                    size="sm"
                                    onClick={() => onUpdateStatus(student.userId, 'absent')}
                                    className={student.status === 'absent' ? 'bg-[#E74C3C] text-white' : ''}
                                >
                                    <X className="h-4 w-4"/>
                                </Button>

                                <Button
                                    variant="secondary"
                                    size="sm"
                                    onClick={() => onSendEmail(student.email)}
                                >
                                    <Mail className="h-4 w-4"/>
                                </Button>
                            </div>
                        </div>
                    )) : null}
                </div>
            </div>
        </div>
    );
};
