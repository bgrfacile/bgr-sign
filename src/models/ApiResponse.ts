export type ApiResponse<T> = {
    status: number;
    message: string;
    statusText: string;
    data: T;
}