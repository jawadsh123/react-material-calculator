import { connect } from 'react-redux';
import { updateCurrent, addHistory } from '../actions';
import Calculator from '../Calculator';

const mapStateToProps = state => ({
    currentOperation: state.currentOperation
})

const mapDispatchToProps = dispatch => ({
    addHistory: operation => dispatch(addHistory(operation)),
    updateCurrent: expression => dispatch(updateCurrent(expression))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Calculator);