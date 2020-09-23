//Variables
const imageCard = document.querySelector("div.image-card");
const imageCardTitle = document.querySelector("h2.title");
const imageCardImage = document.querySelector("img.image");
const imageCardLikes = document.querySelector("span.likes");
const imageCardComments = document.querySelector("ul.comments");
const imageCardUnlikeButton = document.querySelectorAll("button.like-button")[0];
const imageCardLikeButton = document.querySelectorAll("button.like-button")[1];
const imageCardCommentForm = document.querySelector("form.comment-form");


//Functions Declarations
function getImageData() {
  fetch("http://localhost:3000/images/1")
    .then(resp => resp.json())
    .then(imageData => injectImageData(imageData))
    .catch(err => console.log(err))
}

function injectImageData(imageData) {
  imageCard.dataset.id = imageData.id
  imageCardTitle.innerText = imageData.title
  imageCardImage.src = imageData.image
  imageCardLikes.innerText = `${imageData.likes} likes`
  imageCardComments.innerHTML = concatLis(imageData.comments)
}

function concatLis(commentsArr) {
  let liString = ""
  commentsArr.forEach( comment => {
    liString += `<li style="margin: 7px">
        ${comment.content}
        <button data-id=${comment.id} style="float: right">Delete</button>
      </li>`
  })
  return liString
}

function likeOrUnlikeImageHandler() {
  const likeType = event.target.innerText === "👎" ? -1 : 1
  const likes = parseInt(imageCardLikes.innerText.split(" ")[0]) + likeType
  likeOrUnlikeImage(likes)
}

function likeOrUnlikeImage(likes) {
    const reqObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({likes: likes})
    }

    fetch("http://localhost:3000/images/1", reqObj)
      .then(resp => resp.json())
      .then(imageData => imageCardLikes.innerText = `${imageData.likes} likes`)
      .catch(err => console.log(err))
}

function addComment() {
  event.preventDefault()
  const newComment = event.target.firstElementChild.value;
  addCommentFetch(newComment)
  event.target.reset()
}

function addCommentFetch(newComment) {
  const reqObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      imageId: parseInt(imageCard.dataset.id),
      content: newComment
    })
  }

  fetch("http://localhost:3000/comments", reqObj)
    .then(resp => resp.json())
    .then(imageData => imageCardComments.innerHTML += concatLis([imageData]))
    .catch(err => console.log(err))
}

function deleteCommentHandler() {
  if (event.target.tagName === "BUTTON"){
    deleteComment(event.target.dataset.id)
    event.target.parentNode.remove()
  }
}

function deleteComment(id) {
  fetch(`http://localhost:3000/comments/${id}`, {method: "DELETE"})
    .then(resp => resp.json())
    .then(deletedComment => console.log(deletedComment))
    .catch(err => console.log(err))
}


//Event Listeners
imageCardLikeButton.addEventListener("click", likeOrUnlikeImageHandler)
imageCardUnlikeButton.addEventListener("click", likeOrUnlikeImageHandler)
imageCardCommentForm.addEventListener("submit", addComment)
imageCardComments.addEventListener("click", deleteCommentHandler)


//Invoked Functions
getImageData()
