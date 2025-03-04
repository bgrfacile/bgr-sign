import React from 'react';
import { Bell, Mail, MessageSquare } from 'lucide-react';

export const NotificationSettings: React.FC = () => {
    return (
        <>
            <div className="p-6 border-b border-[#ECF0F1]">
                <h2 className="text-xl font-bold text-[#2C3E50]">Notification Settings</h2>
                <p className="text-[#7F8C8D] mt-1">
                    Manage how you receive notifications
                </p>
            </div>

            <div className="p-6 space-y-6">
                {/* Email Notifications */}
                <div className="space-y-4">
                    <h3 className="text-lg font-medium text-[#2C3E50] flex items-center gap-2">
                        <Mail className="h-5 w-5 text-[#1ABC9C]" />
                        Email Notifications
                    </h3>
                    <div className="space-y-3">
                        {[
                            'Daily attendance summary',
                            'Student absence alerts',
                            'Justification requests',
                            'Weekly reports',
                        ].map((item, index) => (
                            <label key={index} className="flex items-center space-x-3">
                                <input
                                    type="checkbox"
                                    defaultChecked
                                    className="h-4 w-4 text-[#1ABC9C] border-[#BDC3C7] rounded"
                                />
                                <span className="text-[#34495E]">{item}</span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Push Notifications */}
                <div className="pt-6 border-t border-[#ECF0F1] space-y-4">
                    <h3 className="text-lg font-medium text-[#2C3E50] flex items-center gap-2">
                        <Bell className="h-5 w-5 text-[#1ABC9C]" />
                        Push Notifications
                    </h3>
                    <div className="space-y-3">
                        {[
                            'Real-time absence alerts',
                            'New justification submissions',
                            'Report generation notifications',
                            'System updates',
                        ].map((item, index) => (
                            <label key={index} className="flex items-center space-x-3">
                                <input
                                    type="checkbox"
                                    defaultChecked
                                    className="h-4 w-4 text-[#1ABC9C] border-[#BDC3C7] rounded"
                                />
                                <span className="text-[#34495E]">{item}</span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Communication Preferences */}
                <div className="pt-6 border-t border-[#ECF0F1] space-y-4">
                    <h3 className="text-lg font-medium text-[#2C3E50] flex items-center gap-2">
                        <MessageSquare className="h-5 w-5 text-[#1ABC9C]" />
                        Communication Preferences
                    </h3>
                    <div className="space-y-3">
                        {[
                            'Allow direct messages from students',
                            'Allow direct messages from parents',
                            'Receive newsletter updates',
                        ].map((item, index) => (
                            <label key={index} className="flex items-center space-x-3">
                                <input
                                    type="checkbox"
                                    defaultChecked
                                    className="h-4 w-4 text-[#1ABC9C] border-[#BDC3C7] rounded"
                                />
                                <span className="text-[#34495E]">{item}</span>
                            </label>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};