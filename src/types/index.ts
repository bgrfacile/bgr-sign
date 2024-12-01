export type User = {
    id: string;
    name: string;
    email: string;
    role: 'student' | 'teacher';
    avatar?: string;
}

export type Session = {
    id: string;
    courseName: string;
    teacherName: string;
    startTime: Date;
    endTime: Date;
    location: string;
    status: 'upcoming' | 'active' | 'completed';
}

export type Attendance = {
    sessionId: string;
    userId: string;
    status: 'present' | 'absent' | 'late';
    timestamp: Date;
}