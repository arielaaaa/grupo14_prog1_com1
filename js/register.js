// Checks the searchbar has more than 3 characters
const form = document.querySelector('form')
const input = document.querySelector('input')
form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (input.value == '' || input.value.length < 3) {
        alert('Search must contain atleast 3 characters')
    } else {
        this.submit()
    }
})


//Checks email and password for contents
const validemail = document.querySelector('.validemail')
const validpsw = document.querySelector('.validpsw')
const login = document.querySelector('.logReg form')
const email = document.querySelector('#email')
const psw = document.querySelector('#psw')
login.addEventListener('submit', function (event) {
    event.preventDefault();
    if (email.value == '') {
        validemail.innerText = 'Please enter a valid email'
    } else{
         validemail.innerText = ''
    }
    if (psw.value == '') {
        validpsw.innerText = 'Please enter a valid password'
    }else{
        validpsw.innerText = ''}
    if(email.value != '' && psw.value != '') {
        this.submit()
    }
})