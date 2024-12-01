import React, { useRef, useEffect } from 'react';
import {Button} from "@/components/ui/Button.tsx";

interface SignatureCanvasProps {
    onSave: (signature: string) => void;
    onCancel: () => void;
}

export const SignatureCanvas: React.FC<SignatureCanvasProps> = ({ onSave, onCancel }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const contextRef = useRef<CanvasRenderingContext2D | null>(null);
    const isDrawing = useRef(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        canvas.width = canvas.offsetWidth * 2;
        canvas.height = canvas.offsetHeight * 2;
        canvas.style.width = `${canvas.offsetWidth}px`;
        canvas.style.height = `${canvas.offsetHeight}px`;

        const context = canvas.getContext('2d');
        if (!context) return;

        context.scale(2, 2);
        context.lineCap = 'round';
        context.strokeStyle = 'black';
        context.lineWidth = 2;
        contextRef.current = context;
    }, []);

    const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
        const { offsetX, offsetY } = e.nativeEvent;
        contextRef.current?.beginPath();
        contextRef.current?.moveTo(offsetX, offsetY);
        isDrawing.current = true;
    };

    const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
        if (!isDrawing.current || !contextRef.current) return;
        const { offsetX, offsetY } = e.nativeEvent;
        contextRef.current.lineTo(offsetX, offsetY);
        contextRef.current.stroke();
    };

    const stopDrawing = () => {
        contextRef.current?.closePath();
        isDrawing.current = false;
    };

    const clearCanvas = () => {
        const canvas = canvasRef.current;
        const context = contextRef.current;
        if (!canvas || !context) return;
        context.clearRect(0, 0, canvas.width, canvas.height);
    };

    const saveSignature = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const signature = canvas.toDataURL('image/png');
        onSave(signature);
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Signature</h3>
            <div className="border-2 border-gray-300 rounded-lg mb-4">
                <canvas
                    ref={canvasRef}
                    className="w-full h-48 cursor-crosshair"
                    onMouseDown={startDrawing}
                    onMouseMove={draw}
                    onMouseUp={stopDrawing}
                    onMouseLeave={stopDrawing}
                />
            </div>
            <div className="flex space-x-4">
                <Button onClick={clearCanvas} variant="secondary">
                    Effacer
                </Button>
                <Button onClick={saveSignature} variant="primary">
                    Valider
                </Button>
                <Button onClick={onCancel} variant="outline">
                    Annuler
                </Button>
            </div>
        </div>
    );
}