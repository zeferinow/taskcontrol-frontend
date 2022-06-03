import { JwtLoginMessages } from './jwtLoginMessages';


export interface JwtLogin { 
    accessToken?: string;
    tokenId?: string;
    inactivityControlDate?: Date;
    messages?: JwtLoginMessages;
    mustRefreshToken?: boolean;
}
