import React, { useState } from 'react';
import { Bell, Lock, UserCircle, Book, Clock, Mail, MessageSquare } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { SecuritySettings } from '@/components/settings/SecuritySettings';
import { ProfileSettings } from '@/components/settings/ProfileSettings';
import { NotificationSettings } from '@/components/settings/NotificationSettings';
import { ClassSettings } from '@/components/settings/ClassSettings';
import { AttendanceRules } from '@/components/settings/AttendanceRules';
import { Button } from '@/components/ui/Button';
import {Input} from "@/components/ui/input.tsx";

type SettingsSection = 'profile' | 'notifications' | 'security' | 'classes' | 'attendance';
type StudentSettingsSection = 'profile' | 'notifications' | 'security';

export const SettingsPage: React.FC = () => {
    const [activeSection, setActiveSection] = useState<SettingsSection | StudentSettingsSection>('profile');
    const { user } = useAuth();

    // Vérifie si l'utilisateur a le rôle "student"
    const isStudent = user?.roles.includes('student');

    const teacherSections = [
        { id: 'profile', icon: UserCircle, label: 'Profile Settings' },
        { id: 'notifications', icon: Bell, label: 'Notifications' },
        { id: 'security', icon: Lock, label: 'Security' },
        { id: 'classes', icon: Book, label: 'Classes' },
        { id: 'attendance', icon: Clock, label: 'Attendance Rules' },
    ] as const;

    const studentSections = [
        { id: 'profile', icon: UserCircle, label: 'Profile Settings' },
        { id: 'notifications', icon: Bell, label: 'Notifications' },
        { id: 'security', icon: Lock, label: 'Security' }
    ] as const;

    const sections = isStudent ? studentSections : teacherSections;

    const renderContent = () => {
        if (isStudent) {
            switch (activeSection) {
                case 'profile':
                    return <StudentProfileSettings />;
                case 'notifications':
                    return <StudentNotificationSettings />;
                case 'security':
                    return <SecuritySettings />;
                default:
                    return null;
            }
        }

        // Teacher content
        switch (activeSection) {
            case 'profile':
                return <ProfileSettings />;
            case 'notifications':
                return <NotificationSettings />;
            case 'security':
                return <SecuritySettings />;
            case 'classes':
                return <ClassSettings />;
            case 'attendance':
                return <AttendanceRules />;
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-[#F8FAFC] pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <h1 className="text-2xl font-bold text-[#2C3E50] mb-8">Settings</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Settings Navigation */}
                    <div className="md:col-span-1">
                        <nav className="space-y-1">
                            {sections.map((section) => (
                                <button
                                    key={section.id}
                                    onClick={() => setActiveSection(section.id)}
                                    className={`w-full flex items-center space-x-3 px-4 py-3 text-left rounded-lg transition-colors ${
                                        activeSection === section.id
                                            ? 'bg-[#1ABC9C] text-white'
                                            : 'text-[#7F8C8D] hover:bg-[#F8FAFC]'
                                    }`}
                                >
                                    <section.icon className="h-5 w-5" />
                                    <span>{section.label}</span>
                                </button>
                            ))}
                        </nav>
                    </div>

                    {/* Settings Content */}
                    <div className="md:col-span-2">
                        <div className="bg-white rounded-lg shadow-sm">
                            {renderContent()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Student-specific profile settings component
const StudentProfileSettings: React.FC = () => {
    const { user } = useAuth();

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
                            {user ? user.firstName.charAt(0) + user.lastName.charAt(0) : ''}
                        </div>
                        <Button variant="secondary">Change Photo</Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input
                            label="First Name"
                            defaultValue={user?.firstName}
                            disabled
                        />
                        <Input
                            label="Last Name"
                            defaultValue={user?.lastName}
                            disabled
                        />
                    </div>

                    <Input
                        label="Email Address"
                        defaultValue={user?.email}
                        type="email"
                        disabled
                    />

                    <Input
                        label="Phone Number"
                        placeholder="Add your phone number"
                        type="tel"
                    />
                </div>

                {/* Student Information */}
                <div className="pt-6 border-t border-[#ECF0F1]">
                    <h3 className="text-lg font-medium text-[#2C3E50] mb-4">
                        Student Information
                    </h3>

                    <div className="space-y-4">
                        <Input
                            label="Student ID"
                            defaultValue="ST-12345"
                            disabled
                        />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Input
                                label="Class"
                                defaultValue="Class of 2024"
                                disabled
                            />
                            <Input
                                label="Enrollment Date"
                                type="date"
                                defaultValue="2024-01-01"
                                disabled
                            />
                        </div>

                        <Input
                            label="Emergency Contact"
                            placeholder="Add emergency contact number"
                            type="tel"
                        />
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

// Student-specific notification settings component
const StudentNotificationSettings: React.FC = () => {
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
                            'Attendance confirmation emails',
                            'Absence justification status updates',
                            'Course schedule changes',
                            'Important announcements',
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
                            'Class start reminders',
                            'Attendance marking reminders',
                            'Justification request updates',
                            'System notifications',
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
                            'Receive messages from teachers',
                            'Receive attendance reports',
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

export default SettingsPage;
