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
const login = document.querySelector('.logReg form')
const email = document.querySelector('#email')
const psw = document.querySelector('#psw')
login.addEventListener('submit', function (event) {
    event.preventDefault();
    if (email.value == '') {
        alert('Email must be filled in')
    } else if (psw.value == '') {//There will only be one alert at a time, if there is neither an email or password it will only alert about the missing email.
        alert('Password must be filled in')
    } else {
        this.submit()
    }
})