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



const viewMore = document.querySelector('#viewMore');
let skip = 0
let recipeList = ''
//Loads initial 10
recipes(10, 0)
//Loads a new 10 with every cick
viewMore.addEventListener('click', function () {
    skip += 10
    recipes(10, skip);
})
//Gets info from api and runs the function for the recipes using the data provided
function recipes(load, noLoad) {
    fetch(`https://dummyjson.com/recipes?limit=${load}&skip=${noLoad}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            const recipes = document.querySelector('.recipes')

            for (let i = 0; i < data.recipes.length; ++i) {
                recipeList += `<article> 
                            <a href= 'recipes.html?id=${data.recipes[i].id}'>
                            <img src='${data.recipes[i].image}' alt='${data.recipes[i].name}'>
                            </a>
                            <p>${data.recipes[i].name}</p>
                            <p>${data.recipes[i].difficulty}</p>
                            <p><a href= 'recipes.html?id=${data.recipes[i].id}'>Details</a></p>            
                        </article>`
            }
            recipes.innerHTML = recipeList
        })
        .catch(function (error) {
            console.log(`The error is ${error}`)
        })
}

