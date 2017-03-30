export default class PhoneValidation {
    private _phone: number;
    flag: boolean;
    constructor(
        public limit=10, 
        public spaces=[3, 7, 10], 
        public preffix="+7 "
    ) {}

    get phone(): string {
        return String(this._phone);
    }

    set phone(newPhone: string) {
        newPhone = newPhone.replace(/(^|)((\+\d\s)|([^\d]))/g,'');
        if (newPhone.length <= this.limit) {
            this._phone = Number(newPhone);
        }
    }
    
    /** get validated phone
     * @param {string}
     */
    validate(val: string | number) {
        this.phone = String(val);
        return this.phone;
    }
    
    /**
     * add phone preffix
     */
    addPhonePrefix = function() {
        this.flag = true;
    }
}

