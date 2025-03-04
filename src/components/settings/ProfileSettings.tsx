import React from 'react';
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/Button.tsx";

export const ProfileSettings: React.FC = () => {
    return (
        <>
            <div className="p-6 border-b border-[#ECF0F1]">
                <h2 className="text-xl font-bold text-[#2C3E50]">Profile Settings</h2>
                <p className="text-[#7F8C8D] mt-1">
                    Update your personal information and preferences
                </p>
            </div>

            <div className="p-6 space-y-6">
                {/* Profile Information */}
                <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                        <div className="h-20 w-20 rounded-full bg-[#1ABC9C] flex items-center justify-center text-white text-2xl">
                            PS
                        </div>
                        <Button variant="secondary">Change Photo</Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input
                            label="First Name"
                            defaultValue="Professor"
                        />
                        <Input
                            label="Last Name"
                            defaultValue="Smith"
                        />
                    </div>

                    <Input
                        label="Email Address"
                        defaultValue="teacher@example.com"
                        type="email"
                    />

                    <Input
                        label="Phone Number"
                        defaultValue="+1 (555) 123-4567"
                        type="tel"
                    />
                </div>

                {/* Teaching Information */}
                <div className="pt-6 border-t border-[#ECF0F1]">
                    <h3 className="text-lg font-medium text-[#2C3E50] mb-4">
                        Teaching Information
                    </h3>

                    <div className="space-y-4">
                        <Input
                            label="Department"
                            defaultValue="Science"
                        />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Input
                                label="Employee ID"
                                defaultValue="T-12345"
                            />
                            <Input
                                label="Join Date"
                                type="date"
                                defaultValue="2024-01-01"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex justify-end space-x-4 pt-6">
                    <Button variant="secondary">Cancel</Button>
                    <Button>Save Changes</Button>
                </div>
            </div>
        </>
    );
};