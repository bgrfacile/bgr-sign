import { useState, useEffect } from 'react';
import AttendanceService from "@/services/AttendanceService.tsx";
import {AttendanceInfoResponse} from "@/models/responses/AttendanceInfoResponse.ts";

export const useFetchAttendanceInfo = (courseId: number | undefined) => {
    const [data, setData] = useState<AttendanceInfoResponse>({} as AttendanceInfoResponse);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!courseId) return;

        const fetchAttendanceInfo = async () => {
            try {
                const response = await AttendanceService.getAttendanceInfo(courseId)
                setData(response);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Une erreur est survenue');
            } finally {
                setLoading(false);
            }
        };

        fetchAttendanceInfo().then(r => r);
    }, [courseId]);

    return { data, loading, error };
};
