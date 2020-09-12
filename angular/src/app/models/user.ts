import { Zodiac } from "./zodiac";

export class User {
    username: string;
    password: string;
    first_name: string;
    last_name: string;
    dob: Date;
    static zodiac: Zodiac;
    gender: number;
}
