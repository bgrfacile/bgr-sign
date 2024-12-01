import {FC} from "react";
import {Session} from "@/types";
import {SessionCard} from "@/components/sessions/SessionCard.tsx";

interface SessionListProps {
    sessions: Session[];
    onMarkAttendance: (sessionId: string) => void;
}

export const SessionList :FC<SessionListProps> = ({ sessions, onMarkAttendance })=>{
    return (<>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sessions.map((session) => (
                <SessionCard
                    key={session.id}
                    session={session}
                    onMarkAttendance={() => onMarkAttendance(session.id)}
                />
            ))}
        </div>
    </>);
}