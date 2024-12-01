import {Attendance, Session} from "@/types";

export const MOCK_ATTENDANCES: (Attendance & { session: Session })[] = [
    {
        sessionId: '1',
        userId: '1',
        status: 'present',
        timestamp: new Date('2024-03-18T09:15:00'),
        session: {
            id: '1',
            courseName: 'Mathematics',
            teacherName: 'Dr. Smith',
            startTime: new Date('2024-03-18T09:00:00'),
            endTime: new Date('2024-03-18T10:30:00'),
            location: 'Room A101',
            status: 'completed',
        },
    },
    {
        sessionId: '2',
        userId: '1',
        status: 'late',
        timestamp: new Date('2024-03-17T11:20:00'),
        session: {
            id: '2',
            courseName: 'Physics',
            teacherName: 'Prof. Johnson',
            startTime: new Date('2024-03-17T11:00:00'),
            endTime: new Date('2024-03-17T12:30:00'),
            location: 'Room B202',
            status: 'completed',
        },
    },
];