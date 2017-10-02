import {connect} from "react-redux"
import {setMessage, asyncEncrypt} from './actions'
import {Radio} from './Radio'

// the message part of the store's messageReducer will be past to the component
const mapStateToProps = ({messageReducer}) => ({
    message: messageReducer.message
})

// the component can call
const mapDispatchToProps = dispatch => ({
    setter: (message) => dispatch(asyncEncrypt(message))
})

export default connect(mapStateToProps, mapDispatchToProps)(Radio)
