export default class Phone {
    private _phone: number;
    flag: boolean;
    constructor(public limit=10, public spacePositions=[3, 7, 10]) {
    }

    get phone(): string {
        return this._phone + '';
    }

    set phone(newPhone: string) {

    }
}

