import { redirect } from "react-router";
import AuthService from "@/services/AuthService.ts";

export async function loginLoader() {
    if (AuthService.isAuthenticated()) {
        return redirect("/");
    }
    return null;
}
