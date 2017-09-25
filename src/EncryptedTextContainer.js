import {connect} from "react-redux"
import {EncryptedText} from './EncryptedText'

// the message part of the store's messageReducer will be past to the component
const mapStateToProps = ({messageReducer}) => ({
    secretMessage: messageReducer.message
})

// the component can call

export default connect(mapStateToProps, undefined)(EncryptedText)
