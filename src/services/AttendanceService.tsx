import {AttendanceInfoResponse} from "@/models/responses/AttendanceInfoResponse.ts";
import apiClient from "@/services/ApiClient.ts";
import {ApiResponse} from "@/models/ApiResponse.ts";
import {API_ROUTES} from "@/constants/API_ROUTES.ts";


class AttendanceService {
    async getAttendanceInfo(courseId: number): Promise<AttendanceInfoResponse> {
        try {
            const response = await apiClient.get<ApiResponse<AttendanceInfoResponse>>(API_ROUTES.GET_ATTENDANCE_INFO(courseId));
            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}

export default new AttendanceService();