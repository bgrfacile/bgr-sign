import React from 'react';

interface StudentAvatarProps {
    profilePictureUrl?: string | null;
    firstName: string;
    lastName: string;
    className?: string;
}

export const StudentAvatar: React.FC<StudentAvatarProps> = ({
                                                                profilePictureUrl,
                                                                firstName,
                                                                lastName,
                                                                className = "h-10 w-10 rounded-full object-cover"
                                                            }) => {
    const defaultAvatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(firstName)}+${encodeURIComponent(lastName)}&background=1ABC9C&color=fff&rounded=true&size=40`;

    return (
        <div className="relative">
            {profilePictureUrl ? (
                <img
                    src={profilePictureUrl}
                    alt={`${firstName} ${lastName}`}
                    className={className}
                    onError={(e) => {
                        e.currentTarget.onerror = null; // Empêche une boucle infinie
                        e.currentTarget.src = defaultAvatarUrl; // Remplace par l'image par défaut
                    }}
                />
            ) : (
                <img
                    src={defaultAvatarUrl}
                    alt={`${firstName} ${lastName}`}
                    className={className}
                />
            )}
        </div>
    );
};
