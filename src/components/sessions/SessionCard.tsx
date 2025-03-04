import {FC} from "react";
import {Session} from "@/types";
import {Clock, MapPin} from "lucide-react";
import {Button} from "@/components/ui/Button.tsx";

interface SessionCardProps {
    session: Session;
    onMarkAttendance?: () => void;
}

export const SessionCard :FC<SessionCardProps> = ({ session, onMarkAttendance })=>{
    const formatTime = (date: Date) => {
        return new Date(date).toLocaleTimeString('fr-FR', {
            hour: '2-digit',
            minute: '2-digit'
        });
    };
    return (<>
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="text-xl font-semibold text-gray-900">{session.courseName}</h3>
                    <p className="text-gray-600">{session.teacherName}</p>
                </div>
                <div className={`px-3 py-1 rounded-full text-sm ${
                    session.status === 'active' ? 'bg-green-100 text-green-800' :
                        session.status === 'upcoming' ? 'bg-blue-100 text-blue-800' :
                            'bg-gray-100 text-gray-800'
                }`}>
                    {session.status.charAt(0).toUpperCase() + session.status.slice(1)}
                </div>
            </div>

            <div className="space-y-2 mb-4">
                <div className="flex items-center text-gray-600">
                    <Clock className="w-5 h-5 mr-2"/>
                    <span>{formatTime(session.startTime)} - {formatTime(session.endTime)}</span>
                </div>
                <div className="flex items-center text-gray-600">
                    <MapPin className="w-5 h-5 mr-2"/>
                    <span>{session.location}</span>
                </div>
            </div>

            {session.status === 'active' && (
                <Button
                    onClick={onMarkAttendance}
                    className="w-full"
                    variant={'ghost'}
                >
                    Marquer ma présence
                </Button>
            )}
        </div>
    </>);
}