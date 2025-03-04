import {UserRoleResponse} from "@/models/UserRoleResponse.ts";
import {UserPermissionsResponse} from "@/models/UserPermissionsResponse.ts";

export type UserProfileResponse = {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    avatar: string;
    roles: UserRoleResponse[];
    permissions: UserPermissionsResponse[];
    phoneNumber?: string;
    hireDate?: string;
    specialization?: string;
    dateOfBirth?: string;      // Exemple : "1990-05-20"
    createdAt: string;         // Exemple : "2023-03-15T12:00:00Z"
    updatedAt: string;         // Exemple : "2023-03-20T15:30:00Z"
}