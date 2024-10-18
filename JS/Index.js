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


  <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${element.image}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h3 class="card-title">${element.name}</h3>
        <p class="card-text">${element.description}</p>
      <ul class="list-group list-group-objects">
            <li class="list-group-ki"> ki=${element.ki}</li>
            <li class="list-group-maxKi"> totalKi=${element.maxKi}</li>
            <li class="list-group-affiliation"> affiliation=${element.affiliation}</li>
      </div>
    </div>
  </div>
</div>
`
  });
})

 