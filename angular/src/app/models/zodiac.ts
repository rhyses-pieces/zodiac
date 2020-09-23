export class Zodiac {
    _id: string;
    name: string;
    element: string;
    sun_dates: string[];
    compatibility: string[];
    good_traits: string[];
    bad_traits: string[];
    symbol: string[];
    cardinality: string[]; 
    ruling_planet: string[]; 
    how_to_spot: string[]; 
    secret_wish: string[]; 
    favorites: string[]; 
    keywords: string[]; 
    vibe: string[]; 
    body_parts: string[]; 
    mental_traits: string[]; 
    physical_traits: string[]; 
    famous_people: string[]; 

    constructor(
        _id: string,
        name: string,
        element: string,
        sun_dates: string[],
        compatibility: string[],
        good_traits: string[],
        bad_traits: string[],
        symbol: string[],
        cardinality: string[],
        ruling_planet: string[],
        how_to_spot: string[], 
        secret_wish: string[], 
        favorites: string[], 
        keywords: string[], 
        vibe: string[], 
        body_parts: string[], 
        mental_traits: string[], 
        physical_traits: string[], 
        famous_people: string[]
    ) {
        this._id = _id;
        this.name = name;
        this.element = element;
        this.sun_dates = sun_dates;
        this.compatibility = compatibility;
        this.good_traits = good_traits;
        this.bad_traits = bad_traits;
        this.symbol = symbol;
        this.cardinality = cardinality; 
        this.ruling_planet = ruling_planet; 
        this.how_to_spot = how_to_spot; 
        this.secret_wish = secret_wish; 
        this.favorites = favorites; 
        this.keywords = keywords; 
        this.vibe = vibe; 
        this.body_parts = body_parts; 
        this.mental_traits = mental_traits; 
        this.physical_traits = physical_traits; 
        this.famous_people = famous_people; 
    }
}
