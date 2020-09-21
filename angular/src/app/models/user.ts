export class User {
    //String username, int password, String firstName, String lastName, Date dateOfBirth, String description,int gender, byte[] picture
    id: number;
    username:string;
    password: string;
    first_name:string;
    last_name:string;
    dateOfBirth:string;
    zodiac: string;
    description: string;
    gender:number;
    // dateOfBirth:string;
    //picture:number[];

    constructor(
        id: number,
        username:string,
        password: string,
        first_name:string,
        last_name:string,
        dateOfBirth:string,
        zodiac: string,
        description: string,
        gender:number
    ) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.first_name = first_name;
        this.last_name = last_name;
        this.dateOfBirth = dateOfBirth;
        this.zodiac = zodiac;
        this.description = description;
        this.gender = gender;
    }
    
}
