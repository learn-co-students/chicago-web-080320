



const initialState = []


const paintings= (state=initialState, action) => {
  switch(action.type) {
    case 'FETCH_PAINTINGS_SUCCESS':
      return [...action.paintings]
    case 'DELETE_PAINTING':
      return state.filter(p => p.id !== action.paintingId)
    case 'INCREMENT_VOTE':
      const updatedPaintings = state.map(p => {
        if(p.id === action.id) {
          return {
            ...p,
            votes: p.votes + 1
          }
        } else {
          return p 
        }
      })

      return updatedPaintings

    default: 
      return state
  }
}


export default paintings



