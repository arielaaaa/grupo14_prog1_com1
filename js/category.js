const queryStringObject = new URLSearchParams(location.search);
const tag = queryStringObject.get('tag');
document.querySelector('h1').innerText = tag
fetch(`https://dummyjson.com/recipes/tag/${tag}`)
.then(function(response){
    return response.json();
})
.then(function(data){
    const recipes = document.querySelector('.recipes')
    let recipeList = ''
    for (let i = 0; i < data.recipes.length; ++i) {
        recipeList += `<article> 
                        <img src='${data.recipes[i].image}' alt='${data.recipes[i].name}'>
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