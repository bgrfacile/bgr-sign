import { redirect } from "react-router";

export async function loginLoader() {
    const token = localStorage.getItem("token");
    if (token) {
        return redirect("/");
    }
    return null;
}
