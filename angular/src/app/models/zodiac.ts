export class Zodiac {
    _id: string;
    name: string;
    element: string;
    sun_dates: string[];
    compatibility: string[];
    good_traits: string[];
    bad_traits: string[];

    constructor(
        _id: string,
        name: string,
        element: string,
        sun_dates: string[],
        compatibility: string[],
        good_traits: string[],
        bad_traits: string[]
    ) {
        this._id = _id;
        this.name = name;
        this.element = element;
        this.sun_dates = sun_dates;
        this.compatibility = compatibility;
        this.good_traits = good_traits;
        this.bad_traits = bad_traits;
    }
}
