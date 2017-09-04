
function modalBox(state = {isShowing: false}, action) {

  switch (action.type) {
    case 'SHOW_MODAL':
      return Object.assign({}, state, {
        isShowing: true
      })
    case 'HIDE_MODAL':
      return Object.assign({}, state, {
        isShowing: false
      })
    default:
      return state
  }

}

export default modalBox;