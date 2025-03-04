import React from 'react';
import {X} from 'lucide-react';
import {Session} from "@/types";
import {SignatureCanvas} from "@/components/SignatureCanvas.tsx";

interface AttendanceModalProps {
    session: Session;
    onClose: () => void;
    onConfirm: (signature: string) => void;
}

export const AttendanceModal: React.FC<AttendanceModalProps> = ({
                                                                    session,
                                                                    onClose,
                                                                    onConfirm,
                                                                }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg max-w-lg w-full mx-4">
                <div className="flex justify-between items-center p-4 border-b">
                    <h2 className="text-xl font-semibold">Confirmer votre présence</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700"
                    >
                        <X className="w-6 h-6"/>
                    </button>
                </div>
                <div className="p-4">
                    <div className="mb-6">
                        <h3 className="font-medium text-gray-900">{session.courseName}</h3>
                        <p className="text-gray-600">{session.teacherName}</p>
                    </div>
                    <SignatureCanvas
                        onClose={onClose}
                        onSubmit={onConfirm}
                    />
                </div>
            </div>
        </div>
    );
}