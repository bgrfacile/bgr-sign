import React from "react";

interface Stats {
    present: number;
    absent: number;
    late: number;
    pending: number;
}

interface ClassStatsProps {
    stats: Stats;
}

export const ClassStats: React.FC<ClassStatsProps> = ({ stats }) => {
    return (
        <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
            <h2 className="text-lg font-medium text-[#2C3E50] mb-4">
                Class Stats
            </h2>
            <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-[#1ABC9C]/10 text-center">
                    <div className="text-2xl font-bold text-[#1ABC9C]">
                        {stats.present}
                    </div>
                    <div className="text-sm text-[#2C3E50]">Present</div>
                </div>
                <div className="p-4 rounded-lg bg-[#E74C3C]/10 text-center">
                    <div className="text-2xl font-bold text-[#E74C3C]">
                        {stats.absent}
                    </div>
                    <div className="text-sm text-[#2C3E50]">Absent</div>
                </div>
                <div className="p-4 rounded-lg bg-[#F1C40F]/10 text-center">
                    <div className="text-2xl font-bold text-[#F1C40F]">
                        {stats.late}
                    </div>
                    <div className="text-sm text-[#2C3E50]">Late</div>
                </div>
                <div className="p-4 rounded-lg bg-[#7F8C8D]/10 text-center">
                    <div className="text-2xl font-bold text-[#7F8C8D]">
                        {stats.pending}
                    </div>
                    <div className="text-sm text-[#2C3E50]">Pending</div>
                </div>
            </div>
        </div>
    );
};
