const form = document.querySelector('form')
const input = document.querySelector('input')
form.addEventListener('submit',function(){
    if (input.value == '' || input.value.length <= 3){
        alert('Search must contain atleast 3 characters')
    }
})