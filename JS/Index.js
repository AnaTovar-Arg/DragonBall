let requestUrl = "https://dragonball-api.com/api/characters?limit=58"

async function getCharacters(){
    let response =  await fetch(requestUrl)
    let data = await response.json ()
    let characters = data.items
    return characters
}

let container = document.getElementById("container")
    getCharacters().then (characters =>{
        characters.forEach(element => {
            container.innerHTML+=`
            <img src ="${element.image}">
            <h3> ${element.name} </h3>

            `
        });


    })