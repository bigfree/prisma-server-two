
import { verify } from "jsonwebtoken";
import { AuthChecker } from "type-graphql";

export class AuthError extends Error {
    constructor() {
        super('Not authorized');
    }
}

export function authChecker(fullToken: string | null): string | boolean {
    if (fullToken) {
        const token: string = fullToken.replace('Bearer ', '');
        const { userId } = verify(token, "das|56da6?3243562#") as { userId: string }
        return userId;
    } else {
        return false;
    }
}

export const customAuthChecker: AuthChecker<any, any> = ({context}, roles) => {
    return !!context.user;
}