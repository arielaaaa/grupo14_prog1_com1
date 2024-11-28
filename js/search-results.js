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
// Gets the search information from the url and queries the API
const results = document.querySelector('.recipes')
const mainText = document.querySelector('h1')
const queryStringObject = new URLSearchParams(location.search);
const userSearch = queryStringObject.get('search');
fetch(`https://dummyjson.com/recipes/search?q=${userSearch}`)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        // Adds the relevant information into the html
        if (data.recipes == '') {
            mainText.innerText = `No results for: ${userSearch}`
        } else {
            mainText.innerText = `Search results for: ${userSearch}`
            let recipes = '';
            for (let i = 0; i < data.recipes.length; i++) {
                recipes += `<article> 
                            <a href= 'recipes.html?id=${data.recipes[i].id}'>
                            <img src='${data.recipes[i].image}' alt='${data.recipes[i].name}'>
                            </a>
                            <p>${data.recipes[i].name}</p>
                            <p><a href= 'recipes.html?id=${data.recipes[i].id}'>Details</a></p>            
                        </article>`
            }
            results.innerHTML = recipes
        }

    })
    .catch(function (error) {
        console.log(`The error is ${error}`)
    })