import PhoneValidation from '../src/phone-validate';

let phoneCheck = new PhoneValidation();
let phoneInput = <HTMLInputElement> document.querySelector('.phone');
let phoneList = <HTMLInputElement> document.querySelector('.phone--list');

phoneInput.oninput = () => {
	phoneInput.value = phoneCheck.validate(phoneInput.value);
}

phoneInput.onclick = () => { 
	phoneCheck.addPhonePrefix();
	phoneInput.value = phoneCheck.phone;
}

phoneInput.onblur = () => { 
	phoneCheck.removePhonePrefix();
	phoneInput.value = phoneCheck.validate(phoneInput.value); 
}

phoneInput.onkeypress = event => {
	if (event.which == 13 || event.keyCode == 13) {
		let phone = String(phoneCheck.getNumber());
    	if (phone.length === phoneCheck.limit) {
    		let li = document.createElement('li');
    		li.innerHTML = phoneCheck.phone;
    		phoneList.appendChild(li);
    		phoneCheck.phone = '';
    		phoneInput.value = '';
    	}
    }
}