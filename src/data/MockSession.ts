import {Session} from "@/types";

export const MOCK_SESSION :Session[]=[
    {
        id: '1',
        courseName: 'Mathematics',
        teacherName: 'Dr. Smith',
        startTime: new Date('2024-03-19T09:00:00'),
        endTime: new Date('2024-03-19T10:30:00'),
        location: 'Room A101',
        status: 'active',
    },
    {
        id: '2',
        courseName: 'Physics',
        teacherName: 'Prof. Johnson',
        startTime: new Date('2024-03-19T11:00:00'),
        endTime: new Date('2024-03-19T12:30:00'),
        location: 'Room B202',
        status: 'upcoming',
    },
    {
        id: '3',
        courseName: 'Computer Science',
        teacherName: 'Dr. Brown',
        startTime: new Date('2024-03-19T14:00:00'),
        endTime: new Date('2024-03-19T15:30:00'),
        location: 'Lab C303',
        status: 'upcoming',
    },
];