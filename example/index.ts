import PhoneValidation from '../src/phone-validate';

let phoneCheck = new PhoneValidation();
let phoneInput = <HTMLInputElement> document.querySelector('.phone');

phoneInput.oninput = () => {
	phoneInput.value = phoneCheck.validate(phoneInput.value);
	console.log(phoneCheck.phone);
}

phoneInput.onclick = phoneCheck.addPhonePrefix;
// phoneInput.onblur = phoneCheck.clear;