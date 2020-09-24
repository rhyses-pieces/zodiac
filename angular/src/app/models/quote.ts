export class Quote {
    id:number;
    message:string;
    author:string;
    source:string;
    source_id:string;
    message_len:number;
    created_at:Date;
    updated_at:Date;
    genre:string;

    constructor(
        id:number,
        message:string,
        author:string,
        source:string,
        source_id:string,
        message_len:number,
        created_at:Date,
        updated_at:Date,
        genre:string
    ){
        this.id = id;
        this.message = message;
        this.author = author;
        this.source = source;
        this.source_id = source_id;
        this.message_len = message_len;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.genre = genre;
    }
}
