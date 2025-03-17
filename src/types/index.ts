export type UserRole = 'admin' | 'teacher' | 'student' | 'parent';

export type User = {
    id: string;
    email: string;
    name: string;
    role: UserRole;
    // Additional fields based on role
    classId?: string; // For students and teachers
    studentIds?: string[]; // For parents
    subjects?: string[]; // For teachers
}

export type Student = {
    userId: string;
    name: string;
    status: 'present' | 'absent' | 'late' | 'pending';
    email: string;
    avatar: string;
}

// export type AuthContextType = {
//     user: User | null;
//     login: (email: string, password: string) => Promise<void>;
//     logout: () => void;
//     isLoading: boolean;
// }

export type AuthState = {
    user: User | null;
    isAuthenticated: boolean;
}

// Mock data types
export type Class = {
    id: string;
    name: string;
    teacherId: string;
    students: string[];
    subjects: string[];
}

export type Subject = {
    id: string;
    name: string;
    teacherId: string;
    classId: string;
}

export type Attendance = {
    id: string;
    sessionId: string;
    studentId: string;
    subjectId: string;
    date: string;
    status: 'present' | 'absent' | 'late';
    justification?: string;
    justificationStatus?: 'pending' | 'approved' | 'rejected';
    timestamp: Date;
}

export type Notification = {
    id: string;
    userId: string;
    title: string;
    message: string;
    date: string;
    read: boolean;
    type: 'absence' | 'justification' | 'system';
}

export interface AuthResponse {
    accessToken: string;
    tokenType: string;
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
