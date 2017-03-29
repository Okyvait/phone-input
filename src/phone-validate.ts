export default class PhoneValidation {
    private _phone: number;
    flag: boolean;
    constructor(public limit=10, public spaces=[3, 7, 10]) {
    }

    get phone(): string {
        return String(this._phone);
    }

    set phone(newPhone: string) {
        newPhone = newPhone.replace(/(^|)((\+\d\s)|([^\d]))/g,'');
        if (newPhone.length <= this.limit) {
            this._phone = Number(newPhone);
        }
    }
}

