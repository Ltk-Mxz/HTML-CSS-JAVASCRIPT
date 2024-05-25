const result = document.getElementById("result");
const validate = document.getElementById("validate");
const phoneNumber = document.getElementById("phonenumber");
const phoneRegex = /^1?\s?\(?(\d{3})\)?([-\s])?(\d{3})([-\s])?(\d{4})$/;

/*
    1 555-555-5555
    1 (555) 555-5555
    1(555)555-5555
    1 555 555 5555
    5555555555
    555-555-5555
    (555)555-5555
*/

validate.addEventListener('click', () => {
    if (phoneNumber.value === '') {
        alert("Please, enter a Phone Number!");
    } else {
        if(phoneRegex.test(phoneNumber.value)){
            result.textContent = 'Valid US Phone Number';
            document.querySelector('body').style.backgroundColor = '#0F0';
            document.querySelector('h1').style.color = '#000';
            document.querySelector('#result').style.color = '#000';
            document.querySelector('#phone-container label').style.color = '#000'
        }else{
            result.textContent = 'Invalid US Phone Number';
            document.querySelector('body').style.backgroundColor = '#F00';
            document.querySelector('h1').style.color = '#FFF';
            document.querySelector('#result').style.color = '#FFF';
            document.querySelector('#phone-container label').style.color = '#FFF'
        }
    }
});