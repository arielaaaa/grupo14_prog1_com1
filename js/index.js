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
//Function that adds the recipes
function loadRecipes(data,b){
const recipes = document.querySelector('.recipes')
let recipeList = ''
for (let i = 0; i < b; ++i) {
    recipeList += `<article> 
                      <img src='${data.recipes[i].image}' alt='${data.recipes[i].name}'>
                      <p>${data.recipes[i].name}</p>
                      <p>${data.recipes[i].difficulty}</p>
                      <p><a href= 'recipes.html?id=${data.recipes[i].id}'>Details</a></p>            
                   </article>`
}
//MAKE IT SO YOU CAN CLICK ANYWHERE AND IT LINKS????
recipes.innerHTML = recipeList
}
//Gets info from api and runs the function for the recipes using the data provided
fetch('https://dummyjson.com/recipes')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let load = 10
        loadRecipes(data,load)
        const viewMore = document.querySelector('.viewMore')
        viewMore.addEventListener('click',function(){
            loadRecipes(data, load += 10)})//adds ten everytime button is clicked
    })//WHY ONLY 30 LOAD????
    .catch(function (error) {
        console.log(`The error is ${error}`)
    })
