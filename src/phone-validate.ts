export default class PhoneValidation {
    private _phone: number;
    public flag: boolean = false;
    constructor(
        public limit=10, 
        public spaces=[3, 7, 10], 
        public preffix="+7 "
    ) {}

    get phone(): string {
        if (this._phone === null) {
           return this.flag ? this.preffix : '';
        }
        return String(this._phone);
    }

    set phone(newPhone: string) {
        newPhone = newPhone.replace(/(^|)((\+\d\s)|([^\d]))/g,'');
        if (newPhone.length <= this.limit) {
            this._phone = Number(newPhone) || null;
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
    addPhonePrefix() { this.flag = true; }

    removePhonePrefix() { 
        this.flag = false;
        this.phone = ''; 
    }
}

