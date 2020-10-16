



const initialState = []


const paintings= (state=initialState, action) => {
  switch(action.type) {
    case 'FETCH_PAINTINGS_SUCCESS':
      return [...action.paintings]
    case 'INCREMENT_VOTE':
      const updatedPaintings = state.map(p => {
        if(p.id === action.id) {
          return {
            ...p,
            votes: p.votes + 1
          }
        } else {
          return p // do nothing
        }
      })

      return updatedPaintings

    default: 
      return state
  }
}


export default paintings



