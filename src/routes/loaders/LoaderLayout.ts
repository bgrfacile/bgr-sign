import {redirect} from 'react-router';
import AuthService from "@/services/AuthService.ts";

export async function LoaderLayout() {
    console.log('token', AuthService.isAuthenticated());
    if (!AuthService.isAuthenticated()) {
        return redirect('/login');
    }
    return null;
}

