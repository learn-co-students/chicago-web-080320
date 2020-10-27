



const URL = 'http://localhost:3000/paintings'


// ActionCreator:
//  a function that produces an action

export const fetchPaintingsSuccess = (paintings) => {
  return {
    type: 'FETCH_PAINTINGS_SUCCESS',
    paintings: paintings
  }
}

export const fetchPaintingsStart = () => {
  return {
    type: 'FETCH_PAINTINGS_START',
  }
}

// traditional action creator
//   returns a basic action object
export const incrementVote = (id) => {
  return {
    type: 'INCREMENT_VOTE',
    id: id
  }
}


// thiis action creator is a thunk:
//  returns a function

export const thunkFetchPaintings = () => { 

  return function(dispatch, getState) {
    dispatch(fetchPaintingsStart())

    fetch(URL)
    .then(resp => resp.json())
    .then(paintings => {
       dispatch(fetchPaintingsSuccess(paintings))
    })

  };
}


export const thunkIncrementVote = (painting) => { 
  return function(dispatch) {
    const reqObj = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body:  JSON.stringify({
        votes: painting.votes + 1
      })
    }

    fetch(`${URL}/${painting.id}`, reqObj)
    .then(resp => resp.json())
    .then(data => {
      dispatch(incrementVote(painting.id))
    })
  };
}


const deletePainting = (paintingId) => {
  return {
    type: 'DELETE_PAINTING',
    paintingId: paintingId
  }
}



export const thunkDeletePainting = (paintingId) => { 
  return function(dispatch) {
    fetch(`${URL}/${paintingId}`, { method: 'DELETE' })
    .then(resp => resp.json())
    .then(data => {
      dispatch(deletePainting(paintingId))
    })
  };
}








