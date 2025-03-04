import React from 'react';
import { Plus, Users, BookOpen, Clock } from 'lucide-react';
import {Button} from "@/components/ui/Button.tsx";

export const ClassSettings: React.FC = () => {
    return (
        <>
            <div className="p-6 border-b border-[#ECF0F1]">
                <div className="flex justify-between items-center">
                    <div>
                        <h2 className="text-xl font-bold text-[#2C3E50]">Class Settings</h2>
                        <p className="text-[#7F8C8D] mt-1">
                            Manage your classes and teaching schedule
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
                <div className="space-y-4">
                    {[
                        {
                            name: 'Mathematics 101',
                            students: 25,
                            schedule: 'Mon, Wed, Fri 9:00 AM',
                            room: 'Room 301'
                        },
                        {
                            name: 'Physics 201',
                            students: 30,
                            schedule: 'Tue, Thu 11:00 AM',
                            room: 'Room 405'
                        },
                        {
                            name: 'Computer Science 301',
                            students: 20,
                            schedule: 'Mon, Wed 2:00 PM',
                            room: 'Lab 201'
                        }
                    ].map((classItem, index) => (
                        <div
                            key={index}
                            className="bg-[#F8FAFC] rounded-lg p-4 space-y-4"
                        >
                            <div className="flex justify-between items-center">
                                <h3 className="font-medium text-[#2C3E50]">{classItem.name}</h3>
                                <Button variant="secondary" size="sm">Edit</Button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="flex items-center gap-2 text-[#7F8C8D]">
                                    <Users className="h-4 w-4" />
                                    <span>{classItem.students} Students</span>
                                </div>
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
                    ))}
                </div>
            </div>
        </>
    );
};