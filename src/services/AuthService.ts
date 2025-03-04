import apiClient from "@/services/ApiClient.ts";
import {API_ROUTES} from "@/constants/API_ROUTES.ts";
import {ApiResponse} from "@/models/ApiResponse.ts";
import {AuthResponse} from "@/models/AuthResponse.ts";
import {UserProfileResponse} from "@/models/UserProfileResponse.ts";

class AuthService {
    async login(email: string, password: string): Promise<AuthResponse> {
        const response = await apiClient.post<ApiResponse<AuthResponse>>(API_ROUTES.LOGIN, {email, password});
        localStorage.setItem("token", response.data.accessToken);
        return response.data;
    }

    logout(): void {
        // Si besoin, vous pouvez ajouter une logique côté serveur ici
    }

    async getUser(): Promise<UserProfileResponse> {
        const response = await apiClient.get<ApiResponse<UserProfileResponse>>(API_ROUTES.ME);
        localStorage.setItem("user", JSON.stringify(response.data));
        return response.data;
    }
}

export default new AuthService();