import { UserCircle, Mail, BookOpen } from 'lucide-react';
import {User} from "@/types";

interface UserProfileProps {
    user: User;
}

export const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center space-x-4 mb-6">
                {user.avatar ? (
                    <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-16 h-16 rounded-full"
                    />
                ) : (
                    <UserCircle className="w-16 h-16 text-gray-400" />
                )}
                <div>
                    <h2 className="text-xl font-semibold text-gray-900">{user.name}</h2>
                    <p className="text-gray-600">{user.role}</p>
                </div>
            </div>

            <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-600">
                    <Mail className="w-5 h-5" />
                    <span>{user.email}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                    <BookOpen className="w-5 h-5" />
                    <span>Student ID: {user.id}</span>
                </div>
            </div>
        </div>
    );
}