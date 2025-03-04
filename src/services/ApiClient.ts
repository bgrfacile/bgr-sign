
import axios, { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse } from 'axios';

class ApiClient {
    private axiosInstance: AxiosInstance;

    constructor() {
        const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://api.example.com';
        this.axiosInstance = axios.create({
            baseURL: API_BASE_URL,
            timeout: 10000, // délai maximum en ms
        });

        // Intercepteur de requêtes pour ajouter le token Authorization
        this.axiosInstance.interceptors.request.use(
            (config: InternalAxiosRequestConfig) => {
                const token = this.getToken();
                if (token) {
                    // Assurez-vous que headers est défini
                    config.headers = config.headers || {};
                    config.headers.Authorization = `Bearer ${token}`;
                }
                return config;
            },
            (error) => Promise.reject(error)
        );

        // Intercepteur de réponse pour gérer les erreurs globalement
        this.axiosInstance.interceptors.response.use(
            (response: AxiosResponse) => response,
            (error) => {
                console.error('Erreur API:', error);
                return Promise.reject(error);
            }
        );
    }

    private getToken(): string | null {
        return localStorage.getItem('token');
    }

    public async get<T>(url: string, config?: InternalAxiosRequestConfig): Promise<T> {
        const response = await this.axiosInstance.get<T>(url, config);
        return response.data;
    }

    public async post<T>(url: string, data?: any, config?: InternalAxiosRequestConfig): Promise<T> {
        const response = await this.axiosInstance.post<T>(url, data, config);
        return response.data;
    }

    public async put<T>(url: string, data?: any, config?: InternalAxiosRequestConfig): Promise<T> {
        const response = await this.axiosInstance.put<T>(url, data, config);
        return response.data;
    }

    public async delete<T>(url: string, config?: InternalAxiosRequestConfig): Promise<T> {
        const response = await this.axiosInstance.delete<T>(url, config);
        return response.data;
    }

    public async patch<T>(url: string, data?: any, config?: InternalAxiosRequestConfig): Promise<T> {
        const response = await this.axiosInstance.patch<T>(url, data, config);
        return response.data;
    }
}

export default new ApiClient();
