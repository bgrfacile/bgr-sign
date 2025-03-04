import type {Notification} from "@/types";


// Mock data for student's classes
export const STUDENT_CLASSES = [
    {
        id: 1,
        time: '9:00 AM',
        subject: 'Mathematics 101',
        teacher: 'Prof. Smith',
        room: 'Room 301',
        attendance: { status: 'present', time: '8:55 AM' }
    },
    {
        id: 2,
        time: '11:00 AM',
        subject: 'Physics 201',
        teacher: 'Dr. Johnson',
        room: 'Room 405',
        attendance: { status: 'late', time: '11:10 AM' }
    },
    {
        id: 3,
        time: '2:00 PM',
        subject: 'Computer Science 301',
        teacher: 'Prof. Brown',
        room: 'Lab 201',
        attendance: { status: 'pending', time: null }
    }
];

// Mock notifications data
export const MOCK_NOTIFICATIONS: Notification[] = [
    {
        id: '1',
        userId: '2',
        title: 'Absence Alert',
        message: 'You have been marked absent for Mathematics 101',
        date: new Date().toISOString(),
        read: false,
        type: 'absence'
    },
    {
        id: '2',
        userId: '2',
        title: 'Late Arrival Recorded',
        message: 'You were marked late for Physics 201',
        date: new Date(Date.now() - 3600000).toISOString(),
        read: false,
        type: 'justification'
    },
    {
        id: '3',
        userId: '2',
        title: 'Attendance Report Available',
        message: 'Your monthly attendance report is ready',
        date: new Date(Date.now() - 86400000).toISOString(),
        read: true,
        type: 'system'
    }
];