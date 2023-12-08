import Conta from "./conta.js";

const accountDB = [];
const accountFormElement = document.querySelector('#create__account--form');
const submitButtonElement = document.querySelector('#submit');
const firstNameElement = document.querySelector('#fname');
const lastNameElement = document.querySelector('#lname');

submitButtonElement.addEventListener('click', createAccount);

function createAccount() {
    if (firstNameElement.value === '' || lastNameElement.value === '') {
        alert('Please fill in all fields.');
        return;
    }
    
    accountDB.push(new Conta(firstNameElement.value, lastNameElement.value));
    accountFormElement.innerHTML = `Hello ${firstNameElement.value} ${lastNameElement.value}!<br>Welcome to The CBB Bank<br>Thanks for creating an account with us!`
}