import {User} from "@/types";

export const MOCK_USERS: Record<string, User> = {
    'admin@example.com': {
        id: '1',
        email: 'admin@example.com',
        name: 'Admin User',
        role: 'admin'
    },
    'teacher@example.com': {
        id: '2',
        email: 'teacher@example.com',
        name: 'Professor Smith',
        role: 'teacher',
        classId: 'class1',
        subjects: ['math', 'physics']
    },
    'student@example.com': {
        id: '3',
        email: 'student@example.com',
        name: 'John Doe',
        role: 'student',
        classId: 'class1'
    },
    'parent@example.com': {
        id: '4',
        email: 'parent@example.com',
        name: 'Parent User',
        role: 'parent',
        studentIds: ['3'] // Reference to student ID
    }
};

// Mock data for teacher's classes
export const TEACHER_CLASSES = [
    {
        id: 1,
        time: '9:00 AM',
        subject: 'Mathematics 101',
        students: [
            { id: 1, name: 'Alice Johnson', status: 'present' },
            { id: 2, name: 'Bob Smith', status: 'absent' },
            { id: 3, name: 'Charlie Brown', status: 'late' },
            { id: 4, name: 'Diana Prince', status: 'present' },
        ]
    },
    {
        id: 2,
        time: '11:00 AM',
        subject: 'Physics 201',
        students: [
            { id: 5, name: 'Emma Watson', status: 'present' },
            { id: 6, name: 'Frank Castle', status: 'absent' },
            { id: 7, name: 'Grace Kelly', status: 'present' },
            { id: 8, name: 'Henry Ford', status: 'present' },
        ]
    },
    {
        id: 3,
        time: '2:00 PM',
        subject: 'Computer Science 301',
        students: [
            { id: 9, name: 'Ian Malcolm', status: 'present' },
            { id: 10, name: 'Jane Foster', status: 'late' },
            { id: 11, name: 'Kevin Hart', status: 'present' },
            { id: 12, name: 'Laura Palmer', status: 'absent' },
        ]
    }
];