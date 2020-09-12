export class User {
    //String username, int password, String firstName, String lastName, Date dateOfBirth, String description,int gender, byte[] picture
    id: number;
    username:string;
    first_name:string;
    last_name:string;
    date_of_birth:string;
    description: string;
    gender:number;
    //picture:number[];

    constructor(
        id: number,
    username:string,
    first_name:string,
    last_name:string,
    date_of_birth:string,
    description: string,
    gender:number
    ){
    this.id = id;
    this.username = username;
    this.first_name = first_name;
    this.last_name = last_name;
    this.date_of_birth = date_of_birth;
    this.description = description;
    this.gender = gender;
    }
}
