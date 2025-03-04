import React from 'react';
import { X, CheckCircle, AlertCircle, Clock } from 'lucide-react';
import {Notification} from "@/types";


interface NotificationsProps {
    notifications: Notification[];
    isOpen: boolean;
    onClose: () => void;
    onMarkAsRead: (id: string) => void;
}

export const Notifications: React.FC<NotificationsProps> = ({
                                                                notifications,
                                                                isOpen,
                                                                onClose,
                                                                onMarkAsRead,
                                                            }) => {
    if (!isOpen) return null;

    const getIcon = (type: string) => {
        switch (type) {
            case 'absence':
                return <AlertCircle className="h-5 w-5 text-[#E74C3C]" />;
            case 'justification':
                return <Clock className="h-5 w-5 text-[#F1C40F]" />;
            case 'system':
                return <CheckCircle className="h-5 w-5 text-[#1ABC9C]" />;
            default:
                return null;
        }
    };

    return (
        <div className="absolute top-full right-0 mt-2 w-96 bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 z-50">
            <div className="p-4 border-b border-[#ECF0F1]">
                <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium text-[#2C3E50]">Notifications</h3>
                    <button
                        onClick={onClose}
                        className="text-[#7F8C8D] hover:text-[#34495E]"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>
            </div>
            <div className="max-h-[400px] overflow-y-auto">
                {notifications.length === 0 ? (
                    <div className="p-4 text-center text-[#7F8C8D]">
                        No new notifications
                    </div>
                ) : (
                    <div className="divide-y divide-[#ECF0F1]">
                        {notifications.map((notification) => (
                            <div
                                key={notification.id}
                                className={`p-4 hover:bg-[#F8FAFC] transition-colors ${
                                    notification.read ? 'opacity-60' : ''
                                }`}
                                onClick={() => onMarkAsRead(notification.id)}
                            >
                                <div className="flex space-x-4">
                                    <div className="flex-shrink-0">
                                        {getIcon(notification.type)}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-[#2C3E50]">
                                            {notification.title}
                                        </p>
                                        <p className="text-sm text-[#7F8C8D] mt-1">
                                            {notification.message}
                                        </p>
                                        <p className="text-xs text-[#95A5A6] mt-1">
                                            {new Date(notification.date).toLocaleString()}
                                        </p>
                                    </div>
                                    {!notification.read && (
                                        <div className="flex-shrink-0">
                                            <div className="h-2 w-2 bg-[#1ABC9C] rounded-full"></div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};