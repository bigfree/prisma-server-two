import { verify } from "jsonwebtoken";
import { AuthChecker } from "type-graphql";

/**
 * Get user id by JWT token
 * @param {string | null} fullToken
 * @returns {string | boolean}
 */
export function getUser(fullToken: string | null): string | boolean {
    if (null !== fullToken) {
        const token: string = fullToken.replace('Bearer ', '');
        const {userId} = verify(token, "das|56da6?3243562#") as { userId: string }
        return userId;
    } else {
        return false;
    }
}

/**
 * Check if user is login
 * @param {string|boolean} user
 * @param {any[]} roles
 * @returns {boolean}
 */
export const authChecker: AuthChecker<string|boolean> = ({ context: { user } }: any, roles: any[]): boolean => {
    return !!user;
}