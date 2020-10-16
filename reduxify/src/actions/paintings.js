


// ActionCreator:
//  a function that produces an action

export const fetchPaintingsSuccess = (paintings) => {
  return {
    type: 'FETCH_PAINTINGS_SUCCESS',
    paintings: paintings
  }
}


export const incrementVote = (id) => {
  return {
    type: 'INCREMENT_VOTE',
    id: id
  }
}
