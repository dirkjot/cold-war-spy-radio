
import request from 'es6-request'

// action creator


// TODO where does this go??
export const encrypt = (message) => (
  // parenthesis, shorthand for { return (...)}
  message.replace(/e/gi, "3")
  // replace takes regexp, with Global and case-Insensitive flags
)


export const setMessage = (message) => ({
  type: 'SET_MESSAGE',
  message: message,
  async: AsyncEncrypt
})

const AsyncEncrypt = (action, dispatch) => {
  let message = action.message.replace("-", " ")
  console.log("GET for:" + message)
  request.get('http://localhost:3000/convert/' + message)
  .then(([body, response]) =>
    {
      action.message = body
      console.log("GET returned: " + body)
      dispatch(action)
    })

}

export const AsyncMiddleware = store => dispatch => action => {
  if ('async' in action) {
    action.async(action, dispatch)
  } else {
    dispatch(action);
  }
}
