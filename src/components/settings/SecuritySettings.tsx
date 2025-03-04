import React from 'react';
import { Shield, Key, Smartphone } from 'lucide-react';
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/Button.tsx";

export const SecuritySettings: React.FC = () => {
    return (
        <>
            <div className="p-6 border-b border-[#ECF0F1]">
                <h2 className="text-xl font-bold text-[#2C3E50]">Security Settings</h2>
                <p className="text-[#7F8C8D] mt-1">
                    Manage your account security and authentication methods
                </p>
            </div>

            <div className="p-6 space-y-6">
                {/* Password Change */}
                <div className="space-y-4">
                    <h3 className="text-lg font-medium text-[#2C3E50] flex items-center gap-2">
                        <Key className="h-5 w-5 text-[#1ABC9C]" />
                        Change Password
                    </h3>
                    <div className="space-y-4">
                        <Input
                            type="password"
                            label="Current Password"
                            placeholder="Enter your current password"
                        />
                        <Input
                            type="password"
                            label="New Password"
                            placeholder="Enter your new password"
                        />
                        <Input
                            type="password"
                            label="Confirm New Password"
                            placeholder="Confirm your new password"
                        />
                        <Button>Update Password</Button>
                    </div>
                </div>

                {/* Two-Factor Authentication */}
                <div className="pt-6 border-t border-[#ECF0F1] space-y-4">
                    <h3 className="text-lg font-medium text-[#2C3E50] flex items-center gap-2">
                        <Smartphone className="h-5 w-5 text-[#1ABC9C]" />
                        Two-Factor Authentication
                    </h3>
                    <p className="text-[#7F8C8D]">
                        Add an extra layer of security to your account by enabling two-factor authentication.
                    </p>
                    <Button variant="secondary">Enable 2FA</Button>
                </div>

                {/* Security Log */}
                <div className="pt-6 border-t border-[#ECF0F1] space-y-4">
                    <h3 className="text-lg font-medium text-[#2C3E50] flex items-center gap-2">
                        <Shield className="h-5 w-5 text-[#1ABC9C]" />
                        Security Log
                    </h3>
                    <div className="space-y-2">
                        {[
                            { event: 'Password changed', date: '2024-03-15 14:30' },
                            { event: 'New device login', date: '2024-03-14 09:15' },
                            { event: 'Security settings updated', date: '2024-03-13 16:45' },
                        ].map((log, index) => (
                            <div
                                key={index}
                                className="flex justify-between items-center p-3 bg-[#F8FAFC] rounded-lg"
                            >
                                <span className="text-[#34495E]">{log.event}</span>
                                <span className="text-[#7F8C8D] text-sm">{log.date}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};