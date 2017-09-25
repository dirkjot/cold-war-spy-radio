import {connect} from "react-redux"
import {setMessage} from './actions'
import {Radio} from './Radio'

// the message part of the store's messageReducer will be past to the component
const mapStateToProps = ({messageReducer}) => ({
    message: messageReducer.message
})

// the component can call
const mapDispatchToProps = dispatch => ({
    setter: (message) => dispatch(setMessage(message))
})

export default connect(mapStateToProps, mapDispatchToProps)(Radio)
