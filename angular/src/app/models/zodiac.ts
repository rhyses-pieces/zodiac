export class Zodiac {
    id:string;
    name:string;
    sun_dates:string[];

    constructor(id:string,
        name:string,
        sun_dates:string[]) {
            this.id = id;
            this.name = name;
            this.sun_dates = sun_dates
        }
}
