

function main(){
  fetchAnimals()
  createFormListener()
  createDeleteListener()
}

function createDeleteListener(){
  const table = document.querySelector('table')
  table.addEventListener('click', function(event){
    if(event.target.className === 'delete-btn'){
      const id = event.target.dataset.id


      fetch(`http://localhost:3005/animals/${id}`, { method: "DELETE"})
      .then(resp => resp.json())
      .then(data => {
        event.target.parentNode.parentNode.remove()
      })

    }
  })
}


function createFormListener(){

  const form = document.querySelector('form')

  form.addEventListener('submit', function(event){
    event.preventDefault()

    const newAnimal = {
      name: event.target['name'].value,
      gender: event.target['gender'].value,
      species: event.target['species'].value
    }
    form.reset()


    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newAnimal)
    }

    fetch('http://localhost:3005/animals', reqObj)
    .then(resp => resp.json())
    .then(renderAnimal)


  })
}

function renderAnimal(animal){
    const trString = `<tr><td>${animal.name}<button class='delete-btn' data-id=${animal.id}>delete</button></td><td>${animal.gender}</td><td>${animal.species}</td></tr>`
    const tBody = document.querySelector('tbody')
    tBody.insertAdjacentHTML('afterbegin', trString);
}



function fetchAnimals(){
  fetch('http://localhost:3005/animals')
  .then(resp => resp.json())
  .then(animals => {
    animals.forEach(renderAnimal)
  })


  // make a fetch req to get animals from rails BE
  //   once it comes back:
  //     iterate over each animal:
  //       create a row for each and throw into DOM
}


main()
