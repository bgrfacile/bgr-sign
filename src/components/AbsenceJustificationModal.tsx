import React, { useState } from 'react';
import { X, Upload } from 'lucide-react';
import {Button} from "@/components/ui/Button.tsx";
import { Input } from '@/components/ui/input';

interface AbsenceJustificationModalProps {
    onClose: () => void;
    onSubmit: (data: { reason: string; files: FileList | null }) => void;
    type: 'absence' | 'late';
}

export const AbsenceJustificationModal: React.FC<AbsenceJustificationModalProps> = ({
                                                                                        onClose,
                                                                                        onSubmit,
                                                                                        type
                                                                                    }) => {
    const [reason, setReason] = useState('');
    const [files, setFiles] = useState<FileList | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({ reason, files });
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-lg">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold text-[#2C3E50]">
                        Justify {type === 'absence' ? 'Absence' : 'Late Arrival'}
                    </h2>
                    <button
                        onClick={onClose}
                        className="text-[#7F8C8D] hover:text-[#2C3E50]"
                    >
                        <X className="h-6 w-6" />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <Input
                            label="Reason"
                            placeholder="Please provide a reason..."
                            value={reason}
                            onChange={(e) => setReason(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-[#7F8C8D] mb-2">
                            Supporting Documents (Optional)
                        </label>
                        <div className="border-2 border-dashed border-[#ECF0F1] rounded-lg p-4">
                            <div className="flex flex-col items-center">
                                <Upload className="h-8 w-8 text-[#7F8C8D] mb-2" />
                                <p className="text-sm text-[#7F8C8D] text-center mb-2">
                                    Drag and drop your files here, or click to select files
                                </p>
                                <input
                                    type="file"
                                    multiple
                                    className="hidden"
                                    id="file-upload"
                                    onChange={(e) => setFiles(e.target.files)}
                                />
                                <label
                                    htmlFor="file-upload"
                                    className="cursor-pointer text-sm text-[#1ABC9C] hover:text-[#16A085]"
                                >
                                    Browse Files
                                </label>
                            </div>
                            {files && files.length > 0 && (
                                <div className="mt-4">
                                    <p className="text-sm text-[#7F8C8D]">Selected files:</p>
                                    <ul className="text-sm text-[#2C3E50]">
                                        {Array.from(files).map((file, index) => (
                                            <li key={index}>{file.name}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="flex justify-end space-x-4 pt-4">
                        <Button variant="secondary" type="button" onClick={onClose}>
                            Cancel
                        </Button>
                        <Button type="submit">
                            Submit Justification
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};