import PhoneInput from '../src/phone-input';

let phoneInput = new PhoneInput();
let phone = <HTMLInputElement> document.querySelector('.phone');
let phoneList = <HTMLInputElement> document.querySelector('.phone--list');

phone.oninput = () => {
	phone.value = phoneInput.getValidatedPhone(phone.value);
};

phone.onclick = () => { 
	phoneInput.addPhonePrefix();
	phone.value = phoneInput.phone;
};

phone.onblur = () => { 
	phoneInput.removePhonePrefix();
	phone.value = phoneInput.getValidatedPhone(phone.value);
};

phone.onkeypress = event => {
	if (event.which == 13 || event.keyCode == 13) {
		let number = String(phoneInput.getPhoneNumber());
    	if (number.length === phoneInput.limit) {
    		let li = document.createElement('li');
    		li.innerHTML = phoneInput.phone;
    		phoneList.appendChild(li);
    		phoneInput.phone = '';
    		phone.value = '';
    	}
    }
};