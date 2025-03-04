import {createContext, FC, ReactNode, useContext, useEffect, useState} from "react";
import AuthService from "@/services/AuthService";
import {UserProfileResponse} from "@/models/UserProfileResponse.ts";

type AuthContextType = {
    token: string | null;
    user: UserProfileResponse | null;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
    isLoading: boolean;
    fetchUser: (tokenParam?: string) => Promise<void>;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: FC<{ children: ReactNode }> = ({children}) => {
    const [token, setToken] = useState<string | null>(null);
    const [user, setUser] = useState<UserProfileResponse | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const fetchUser = async (tokenParam?: string) => {
        const authToken = tokenParam || token;
        if (!authToken) return;
        try {
            const userData = await AuthService.getUser();
            setUser(userData);
        } catch (error) {
            console.error("Erreur lors de la récupération de l'utilisateur", error);
            logout();
        }
    };

    const login = async (email: string, password: string) => {
        try {
            const { accessToken } = await AuthService.login(email, password);
            setToken(accessToken);
            await fetchUser(accessToken);
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
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        AuthService.logout();
    };

    useEffect(() => {
        const loadAuthData = async () => {
            const savedToken = localStorage.getItem("token");
            if (savedToken) {
                const savedUser = localStorage.getItem("user");
                if (savedUser) {
                    setUser(JSON.parse(savedUser));
                }
                // setToken(savedToken);
                // await fetchUser(savedToken);
            } else {
                const savedUser = localStorage.getItem("user");
                if (savedUser) {
                    setUser(JSON.parse(savedUser));
                }
            }
            setIsLoading(false);
        };

        loadAuthData().finally(()=>{});
    }, []);

    return (
        <AuthContext.Provider value={{token, user, login, logout, isLoading, fetchUser}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};


