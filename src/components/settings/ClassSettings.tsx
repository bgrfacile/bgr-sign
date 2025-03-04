import React, { useState } from 'react';
import { Plus, Users, BookOpen, Clock, X } from 'lucide-react';
import {Button} from "@/components/ui/Button.tsx";

interface Student {
    id: string;
    name: string;
    email: string;
    enrollmentDate: string;
    attendance: {
        present: number;
        absent: number;
        late: number;
    };
}

interface ClassData {
    id: string;
    name: string;
    students: Student[];
    schedule: string;
    room: string;
}

export const ClassSettings: React.FC = () => {
    const [selectedClass, setSelectedClass] = useState<ClassData | null>(null);

    // Mock data for classes
    const classes: ClassData[] = [
        {
            id: '1',
            name: 'Mathematics 101',
            schedule: 'Mon, Wed, Fri 9:00 AM',
            room: 'Room 301',
            students: [
                {
                    id: '1',
                    name: 'Alice Johnson',
                    email: 'alice@example.com',
                    enrollmentDate: '2024-01-15',
                    attendance: { present: 25, absent: 2, late: 3 }
                },
                {
                    id: '2',
                    name: 'Bob Smith',
                    email: 'bob@example.com',
                    enrollmentDate: '2024-01-15',
                    attendance: { present: 22, absent: 5, late: 3 }
                },
                {
                    id: '3',
                    name: 'Charlie Brown',
                    email: 'charlie@example.com',
                    enrollmentDate: '2024-01-15',
                    attendance: { present: 28, absent: 1, late: 1 }
                }
            ]
        },
        {
            id: '2',
            name: 'Physics 201',
            schedule: 'Tue, Thu 11:00 AM',
            room: 'Room 405',
            students: [
                {
                    id: '4',
                    name: 'Diana Prince',
                    email: 'diana@example.com',
                    enrollmentDate: '2024-01-15',
                    attendance: { present: 26, absent: 3, late: 1 }
                },
                {
                    id: '5',
                    name: 'Edward Norton',
                    email: 'edward@example.com',
                    enrollmentDate: '2024-01-15',
                    attendance: { present: 24, absent: 4, late: 2 }
                }
            ]
        },
        {
            id: '3',
            name: 'Computer Science 301',
            schedule: 'Mon, Wed 2:00 PM',
            room: 'Lab 201',
            students: [
                {
                    id: '6',
                    name: 'Frank Castle',
                    email: 'frank@example.com',
                    enrollmentDate: '2024-01-15',
                    attendance: { present: 27, absent: 2, late: 1 }
                },
                {
                    id: '7',
                    name: 'Grace Kelly',
                    email: 'grace@example.com',
                    enrollmentDate: '2024-01-15',
                    attendance: { present: 29, absent: 1, late: 0 }
                }
            ]
        }
    ];

    const getAttendancePercentage = (attendance: Student['attendance']) => {
        const total = attendance.present + attendance.absent + attendance.late;
        return ((attendance.present / total) * 100).toFixed(1);
    };

    return (
        <>
            <div className="p-6 border-b border-[#ECF0F1]">
                <div className="flex justify-between items-center">
                    <div>
                        <h2 className="text-xl font-bold text-[#2C3E50]">Class Settings</h2>
                        <p className="text-[#7F8C8D] mt-1">
                            Manage your classes and enrolled students
                        </p>
                    </div>
                    <Button className="flex items-center gap-2">
                        <Plus className="h-4 w-4" />
                        Add Class
                    </Button>
                </div>
            </div>

            <div className="p-6 space-y-6">
                {/* Class List */}
                <div className="space-y-6">
                    {classes.map((classItem) => (
                        <div
                            key={classItem.id}
                            className="bg-white rounded-lg shadow-sm border border-[#ECF0F1]"
                        >
                            <div className="p-4">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h3 className="font-medium text-[#2C3E50] text-lg">{classItem.name}</h3>
                                        <div className="grid grid-cols-2 gap-4 mt-2">
                                            <div className="flex items-center gap-2 text-[#7F8C8D]">
                                                <Clock className="h-4 w-4" />
                                                <span>{classItem.schedule}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-[#7F8C8D]">
                                                <BookOpen className="h-4 w-4" />
                                                <span>{classItem.room}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <Button
                                        variant="secondary"
                                        onClick={() => setSelectedClass(classItem)}
                                    >
                                        <Users className="h-4 w-4 mr-2" />
                                        {classItem.students.length} Students
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Student List Modal */}
            {selectedClass && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg w-full max-w-3xl max-h-[80vh] overflow-hidden">
                        <div className="p-6 border-b border-[#ECF0F1] flex justify-between items-center">
                            <div>
                                <h3 className="text-xl font-bold text-[#2C3E50]">{selectedClass.name}</h3>
                                <p className="text-[#7F8C8D] mt-1">
                                    {selectedClass.schedule} • {selectedClass.room}
                                </p>
                            </div>
                            <button
                                onClick={() => setSelectedClass(null)}
                                className="text-[#7F8C8D] hover:text-[#2C3E50]"
                            >
                                <X className="h-6 w-6" />
                            </button>
                        </div>

                        <div className="p-6 overflow-y-auto max-h-[calc(80vh-120px)]">
                            <div className="grid grid-cols-1 gap-4">
                                {selectedClass.students.map((student) => (
                                    <div
                                        key={student.id}
                                        className="flex items-center justify-between p-4 bg-[#F8FAFC] rounded-lg"
                                    >
                                        <div className="flex items-center space-x-4">
                                            <div className="h-10 w-10 rounded-full bg-[#1ABC9C] flex items-center justify-center text-white font-medium">
                                                {student.name.split(' ').map(n => n[0]).join('')}
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-[#2C3E50]">{student.name}</h4>
                                                <p className="text-sm text-[#7F8C8D]">
                                                    Attendance Rate: {getAttendancePercentage(student.attendance)}%
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-center space-x-2">
                      <span className="text-sm text-[#7F8C8D]">
                        Present: {student.attendance.present} |
                        Late: {student.attendance.late} |
                        Absent: {student.attendance.absent}
                      </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};