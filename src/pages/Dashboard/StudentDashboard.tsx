// src/pages/StudentDashboard.tsx
import React, { useState } from 'react';
import {
    Calendar,
    Check,
    Clock,
    FileText,
    AlertTriangle,
} from 'lucide-react';
// import { useNavigate } from 'react-router';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/Button';
import { SignatureCanvas } from '@/components/SignatureCanvas';
import { AbsenceJustificationModal } from '@/components/AbsenceJustificationModal';
import { STUDENT_CLASSES } from '@/data/Mock';
import { getStatusColor, getStatusIcon } from '@/utils/utils';

export const StudentDashboard: React.FC = () => {
    const { user } = useAuth();
    // const navigate = useNavigate();
    const [showSignatureModal, setShowSignatureModal] = useState(false);
    const [showJustificationModal, setShowJustificationModal] = useState(false);
    const [justificationType, setJustificationType] = useState<'absence' | 'late'>('absence');
    const [selectedClass, setSelectedClass] = useState<typeof STUDENT_CLASSES[0] | null>(null);

    // Calcul des statistiques
    const totalClasses = STUDENT_CLASSES.length;
    const presentClasses = STUDENT_CLASSES.filter(c => c.attendance.status === 'present').length;
    const lateClasses = STUDENT_CLASSES.filter(c => c.attendance.status === 'late').length;
    const absentClasses = STUDENT_CLASSES.filter(c => c.attendance.status === 'absent').length;
    const attendanceRate = totalClasses ? ((presentClasses + lateClasses) / totalClasses) * 100 : 0;

    const handleAttendanceSubmit = async (signatureData: string) => {
        try {
            console.log('Submitting signature:', signatureData);
            // Implémentez ici votre logique de soumission
            setShowSignatureModal(false);
            setSelectedClass(null);
        } catch (error) {
            console.error('Error submitting attendance:', error);
        }
    };

    const handleJustificationSubmit = async (data: { reason: string; files: FileList | null }) => {
        try {
            console.log('Submitting justification:', {
                type: justificationType,
                classId: selectedClass?.id,
                ...data
            });
            // Implémentez ici votre logique de soumission
            setShowJustificationModal(false);
            setSelectedClass(null);
        } catch (error) {
            console.error('Error submitting justification:', error);
        }
    };

    return (
        <div className="min-h-screen bg-[#F8FAFC]">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Message de bienvenue */}
                <div className="mb-8">
                    <h1 className="text-2xl font-bold text-[#2C3E50]">
                        Welcome back, {user?.firstName}!
                    </h1>
                    <p className="text-[#7F8C8D] mt-1">
                        Here's your attendance overview for today
                    </p>
                </div>

                {/* Statistiques rapides */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-[#7F8C8D]">Attendance Rate</h3>
                            <Calendar className="h-5 w-5 text-[#1ABC9C]" />
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
                                style={{ width: `${attendanceRate}%` }}
                            ></div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-[#7F8C8D]">Present</h3>
                            <Check className="h-5 w-5 text-[#1ABC9C]" />
                        </div>
                        <div className="flex items-end space-x-2">
                            <span className="text-3xl font-bold text-[#2C3E50]">{presentClasses}</span>
                            <span className="text-sm text-[#1ABC9C]">Classes</span>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-[#7F8C8D]">Late</h3>
                            <Clock className="h-5 w-5 text-[#F1C40F]" />
                        </div>
                        <div className="flex items-end space-x-2">
                            <span className="text-3xl font-bold text-[#2C3E50]">{lateClasses}</span>
                            <span className="text-sm text-[#F1C40F]">Classes</span>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-[#7F8C8D]">Absences</h3>
                            <AlertTriangle className="h-5 w-5 text-[#E74C3C]" />
                        </div>
                        <div className="flex items-end space-x-2">
                            <span className="text-3xl font-bold text-[#2C3E50]">{absentClasses}</span>
                            <span className="text-sm text-[#E74C3C]">Classes</span>
                        </div>
                    </div>
                </div>

                {/* Liste des cours du jour */}
                <div className="bg-white rounded-lg shadow-sm">
                    <div className="p-6 border-b border-[#ECF0F1] flex justify-between items-center">
                        <h2 className="text-xl font-bold text-[#2C3E50]">Today's Classes</h2>
                        <Button variant="secondary" className="flex items-center gap-2">
                            <FileText className="h-4 w-4" />
                            Download Schedule
                        </Button>
                    </div>
                    <div className="p-6">
                        <div className="space-y-4">
                            {STUDENT_CLASSES.map(classItem => (
                                <div key={classItem.id} className="flex items-center p-4 bg-[#F8FAFC] rounded-lg">
                                    <div className="w-24">
                                        <span className="text-[#34495E] font-medium">{classItem.time}</span>
                                    </div>
                                    <div className="flex-1 ml-4">
                                        <h3 className="text-[#2C3E50] font-medium">{classItem.subject}</h3>
                                        <p className="text-sm text-[#7F8C8D]">
                                            {classItem.teacher} • {classItem.room}
                                        </p>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        {classItem.attendance.status === 'pending' ? (
                                            <div className="flex space-x-2">
                                                <Button
                                                    size="sm"
                                                    onClick={() => {
                                                        setSelectedClass(classItem);
                                                        setShowSignatureModal(true);
                                                    }}
                                                >
                                                    Mark Present
                                                </Button>
                                                <div className="relative group">
                                                    <Button
                                                        variant="secondary"
                                                        size="sm"
                                                        onClick={() => {
                                                            setSelectedClass(classItem);
                                                            setShowJustificationModal(true);
                                                        }}
                                                    >
                                                        Justify
                                                    </Button>
                                                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                                        <button
                                                            className="w-full text-left px-4 py-2 text-sm text-[#7F8C8D] hover:bg-[#F8FAFC]"
                                                            onClick={() => {
                                                                setSelectedClass(classItem);
                                                                setJustificationType('late');
                                                                setShowJustificationModal(true);
                                                            }}
                                                        >
                                                            Justify Late Arrival
                                                        </button>
                                                        <button
                                                            className="w-full text-left px-4 py-2 text-sm text-[#7F8C8D] hover:bg-[#F8FAFC]"
                                                            onClick={() => {
                                                                setSelectedClass(classItem);
                                                                setJustificationType('absence');
                                                                setShowJustificationModal(true);
                                                            }}
                                                        >
                                                            Justify Absence
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className={`px-3 py-1 rounded-full flex items-center gap-2 ${getStatusColor(classItem.attendance.status)}`}>
                                                {getStatusIcon(classItem.attendance.status)}
                                                <span>
                          {classItem.attendance.status.charAt(0).toUpperCase() + classItem.attendance.status.slice(1)}
                                                    {classItem.attendance.time && ` at ${classItem.attendance.time}`}
                        </span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {showSignatureModal && (
                    <SignatureCanvas
                        onClose={() => {
                            setShowSignatureModal(false);
                            setSelectedClass(null);
                        }}
                        onSubmit={handleAttendanceSubmit}
                    />
                )}
                {showJustificationModal && (
                    <AbsenceJustificationModal
                        type={justificationType}
                        onClose={() => {
                            setShowJustificationModal(false);
                            setSelectedClass(null);
                        }}
                        onSubmit={handleJustificationSubmit}
                    />
                )}
            </main>
        </div>
    );
};
