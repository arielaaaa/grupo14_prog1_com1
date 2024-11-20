fetch('https://dummyjson.com/recipes/tags')
.then(function(response){
    return response.json()
})
.then(function(data){
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