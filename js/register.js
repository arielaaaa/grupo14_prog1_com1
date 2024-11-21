// Checks the searchbar has more than 3 characters
//CAN I JUST USE ONE JS FOR THE LOGIN AND REGISTER SINCE THE FUNCTIONALITY IS THE SAME????
const form = document.querySelector('form')
const input = document.querySelector('input')
form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (input.value == '' || input.value.length < 3) {
        alert('Search must contain atleast 3 characters')
    }else{
        this.submit()
    }
})
