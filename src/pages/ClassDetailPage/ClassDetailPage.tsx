import React, { useState } from 'react';
import {Mail, Clock, Check, X, ArrowLeft, Link} from 'lucide-react';
import {useParams} from "react-router";
import {Button} from "@/components/ui/Button.tsx";


interface Student {
    id: string;
    name: string;
    status: 'present' | 'absent' | 'late' | 'pending';
    email: string;
    avatar: string;
}

export const ClassDetailPage: React.FC = () => {
    const { classId } = useParams();
    const [students, setStudents] = useState<Student[]>([
        {
            id: '1',
            name: 'Alice Johnson',
            status: 'present',
            email: 'alice@example.com',
            avatar: 'AJ'
        },
        {
            id: '2',
            name: 'Bob Smith',
            status: 'absent',
            email: 'bob@example.com',
            avatar: 'BS'
        },
        {
            id: '3',
            name: 'Charlie Brown',
            status: 'late',
            email: 'charlie@example.com',
            avatar: 'CB'
        },
        {
            id: '4',
            name: 'Diana Prince',
            status: 'pending',
            email: 'diana@example.com',
            avatar: 'DP'
        }
    ]);

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'present':
                return 'text-[#1ABC9C] bg-[#1ABC9C]/10';
            case 'absent':
                return 'text-[#E74C3C] bg-[#E74C3C]/10';
            case 'late':
                return 'text-[#F1C40F] bg-[#F1C40F]/10';
            default:
                return 'text-[#7F8C8D] bg-[#7F8C8D]/10';
        }
    };

    const updateStudentStatus = (studentId: string, newStatus: Student['status']) => {
        setStudents(students.map(student =>
            student.id === studentId ? { ...student, status: newStatus } : student
        ));
    };

    const sendEmail = (email: string) => {
        console.log(`Sending email to ${email}`);
        // Implement email sending logic
    };

    return (
        <div className="min-h-screen bg-[#F8FAFC] pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-8">
                    <Link to="/dashboard" className="inline-flex items-center text-[#7F8C8D] hover:text-[#2C3E50] mb-4">
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Back to Dashboard
                    </Link>

                    <div className="flex justify-between items-start">
                        <div>
                            <h1 className="text-2xl font-bold text-[#2C3E50]">Mathematics 101</h1>
                            <p className="text-[#7F8C8D] mt-1">Room 301 • Monday, 9:00 AM</p>
                        </div>
                        <Button>End Class</Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* QR Code Section */}
                    <div className="md:col-span-1">
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <h2 className="text-lg font-medium text-[#2C3E50] mb-4">Attendance QR Code</h2>
                            <div className="aspect-square bg-white p-4 rounded-lg border-2 border-[#ECF0F1] flex items-center justify-center">
                                <img
                                    src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=class_${classId}_${Date.now()}`}
                                    alt="Class QR Code"
                                    className="w-full h-full"
                                />
                            </div>
                            <p className="text-sm text-[#7F8C8D] mt-4 text-center">
                                Students can scan this QR code to mark their attendance
                            </p>
                        </div>

                        {/* Quick Stats */}
                        <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
                            <h2 className="text-lg font-medium text-[#2C3E50] mb-4">Class Stats</h2>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 rounded-lg bg-[#1ABC9C]/10 text-center">
                                    <div className="text-2xl font-bold text-[#1ABC9C]">
                                        {students.filter(s => s.status === 'present').length}
                                    </div>
                                    <div className="text-sm text-[#2C3E50]">Present</div>
                                </div>
                                <div className="p-4 rounded-lg bg-[#E74C3C]/10 text-center">
                                    <div className="text-2xl font-bold text-[#E74C3C]">
                                        {students.filter(s => s.status === 'absent').length}
                                    </div>
                                    <div className="text-sm text-[#2C3E50]">Absent</div>
                                </div>
                                <div className="p-4 rounded-lg bg-[#F1C40F]/10 text-center">
                                    <div className="text-2xl font-bold text-[#F1C40F]">
                                        {students.filter(s => s.status === 'late').length}
                                    </div>
                                    <div className="text-sm text-[#2C3E50]">Late</div>
                                </div>
                                <div className="p-4 rounded-lg bg-[#7F8C8D]/10 text-center">
                                    <div className="text-2xl font-bold text-[#7F8C8D]">
                                        {students.filter(s => s.status === 'pending').length}
                                    </div>
                                    <div className="text-sm text-[#2C3E50]">Pending</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Student List */}
                    <div className="md:col-span-2">
                        <div className="bg-white rounded-lg shadow-sm">
                            <div className="p-6 border-b border-[#ECF0F1]">
                                <h2 className="text-lg font-medium text-[#2C3E50]">Student Attendance</h2>
                            </div>
                            <div className="p-6">
                                <div className="space-y-4">
                                    {students.map(student => (
                                        <div key={student.id} className="flex items-center justify-between p-4 bg-[#F8FAFC] rounded-lg">
                                            <div className="flex items-center space-x-4">
                                                <div className="h-10 w-10 rounded-full bg-[#1ABC9C] flex items-center justify-center text-white font-medium">
                                                    {student.avatar}
                                                </div>
                                                <div>
                                                    <h3 className="font-medium text-[#2C3E50]">{student.name}</h3>
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
                                                    onClick={() => updateStudentStatus(student.id, 'present')}
                                                    className={student.status === 'present' ? 'bg-[#1ABC9C] text-white' : ''}
                                                >
                                                    <Check className="h-4 w-4" />
                                                </Button>

                                                <Button
                                                    variant="secondary"
                                                    size="sm"
                                                    onClick={() => updateStudentStatus(student.id, 'late')}
                                                    className={student.status === 'late' ? 'bg-[#F1C40F] text-white' : ''}
                                                >
                                                    <Clock className="h-4 w-4" />
                                                </Button>

                                                <Button
                                                    variant="secondary"
                                                    size="sm"
                                                    onClick={() => updateStudentStatus(student.id, 'absent')}
                                                    className={student.status === 'absent' ? 'bg-[#E74C3C] text-white' : ''}
                                                >
                                                    <X className="h-4 w-4" />
                                                </Button>

                                                <Button
                                                    variant="secondary"
                                                    size="sm"
                                                    onClick={() => sendEmail(student.email)}
                                                >
                                                    <Mail className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};