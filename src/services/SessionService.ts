import apiClient from "@/services/ApiClient.ts";
import {ApiResponse} from "@/models/ApiResponse.ts";
import {API_ROUTES} from "@/constants/API_ROUTES.ts";

export type SessionResponse = {
    time: string,
    subjectName: string,
    presentCount: number,
    totalStudents: number,
}

class SessionService {
    async getSessionsToday(): Promise<SessionResponse[]> {
        try {
            const response = await apiClient.get<ApiResponse<SessionResponse[]>>(API_ROUTES.GET_SESSIONS_TODAY);
            return response.data;
        } catch (error) {
            console.error("Erreur lors de la récupération des sessions d'aujourd'hui :", error);
            throw error;
        }
    }
}

export default new SessionService();