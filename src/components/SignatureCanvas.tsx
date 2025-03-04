import React, { useRef, useEffect } from 'react';
import { X } from 'lucide-react';
import {Button} from "@/components/ui/Button.tsx";

interface SignatureCanvasProps {
    onClose: () => void;
    onSubmit: (signatureData: string) => void;
}

export const SignatureCanvas: React.FC<SignatureCanvasProps> = ({ onClose, onSubmit }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const isDrawing = useRef(false);
    const lastX = useRef(0);
    const lastY = useRef(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas size
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;

        // Set drawing style
        ctx.strokeStyle = '#2C3E50';
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        const draw = (e: MouseEvent | TouchEvent) => {
            if (!isDrawing.current) return;

            const canvas = canvasRef.current;
            const ctx = canvas?.getContext('2d');
            if (!canvas || !ctx) return;

            let clientX, clientY;

            if (e instanceof MouseEvent) {
                clientX = e.clientX;
                clientY = e.clientY;
            } else {
                clientX = e.touches[0].clientX;
                clientY = e.touches[0].clientY;
            }

            const rect = canvas.getBoundingClientRect();
            const x = clientX - rect.left;
            const y = clientY - rect.top;

            ctx.beginPath();
            ctx.moveTo(lastX.current, lastY.current);
            ctx.lineTo(x, y);
            ctx.stroke();

            lastX.current = x;
            lastY.current = y;
        };

        const startDrawing = (e: MouseEvent | TouchEvent) => {
            isDrawing.current = true;

            let clientX, clientY;

            if (e instanceof MouseEvent) {
                clientX = e.clientX;
                clientY = e.clientY;
            } else {
                clientX = e.touches[0].clientX;
                clientY = e.touches[0].clientY;
            }

            const rect = canvas.getBoundingClientRect();
            lastX.current = clientX - rect.left;
            lastY.current = clientY - rect.top;
        };

        const stopDrawing = () => {
            isDrawing.current = false;
        };

        // Mouse events
        canvas.addEventListener('mousedown', startDrawing);
        canvas.addEventListener('mousemove', draw);
        canvas.addEventListener('mouseup', stopDrawing);
        canvas.addEventListener('mouseout', stopDrawing);

        // Touch events
        canvas.addEventListener('touchstart', (e) => {
            e.preventDefault();
            startDrawing(e);
        });
        canvas.addEventListener('touchmove', (e) => {
            e.preventDefault();
            draw(e);
        });
        canvas.addEventListener('touchend', stopDrawing);

        return () => {
            canvas.removeEventListener('mousedown', startDrawing);
            canvas.removeEventListener('mousemove', draw);
            canvas.removeEventListener('mouseup', stopDrawing);
            canvas.removeEventListener('mouseout', stopDrawing);
            canvas.removeEventListener('touchstart', startDrawing);
            canvas.removeEventListener('touchmove', draw);
            canvas.removeEventListener('touchend', stopDrawing);
        };
    }, []);

    const clearCanvas = () => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        if (!canvas || !ctx) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    };

    const handleSubmit = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const signatureData = canvas.toDataURL();
        onSubmit(signatureData);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-lg">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold text-[#2C3E50]">Sign Attendance</h2>
                    <button
                        onClick={onClose}
                        className="text-[#7F8C8D] hover:text-[#2C3E50]"
                    >
                        <X className="h-6 w-6" />
                    </button>
                </div>

                <div className="border-2 border-[#ECF0F1] rounded-lg mb-4">
                    <canvas
                        ref={canvasRef}
                        className="w-full h-64 touch-none"
                        style={{ touchAction: 'none' }}
                    />
                </div>

                <p className="text-sm text-[#7F8C8D] mb-4">
                    Please sign above to mark your attendance
                </p>

                <div className="flex justify-end space-x-4">
                    <Button variant="secondary" onClick={clearCanvas}>
                        Clear
                    </Button>
                    <Button onClick={handleSubmit}>
                        Submit
                    </Button>
                </div>
            </div>
        </div>
    );
};