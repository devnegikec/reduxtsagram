const initialState = {
  isShowing: false,
  selectOptions: [
    {id: 1, value: 'Bangalore'},
    {id: 2, value: 'Delhi'},
    {id: 3, value: 'Kolata'},
    {id: 4, value: 'Chani'}
  ],
  pre:3
}
function modalBox(state = initialState, action) {

  switch (action.type) {
    case 'SHOW_MODAL':
      return Object.assign({}, state, {
        isShowing: true
      })
    case 'HIDE_MODAL':
      return Object.assign({}, state, {
        isShowing: false
      })
    case 'CHANGE_SELECTION':
    return {
      ...state,
      pre: action.sel
    };
    default:
      return state
  }

}

export default modalBox;