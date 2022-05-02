export interface User {
    id?: number;
    userName: string;
    firstName: string;
    lastName: string;
    phoneNumber?: number;
    emailAddress: string;
    starDate?: Date;
    password?: string;
}