







function createFormListener(){
  const form = document.querySelector('form')

  form.addEventListener('submit', function(event){
    event.preventDefault()
    const newBook = {
      title: event.target['title'].value,
      author: event.target['author'].value
    }

    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newBook)
    }


    fetch('http://localhost:3000/books', reqObj)
    .then(resp => resp.json())
    .then(book => {
      const pTag = document.createElement('p')
      pTag.innerHTML = `${book.title} - ${book.author}`

      const bookContainer = document.querySelector('#book-list')
      bookContainer.append(pTag)
    })
    form.reset()
  })


  // find the form
  // bind an eventlistener to the form( submit)
  // once submitted:
  //    prevent the default
  //    grab the data from the form
  //
  //    update the Back End
  //    update the Front End
}


function fetchBooks() { 
  fetch('http://localhost:3000/books')
  .then(resp => resp.json())
  .then(books => {

    books.forEach(function(book){
      const pTag = document.createElement('p')
      pTag.innerHTML = `${book.title} - ${book.author}`

      const bookContainer = document.querySelector('#book-list')
      bookContainer.append(pTag)
    })
  })
}

// X make a fetch request
// X parse the json from what comes back
// X when we have the books array:
//   X iterate over each book
//     create a node for ech book
//     append that node to the DOM

main()


function main() {
  fetchBooks()
  createFormListener()
}


