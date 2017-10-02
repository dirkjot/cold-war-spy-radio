
import request from 'es6-request'

// action creator


// TODO where does this go??
export const encrypt = (message) => (
  // parenthesis, shorthand for { return (...)}
  message.replace(/e/gi, "3")
  // replace takes regexp, with Global and case-Insensitive flags
)


const setMessage = (message) => ({
  type: 'SET_MESSAGE',
  message: message
})

export const asyncEncrypt = (message) =>
{
  return function(dispatch)
  {
    message = message.replace("-", " ")
    console.log("GET for:" + message)
    request.get('http://localhost:3000/convert/' + message)
    .then(([body, response]) =>
    {
      console.log("GET returned: " + body)
      dispatch(setMessage(body))
    })
  }
}
