import {redirect} from "react-router";
import AuthService from "@/services/AuthService.ts";

export async function loginAction({request}: { request: Request }) {
    const formData = await request.formData();
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
        // Authentification pour récupérer et stocker le token
        await AuthService.login(email, password);
        // Chargement des informations de l'utilisateur et stockage en localStorage
        await AuthService.getUser();
        return redirect("/dashboard");
    } catch (error: any) {
        console.error("Erreur lors de la connexion :", error);
        const errorMessage =
            error.response?.status === 401
                ? "Identifiants invalides"
                : "Erreur lors de la connexion";
        return new Response(JSON.stringify({error: errorMessage}), {
            status: error.response?.status || 500,
            headers: {
                "Content-Type": "application/json"
            }
        });
    }
}