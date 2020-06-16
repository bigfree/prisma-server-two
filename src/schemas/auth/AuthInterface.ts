export interface AuthInterfacePayload {
    message?: string;
    success: boolean;
    token: string;
    user: object;
}