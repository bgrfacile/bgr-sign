import React, {useState} from 'react';
import {Calendar, Check, Clock, Download, FileText, X} from 'lucide-react';
import {Button} from "@/components/ui/Button.tsx";


export const AttendancePage: React.FC = () => {
    // const {user} = useAuth();
    const [selectedMonth] = useState('March 2024');

    // Mock data for student's attendance history
    const attendanceHistory = [
        {
            id: '1',
            date: '2024-03-20',
            subject: 'Mathematics 101',
            time: '9:00 AM',
            status: 'present',
            signedAt: '8:55 AM',
            teacher: 'Prof. Smith'
        },
        {
            id: '2',
            date: '2024-03-19',
            subject: 'Physics 201',
            time: '11:00 AM',
            status: 'late',
            signedAt: '11:10 AM',
            justification: 'Traffic delay',
            teacher: 'Dr. Johnson'
        },
        {
            id: '3',
            date: '2024-03-18',
            subject: 'Computer Science 301',
            time: '2:00 PM',
            status: 'absent',
            justification: 'Medical appointment',
            justificationStatus: 'approved',
            teacher: 'Prof. Brown'
        }
    ];

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

    const getStatusIcon = (status: string) => {
        switch (status) {
            case 'present':
                return <Check className="h-4 w-4"/>;
            case 'absent':
                return <X className="h-4 w-4"/>;
            case 'late':
                return <Clock className="h-4 w-4"/>;
            default:
                return null;
        }
    };

    // Calculate attendance statistics
    const totalClasses = attendanceHistory.length;
    const presentClasses = attendanceHistory.filter(record => record.status === 'present').length;
    const lateClasses = attendanceHistory.filter(record => record.status === 'late').length;
    const absentClasses = attendanceHistory.filter(record => record.status === 'absent').length;
    const attendanceRate = ((presentClasses + lateClasses) / totalClasses) * 100;

    return (
        <div className="min-h-screen bg-[#F8FAFC] pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-8">
                    <h1 className="text-2xl font-bold text-[#2C3E50] mb-4">My Attendance</h1>

                    {/* Statistics Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-[#7F8C8D]">Attendance Rate</h3>
                                <Calendar className="h-5 w-5 text-[#1ABC9C]"/>
                            </div>
                            <div className="flex items-end space-x-2">
                <span className="text-3xl font-bold text-[#2C3E50]">
                  {attendanceRate.toFixed(1)}%
                </span>
                                <span className="text-sm text-[#1ABC9C]">This Month</span>
                            </div>
                            <div className="mt-4 h-2 bg-[#ECF0F1] rounded-full">
                                <div
                                    className="h-full bg-[#1ABC9C] rounded-full"
                                    style={{width: `${attendanceRate}%`}}
                                ></div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-[#7F8C8D]">Present</h3>
                                <Check className="h-5 w-5 text-[#1ABC9C]"/>
                            </div>
                            <div className="flex items-end space-x-2">
                                <span className="text-3xl font-bold text-[#2C3E50]">{presentClasses}</span>
                                <span className="text-sm text-[#1ABC9C]">Classes</span>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-[#7F8C8D]">Late</h3>
                                <Clock className="h-5 w-5 text-[#F1C40F]"/>
                            </div>
                            <div className="flex items-end space-x-2">
                                <span className="text-3xl font-bold text-[#2C3E50]">{lateClasses}</span>
                                <span className="text-sm text-[#F1C40F]">Classes</span>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-[#7F8C8D]">Absent</h3>
                                <X className="h-5 w-5 text-[#E74C3C]"/>
                            </div>
                            <div className="flex items-end space-x-2">
                                <span className="text-3xl font-bold text-[#2C3E50]">{absentClasses}</span>
                                <span className="text-sm text-[#E74C3C]">Classes</span>
                            </div>
                        </div>
                    </div>

                    {/* Attendance History */}
                    <div className="bg-white rounded-lg shadow-sm">
                        <div className="p-6 border-b border-[#ECF0F1]">
                            <div className="flex justify-between items-center">
                                <h2 className="text-xl font-bold text-[#2C3E50]">Attendance History</h2>
                                <div className="flex gap-2">
                                    <Button variant="secondary" className="flex items-center gap-2">
                                        <Calendar className="h-4 w-4"/>
                                        {selectedMonth}
                                    </Button>
                                    <Button variant="secondary" className="flex items-center gap-2">
                                        <Download className="h-4 w-4"/>
                                        Export
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <div className="p-6">
                            <div className="space-y-4">
                                {attendanceHistory.map((record) => (
                                    <div
                                        key={record.id}
                                        className="flex items-center justify-between p-4 bg-[#F8FAFC] rounded-lg"
                                    >
                                        <div className="flex-1">
                                            <div className="flex items-center gap-4">
                                                <div className={`p-2 rounded-lg ${getStatusColor(record.status)}`}>
                                                    {getStatusIcon(record.status)}
                                                </div>
                                                <div>
                                                    <h3 className="font-medium text-[#2C3E50]">{record.subject}</h3>
                                                    <p className="text-sm text-[#7F8C8D]">
                                                        {record.teacher} • {record.date} • {record.time}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-4">
                                            {record.signedAt && (
                                                <div className="text-sm text-[#7F8C8D]">
                                                    Signed at {record.signedAt}
                                                </div>
                                            )}
                                            {record.justification && (
                                                <div className="flex items-center gap-2">
                                                    <FileText className="h-4 w-4 text-[#7F8C8D]"/>
                                                    <span className="text-sm text-[#7F8C8D]">
                            {record.justification}
                                                        {record.justificationStatus && (
                                                            <span className={`ml-2 ${
                                                                record.justificationStatus === 'approved'
                                                                    ? 'text-[#1ABC9C]'
                                                                    : 'text-[#E74C3C]'
                                                            }`}>
                                ({record.justificationStatus})
                              </span>
                                                        )}
                          </span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};