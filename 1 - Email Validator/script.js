const result = document.getElementById("result");
const validate = document.getElementById("validate");
const email = document.getElementById("email");

const emailRegex = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

validate.addEventListener('click', () => {
    if (email.value === '') {
        alert("Please, enter an email!");
    } else {
        if (emailRegex.test(email.value)) {
            result.textContent = 'Email Valid';
            document.querySelector('body').style.backgroundColor = '#0F0';
            document.querySelector('h1').style.color = '#000';
            document.querySelector('#result').style.color = '#000';
            document.querySelector('#email-container label').style.color = '#000'
        } else {
            result.textContent = 'Email Invalid';
            document.querySelector('body').style.backgroundColor = '#F00';
            document.querySelector('h1').style.color = '#FFF';
            document.querySelector('#result').style.color = '#FFF';
            document.querySelector('#email-container label').style.color = '#FFF'
        }
    }
});