// Checks the searchbar has more than 3 characters
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
//Queries the url for the relevant id 
const queryStringObject = new URLSearchParams(location.search);
const id = queryStringObject.get('id')
fetch(`https://dummyjson.com/recipes/${id}`)
.then(function(response){
    return response.json();
})
.then(function(data){
    // Utilises de id to obtain the information from the API
    const image = document.querySelector('#foodImage')
    document.querySelector('h1').innerText = data.name
    document.querySelector('.instruction').innerHTML += ` <p> ${data.instructions}</p>`
    document.querySelector('#time').innerText += data.cookTimeMinutes
    image.src = data.image
    image.alt = data.name
    const categorySection = document.querySelector('.categories')
    let categories = ''
    for (let i = 0; i < data.tags.length; ++i){
        categories += `<article>
                            <p><a href="category.html?tag=${data.tags[i]}"> ${data.tags[i]} </a></p>
                        </article>` //FILL IN THE LINK IS ARTICLE THE RIGHT THING HERE??
    }
    categorySection.innerHTML = categories
})  
.catch(function (error) {
    console.log(`The error is ${error}`)
})
