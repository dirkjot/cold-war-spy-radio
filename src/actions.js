
// action creator


// TODO where does this go??
export const encrypt = (message) => (
  // parenthesis, shorthand for { return (...)}
  message.replace(/e/gi, "3")
  // replace takes regexp, with Global and case-Insensitive flags
)

export const setMessage = (message) => ({
  type: 'SET_MESSAGE',
  message: encrypt(message)
})
