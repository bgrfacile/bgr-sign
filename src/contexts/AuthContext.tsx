import {createContext, FC, ReactNode, useContext, useEffect, useState} from "react";
import AuthService from "@/services/AuthService";
import {UserProfileResponse} from "@/models/UserProfileResponse.ts";

export interface AuthContextType {
    token: string | null;
    user: UserProfileResponse | null;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
    isLoading: boolean;
    refreshUser: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: FC<{ children: ReactNode }> = ({children}) => {
    const [token, setToken] = useState<string | null>(null);
    const [user, setUser] = useState<UserProfileResponse | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const refreshUser = async () => {
        if (!token) return;
        try {
            const userData = await AuthService.getUser();
            setUser(userData);
            localStorage.setItem("user", JSON.stringify(userData));
        } catch (error) {
            console.error("Erreur lors de la récupération de l'utilisateur", error);
            logout();
        }
    };

    const login = async (email: string, password: string) => {
        try {
            const { accessToken } = await AuthService.login(email, password);
            setToken(accessToken);
            localStorage.setItem("token", accessToken);
            const userData = await AuthService.getUser();
            if (userData) {
                setUser(userData)
                localStorage.setItem("user", JSON.stringify(userData));
            }
        } catch (error: any) {
            throw new Error(
                error.response?.status === 401
                    ? "Identifiants invalides"
                    : "Erreur lors de la connexion"
            );
        }
    };

    const logout = () => {
        setToken(null);
        setUser(null);
        AuthService.logout();
    };

    useEffect(() => {
        const loadAuthData = async () => {
            const storedToken = localStorage.getItem("token");
            if (storedToken) {
                setToken(storedToken);
                // Si un utilisateur est sauvegardé, on peut le charger en attendant une éventuelle actualisation
                const storedUser = localStorage.getItem("user");
                if (storedUser) {
                    setUser(JSON.parse(storedUser));
                }
                // Rafraîchir l'utilisateur pour s'assurer de la validité
                await refreshUser();
            }
            setIsLoading(false);
        };

        loadAuthData();
    }, []);

    return (
        <AuthContext.Provider
            value={{token, user, login, logout, isLoading, refreshUser}}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context as AuthContextType;
};



