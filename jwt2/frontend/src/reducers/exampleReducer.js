

const notes= (state=[], action) => {
  switch(action.type) {
    case "FETCH_NOTES_SUCCESS": 
      return [...action.notes]
    default:
      return state
  }
}

export default example
