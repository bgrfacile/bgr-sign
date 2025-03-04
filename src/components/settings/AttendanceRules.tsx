import React from 'react';
import { Clock, AlertTriangle, CheckCircle } from 'lucide-react';
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/Button.tsx";

export const AttendanceRules: React.FC = () => {
    return (
        <>
            <div className="p-6 border-b border-[#ECF0F1]">
                <h2 className="text-xl font-bold text-[#2C3E50]">Attendance Rules</h2>
                <p className="text-[#7F8C8D] mt-1">
                    Configure attendance tracking and notification rules
                </p>
            </div>

            <div className="p-6 space-y-6">
                {/* Time Settings */}
                <div className="space-y-4">
                    <h3 className="text-lg font-medium text-[#2C3E50] flex items-center gap-2">
                        <Clock className="h-5 w-5 text-[#1ABC9C]" />
                        Time Settings
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input
                            label="Late Threshold (minutes)"
                            type="number"
                            defaultValue="15"
                        />
                        <Input
                            label="Absence Threshold (minutes)"
                            type="number"
                            defaultValue="30"
                        />
                    </div>
                </div>

                {/* Absence Rules */}
                <div className="pt-6 border-t border-[#ECF0F1] space-y-4">
                    <h3 className="text-lg font-medium text-[#2C3E50] flex items-center gap-2">
                        <AlertTriangle className="h-5 w-5 text-[#1ABC9C]" />
                        Absence Rules
                    </h3>
                    <div className="space-y-3">
                        <Input
                            label="Consecutive Absences Alert"
                            type="number"
                            defaultValue="3"
                            helperText="Number of consecutive absences before sending an alert"
                        />
                        <Input
                            label="Monthly Absence Limit"
                            type="number"
                            defaultValue="5"
                            helperText="Maximum allowed absences per month"
                        />
                    </div>
                </div>

                {/* Automatic Actions */}
                <div className="pt-6 border-t border-[#ECF0F1] space-y-4">
                    <h3 className="text-lg font-medium text-[#2C3E50] flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-[#1ABC9C]" />
                        Automatic Actions
                    </h3>
                    <div className="space-y-3">
                        {[
                            'Notify teachers on consecutive absences',
                            'Send weekly attendance reports',
                            'Auto-approve documented medical absences',
                            'Alert parents on unexcused absences',
                        ].map((action, index) => (
                            <label key={index} className="flex items-center space-x-3">
                                <input
                                    type="checkbox"
                                    defaultChecked
                                    className="h-4 w-4 text-[#1ABC9C] border-[#BDC3C7] rounded"
                                />
                                <span className="text-[#34495E]">{action}</span>
                            </label>
                        ))}
                    </div>
                </div>

                <div className="flex justify-end space-x-4 pt-6">
                    <Button variant="secondary">Reset to Defaults</Button>
                    <Button>Save Changes</Button>
                </div>
            </div>
        </>
    );
};