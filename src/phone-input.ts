export default class PhoneInput {
    private _phone: number = null;
    public flag: boolean = false;
    constructor(
        public limit:number = 10,
        public spaces:number[] = [2, 6, 10],
        public prefix:string = '+7'
    ) {}

    get phone(): string {
        if (this._phone === null) {
           return this.flag ? this.prefix : '';
        }
        let phoneStr = `${this.prefix}${this._phone}`;
        for (let spacePos of this.spaces) {
            if (spacePos < phoneStr.length) {
                phoneStr = `${phoneStr.slice(0, spacePos)} ${phoneStr.slice(spacePos)}`;
            }
        }
        return phoneStr;
    }

    set phone(newPhone: string) {
        newPhone = newPhone.replace(/(^|)((\+\d)|([^\d]))/g,'');
        if (newPhone.length <= this.limit) {
            this._phone = Number(newPhone) || null;
        }
    }
    
    /** get validated phone
     * @param newPhone {string}
     */
    getValidatedPhone(newPhone: string) {
        this.phone = newPhone;
        return this.phone;
    }

    /**
     * add phone prefix
     */
    addPhonePrefix() { this.flag = true; }
    
    /**
     * remove phone prefix
     */
    removePhonePrefix() {
        if (this._phone === null) {
            this.flag = false;
            this.phone = '';
        }  
    }

    /**
     * get pure phone number
     */
    getPhoneNumber() {
        return this._phone;
    }
}

