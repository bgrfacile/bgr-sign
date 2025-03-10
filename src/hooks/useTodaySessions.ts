import { useState, useEffect } from 'react';
import SessionService, { SessionResponse } from '@/services/SessionService';

export const useTodaySessions = () => {
    const [sessions, setSessions] = useState<SessionResponse[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchSessions = async () => {
            try {
                const data = await SessionService.getSessionsToday();
                setSessions(data);
            } catch (err: any) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchSessions().then(r => r);
    }, []);

    return { sessions, loading, error };
};
