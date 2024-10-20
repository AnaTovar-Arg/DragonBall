let requestPlanetsUrl = "https://dragonball-api.com/api/planets"

async function getPlanets(){
    let response =  await fetch(requestPlanetsUrl)
    let data = await response.json ()
    let planets = data.items
    return planets
}

    let containerPlanets = document.getElementById("containerPlanets")
    getPlanets().then (planets =>{
        planets.forEach(element => {
            containerPlanets.innerHTML+=`

           <div class="image" style="width: 18rem;">
                <img src="${element.image}" class="image" alt="image characters">
            <div class="name">
                <h2 class="card-name">${element.name}</h2>
           </div>
         <ul class="list-group list-group-objects">
            <li class="list-group-description"> ${element.description}</li>
        </ul>
            </div>

            `
        });


    })