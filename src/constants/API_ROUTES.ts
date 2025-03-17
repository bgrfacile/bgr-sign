export const API_ROUTES = {
    LOGIN:'/api/auth/login',
    ME:'/api/auth/me',
    GET_SESSIONS_TODAY: '/api/teacher/today-sessions',
    GET_ATTENDANCE_INFO: (courseId: number) => `/api/courses/${courseId}/attendance-info`,
}