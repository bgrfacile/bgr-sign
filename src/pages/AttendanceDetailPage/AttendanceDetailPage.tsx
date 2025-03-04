import React from 'react';
import {Link, useParams} from 'react-router';
import {ArrowLeft, Download, Mail} from 'lucide-react';
import {Button} from "@/components/ui/Button.tsx";


interface AttendanceRecord {
    id: string;
    date: string;
    time: string;
    student: {
        name: string;
        email: string;
        avatar: string;
    };
    status: 'present' | 'absent' | 'late';
    justification?: string;
}

export const AttendanceDetailPage: React.FC = () => {
    const {recordId} = useParams();

    // Mock data for the attendance record
    const record = {
        id: recordId,
        subject: 'Mathematics 101',
        date: '2024-03-20',
        time: '9:00 AM',
        room: 'Room 301',
        teacher: 'Prof. Smith',
        totalStudents: 25,
        present: 22,
        absent: 2,
        late: 1,
        students: [
            {
                id: '1',
                date: '2024-03-20',
                time: '8:55 AM',
                student: {
                    name: 'Alice Johnson',
                    email: 'alice@example.com',
                    avatar: 'AJ'
                },
                status: 'present'
            },
            {
                id: '2',
                date: '2024-03-20',
                time: '9:20 AM',
                student: {
                    name: 'Bob Smith',
                    email: 'bob@example.com',
                    avatar: 'BS'
                },
                status: 'late',
                justification: 'Traffic delay'
            },
            {
                id: '3',
                date: '2024-03-20',
                time: '-',
                student: {
                    name: 'Charlie Brown',
                    email: 'charlie@example.com',
                    avatar: 'CB'
                },
                status: 'absent'
            }
        ] as AttendanceRecord[]
    };

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

    /*    const getStatusIcon = (status: string) => {
            switch (status) {
                case 'present':
                    return <Check className="h-4 w-4" />;
                case 'absent':
                    return <X className="h-4 w-4" />;
                case 'late':
                    return <Clock className="h-4 w-4" />;
                default:
                    return null;
            }
        };*/

    return (
        <div className="min-h-screen bg-[#F8FAFC] pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-8">
                    <Link to="/attendance"
                          className="inline-flex items-center text-[#7F8C8D] hover:text-[#2C3E50] mb-4">
                        <ArrowLeft className="h-4 w-4 mr-2"/>
                        Back to Attendance
                    </Link>

                    <div className="flex justify-between items-start">
                        <div>
                            <h1 className="text-2xl font-bold text-[#2C3E50]">{record.subject}</h1>
                            <p className="text-[#7F8C8D] mt-1">
                                {record.room} • {record.date} • {record.time}
                            </p>
                        </div>
                        <Button
                            variant="secondary"
                            className="flex items-center gap-2"
                        >
                            <Download className="h-4 w-4"/>
                            Export Report
                        </Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Stats Section */}
                    <div className="md:col-span-1">
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <h2 className="text-lg font-medium text-[#2C3E50] mb-4">Attendance Summary</h2>
                            <div className="space-y-4">
                                <div className="p-4 rounded-lg bg-[#1ABC9C]/10">
                                    <div className="flex items-center justify-between">
                                        <span className="text-[#2C3E50]">Present</span>
                                        <span className="text-[#1ABC9C] font-bold">{record.present}</span>
                                    </div>
                                    <div className="mt-2 h-2 bg-white rounded-full">
                                        <div
                                            className="h-full bg-[#1ABC9C] rounded-full"
                                            style={{width: `${(record.present / record.totalStudents) * 100}%`}}
                                        ></div>
                                    </div>
                                </div>

                                <div className="p-4 rounded-lg bg-[#E74C3C]/10">
                                    <div className="flex items-center justify-between">
                                        <span className="text-[#2C3E50]">Absent</span>
                                        <span className="text-[#E74C3C] font-bold">{record.absent}</span>
                                    </div>
                                    <div className="mt-2 h-2 bg-white rounded-full">
                                        <div
                                            className="h-full bg-[#E74C3C] rounded-full"
                                            style={{width: `${(record.absent / record.totalStudents) * 100}%`}}
                                        ></div>
                                    </div>
                                </div>

                                <div className="p-4 rounded-lg bg-[#F1C40F]/10">
                                    <div className="flex items-center justify-between">
                                        <span className="text-[#2C3E50]">Late</span>
                                        <span className="text-[#F1C40F] font-bold">{record.late}</span>
                                    </div>
                                    <div className="mt-2 h-2 bg-white rounded-full">
                                        <div
                                            className="h-full bg-[#F1C40F] rounded-full"
                                            style={{width: `${(record.late / record.totalStudents) * 100}%`}}
                                        ></div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 pt-6 border-t border-[#ECF0F1]">
                                <div className="flex items-center justify-between text-sm text-[#7F8C8D]">
                                    <span>Teacher</span>
                                    <span>{record.teacher}</span>
                                </div>
                                <div className="flex items-center justify-between text-sm text-[#7F8C8D] mt-2">
                                    <span>Total Students</span>
                                    <span>{record.totalStudents}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Student List */}
                    <div className="md:col-span-2">
                        <div className="bg-white rounded-lg shadow-sm">
                            <div className="p-6 border-b border-[#ECF0F1]">
                                <h2 className="text-lg font-medium text-[#2C3E50]">Student Details</h2>
                            </div>
                            <div className="p-6">
                                <div className="space-y-4">
                                    {record.students.map((student) => (
                                        <div key={student.id}
                                             className="flex items-center justify-between p-4 bg-[#F8FAFC] rounded-lg">
                                            <div className="flex items-center space-x-4">
                                                <div
                                                    className="h-10 w-10 rounded-full bg-[#1ABC9C] flex items-center justify-center text-white font-medium">
                                                    {student.student.avatar}
                                                </div>
                                                <div>
                                                    <h3 className="font-medium text-[#2C3E50]">{student.student.name}</h3>
                                                    <p className="text-sm text-[#7F8C8D]">{student.time}</p>
                                                </div>
                                            </div>

                                            <div className="flex items-center space-x-4">
                        <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor(student.status)}`}>
                          {student.status.charAt(0).toUpperCase() + student.status.slice(1)}
                        </span>

                                                {student.justification && (
                                                    <span className="text-sm text-[#7F8C8D]">
                            {student.justification}
                          </span>
                                                )}

                                                <Button
                                                    variant="secondary"
                                                    size="sm"
                                                    onClick={() => window.location.href = `mailto:${student.student.email}`}
                                                >
                                                    <Mail className="h-4 w-4"/>
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