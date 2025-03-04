import {
    Check,
    X,
    Clock
} from 'lucide-react';

export const getStatusColor = (status: string) => {
    switch (status) {
        case 'present':
            return 'text-[#1ABC9C] bg-[#1ABC9C]/10';
        case 'absent':
            return 'text-[#E74C3C] bg-[#E74C3C]/10';
        case 'late':
            return 'text-[#F1C40F] bg-[#F1C40F]/10';
        default:
            return 'text-[#7F8C8D] bg-[#7F8C8D]/10';
    }
};

export const getStatusIcon = (status: string) => {
    switch (status) {
        case 'present':
            return <Check className="h-4 w-4" />;
        case 'absent':
            return <X className="h-4 w-4" />;
        case 'late':
            return <Clock className="h-4 w-4" />;
        default:
            return <Clock className="h-4 w-4" />;
    }
};