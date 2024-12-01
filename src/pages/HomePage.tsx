import {FC, useState} from "react";
import {SessionList} from "@/components/sessions/SessionList.tsx";
import {Session} from "@/types";
import {MOCK_SESSION} from "@/data/MockSession.ts";
import {UserProfile} from "@/components/UserProfile.tsx";
import {MOCK_USER} from "@/data/MockUser.ts";
import {AttendanceHistory} from "@/components/attendance/AttendanceHistory.tsx";
import {MOCK_ATTENDANCES} from "@/data/MockAttendances.ts";
import {AttendanceModal} from "@/components/attendance/AttendanceModal.tsx";

export const HomePage: FC = () => {
    const [selectedSession, setSelectedSession] = useState<Session | null>(null);

    const handleMarkAttendance = (sessionId: string) => {
        const session = MOCK_SESSION.find(s => s.id === sessionId);
        if (session) {
            setSelectedSession(session);
        }
    };

    const handleConfirmAttendance = (signature: string) => {
        console.log(`signature ${signature}`);
        console.log(`Attendance confirmed with signature for session ${selectedSession?.id}`);
        // Here you would typically make an API call to save the attendance and signature
        setSelectedSession(null);
    };
    return (<>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900">Today's Sessions</h2>
                    <p className="text-gray-600">Mark your attendance for ongoing classes</p>
                </div>
                <SessionList
                    sessions={MOCK_SESSION}
                    onMarkAttendance={handleMarkAttendance}
                />
            </div>
            <div className="space-y-6">
                <UserProfile user={MOCK_USER}/>
                <AttendanceHistory attendances={MOCK_ATTENDANCES}/>
            </div>
        </div>
        {selectedSession && (
            <AttendanceModal
                session={selectedSession}
                onClose={() => setSelectedSession(null)}
                onConfirm={handleConfirmAttendance}
            />
        )}
    </>);
}