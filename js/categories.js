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
//Retrieves all category names from the API
fetch('https://dummyjson.com/recipes/tags')
.then(function(response){
    return response.json()
})
.then(function(data){
    // Adds all category names into html
    const categorySection = document.querySelector('.categoryPage')
    let categories = ''
    for (let i = 0; i < data.length; ++i){
        categories += `<article>
                            <p><a href="category.html?tag=${data[i]}"> ${data[i]} </a></p>
                        </article>` //FILL IN THE LINK IS ARTICLE THE RIGHT THING HERE??
    }
    categorySection.innerHTML = categories
    
})
.catch(function(error){
    console.log(`The error is ${error}`);
})