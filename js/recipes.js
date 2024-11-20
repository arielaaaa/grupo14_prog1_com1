const queryStringObject = new URLSearchParams(location.search);
const id = queryStringObject.get('id')
fetch(`https://dummyjson.com/recipes/${id}`)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data)
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
                            <p><a href=""> ${data.tags[i]} </a></p>
                        </article>` //FILL IN THE LINK IS ARTICLE THE RIGHT THING HERE??
    }
    categorySection.innerHTML = categories
})  
