# phone-input

## usage
    Add script on page <script src="phone-input.js"></script>

    js
   ``` <script>
        var phoneInput = window.ValidationLibrary.PhoneInput();
        let phone = document.querySelector('input');
        phone.oninput = function () {
                phone.value = phoneInput.getValidatedPhone(phone.value);
            };
    </script>```

    html
  
```    ...
    <input id="phone" placeholder="Type phone number..." type="text">
    ...```


    see more in example folder

