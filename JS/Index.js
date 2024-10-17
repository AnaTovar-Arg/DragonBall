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

           <div class="image" style="width: 18rem;">
                <img src="${element.image}" class="image" alt="image characters">
            <div class="name">
                <h5 class="card-name">${element.name}</h5>
           </div>

  <ul class="list-group list-group-flush">
    <li class="list-group-item"> ki=${element.ki}</li>
    <li class="list-group-item">totalKi=${element.maxKi}/li>
    <li class="list-group-item">affiliation=${element.affiliation}</li>
  </ul>
</div>

            `
        });


    })
