import React, {useState} from "react";
import {Button} from "@/components/ui/Button";
import {X} from "lucide-react";

interface AttendanceQRCodeProps {
    qrCodeUrl: string; // URL du QR code
}

export const AttendanceQRCode: React.FC<AttendanceQRCodeProps> = ({qrCodeUrl}) => {
    const [isFullscreen, setIsFullscreen] = useState(false);

    const handleToggleFullscreen = () => {
        setIsFullscreen(!isFullscreen);
    };

    return (
        <div className="bg-white rounded-lg shadow-sm p-6 relative">
            <h2 className="text-lg font-medium text-[#2C3E50] mb-4">Attendance QR Code</h2>

            {/* Zone d'affichage du QR code */}
            <div
                className={`aspect-square bg-white p-4 rounded-lg border-2 border-[#ECF0F1] flex items-center justify-center 
          ${isFullscreen ? "fixed inset-0 z-50 bg-black bg-opacity-75 flex flex-col" : ""}`}
            >
                <img
                    src={qrCodeUrl}
                    alt="Class QR Code"
                    className={`w-full h-full object-contain ${isFullscreen ? "max-w-sm" : ""}`}
                />

                {/* Bouton de fermeture quand on est en plein écran */}
                {isFullscreen && (
                    <Button
                        variant="secondary"
                        onClick={handleToggleFullscreen}
                        className="absolute top-4 right-4 flex items-center space-x-2"
                    >
                        <X className="h-4 w-4"/>
                        <span>Close</span>
                    </Button>
                )}
            </div>

            <p className="text-sm text-[#7F8C8D] mt-4 text-center">
                Students can scan this QR code to mark their attendance
            </p>

            {/* Bouton pour activer le plein écran quand on est en vue "normale" */}
            {!isFullscreen && (
                <div className="flex justify-center mt-4">
                    <Button variant="default" onClick={handleToggleFullscreen}>
                        View Fullscreen
                    </Button>
                </div>
            )}
        </div>
    );
};
