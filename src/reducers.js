import { combineReducers } from 'redux'


/*
For now, just remember that the reducer must be pure. Given the same arguments,
it should calculate the next state and return it. No surprises. No side effects.
No API calls. No mutations. Just a calculation.
*/

const initialMessageState = {
  message: "(a Msg in a Btl)",
  activeRadio: undefined
}

const messageReducer = (state = initialMessageState, action) => {
    switch (action.type) {
      case 'SET_MESSAGE':
        return { ...state, message: action.message }
      default:
        return state
    }
}


export const reducers = combineReducers({
  messageReducer
})


// combineReducers is shorthand for:
const reducers_EQUIVALENT = (state = {}, action) => {
  return {
    messageReducer: messageReducer(state.messageReducer, action)
  }
}
