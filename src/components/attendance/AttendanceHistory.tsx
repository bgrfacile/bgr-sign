import {Attendance, Session} from "@/types";
import {CheckCircle, XCircle, Clock} from 'lucide-react';

interface AttendanceHistoryProps {
    attendances: (Attendance & { session: Session })[];
}

export const AttendanceHistory: React.FC<AttendanceHistoryProps> = ({attendances}) => {
    const getStatusIcon = (status: Attendance['status']) => {
        switch (status) {
            case 'present':
                return <CheckCircle className="w-5 h-5 text-green-500"/>;
            case 'absent':
                return <XCircle className="w-5 h-5 text-red-500"/>;
            case 'late':
                return <Clock className="w-5 h-5 text-yellow-500"/>;
        }
    };

    return (
        <div className="bg-white rounded-lg shadow-md">
            <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Historique des présences</h3>
            </div>
            <div className="divide-y divide-gray-200">
                {attendances.map((attendance) => (
                    <div key={`${attendance.sessionId}-${attendance.userId}`} className="px-6 py-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <h4 className="font-medium text-gray-900">{attendance.session.courseName}</h4>
                                <p className="text-sm text-gray-600">
                                    {new Date(attendance.session.startTime).toLocaleDateString('fr-FR', {
                                        day: 'numeric',
                                        month: 'long',
                                        year: 'numeric'
                                    })}
                                </p>
                            </div>
                            <div className="flex items-center space-x-2">
                                {getStatusIcon(attendance.status)}
                                <span className="text-sm font-medium capitalize">
                  {attendance.status}
                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}