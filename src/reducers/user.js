const initialState = {
  token: null,
  info: {},
  isAuthenticated: false,
}

export default function user(state = initialState, action) {
  if(action.type === 'kik') {
    return { number: state.number + action.amount }
  }
  else if(action.type === 'lol') {
    return { number: state.number - action.amount }
  }
  return state
}
