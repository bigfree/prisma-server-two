export interface UserData {
    id: number;
    email: string;
    name?: string;
    createdAt: string;
    updatedAt?: string;
    deletedAt?: string;
}

export interface UserPayload {
    success?: boolean;
    message?: string;
    token?: string;
    user: object;
    count?: number;
}