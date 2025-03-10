import React from 'react';
import {
    ChevronDown
} from 'lucide-react';
import { useNavigate } from 'react-router';
import { Button } from '@/components/ui/Button';
import { useTodaySessions } from '@/hooks/useTodaySessions';


export const TeacherDashboard: React.FC = () => {
    const navigate = useNavigate();
    const { sessions, loading, error } = useTodaySessions();

    if (loading) {
        return <div>Chargement des cours...</div>;
    }

    if (error) {
        return <div>Erreur lors du chargement des cours : {error.message}</div>;
    }

    return (
        <div className="min-h-screen bg-[#F8FAFC]">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Statistiques rapides */}
                {/*<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-[#7F8C8D]">Today's Attendance</h3>
                            <Calendar className="h-5 w-5 text-[#1ABC9C]" />
                        </div>
                        <div className="flex items-end space-x-2">
                            <span className="text-3xl font-bold text-[#2C3E50]">87%</span>
                            <span className="text-sm text-[#1ABC9C]">Average</span>
                        </div>
                        <div className="mt-4 h-2 bg-[#ECF0F1] rounded-full">
                            <div className="h-full w-[87%] bg-[#1ABC9C] rounded-full"></div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-[#7F8C8D]">Absences to Review</h3>
                            <ClipboardList className="h-5 w-5 text-[#1ABC9C]" />
                        </div>
                        <div className="flex items-end space-x-2">
                            <span className="text-3xl font-bold text-[#2C3E50]">5</span>
                            <span className="text-sm text-[#E74C3C]">Pending</span>
                        </div>
                        <div className="mt-4 flex space-x-2">
                            <div className="flex-1 h-8 bg-[#1ABC9C] bg-opacity-20 rounded-md flex items-center justify-center text-sm text-[#1ABC9C]">
                                3 Justified
                            </div>
                            <div className="flex-1 h-8 bg-[#E74C3C] bg-opacity-20 rounded-md flex items-center justify-center text-sm text-[#E74C3C]">
                                2 Unjustified
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-[#7F8C8D]">Weekly Report</h3>
                            <BarChart2 className="h-5 w-5 text-[#1ABC9C]" />
                        </div>
                        <Button className="w-full">Generate Report</Button>
                        <p className="mt-4 text-sm text-[#7F8C8D]">
                            Last generated: Today at 8:00 AM
                        </p>
                    </div>
                </div>*/}

                {/* Liste des cours du jour */}
                <div className="bg-white rounded-lg shadow-sm">
                    <div className="p-6 border-b border-[#ECF0F1] flex justify-between items-center">
                        <div className="flex items-center space-x-4">
                            <h2 className="text-xl font-bold text-[#2C3E50]">Today's Classes</h2>
                            <button className="flex items-center space-x-1 text-[#7F8C8D] text-sm">
                                <span>March 20</span>
                                <ChevronDown className="h-4 w-4" />
                            </button>
                        </div>
                        {/*<Button onClick={() => console.log('Adding new class...')} className="flex items-center space-x-2">
                            <Plus className="h-4 w-4" />
                            <span>Add Class</span>
                        </Button>*/}
                    </div>
                    <div className="p-6">
                        <div className="space-y-4">
                            {sessions.map((session, index) => (
                                <div
                                    key={index} // Si l'API fournit un id, utilisez-le ici
                                    className="flex items-center p-4 hover:bg-[#F8FAFC] rounded-lg transition-colors cursor-pointer"
                                    onClick={() => navigate(`/class/${session.subjectName}`)} // Adaptez l'URL si besoin
                                >
                                    <div className="w-24">
                                        <span className="text-[#34495E] font-medium">{session.time}</span>
                                    </div>
                                    <div className="flex-1 ml-4">
                                        <h3 className="text-[#2C3E50] font-medium">{session.subjectName}</h3>
                                        <p className="text-sm text-[#7F8C8D]">
                                            {session.presentCount} present out of {session.totalStudents} students
                                        </p>
                                    </div>
                                    <Button>Take Attendance</Button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};
