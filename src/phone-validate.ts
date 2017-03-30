export default class PhoneValidation {
    private _phone: number = null;
    public flag: boolean = false;
    constructor(
        public limit:number=10, 
        public spaces:number[]=[2, 6, 10], 
        public preffix:string='+7'
    ) {}

    get phone(): string {
        if (this._phone === null) {
           return this.flag ? this.preffix : '';
        }
        let phoneStr = `${this.preffix}${this._phone}`;
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
    
    /**
     * remove phone preffix
     */
    removePhonePrefix() {
        if (this._phone === null) {
            this.flag = false;
            this.phone = '';
        }  
    }
}

