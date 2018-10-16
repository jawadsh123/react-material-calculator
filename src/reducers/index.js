import { combineReducers } from 'redux';
import history from './history';
import currentOperation from './currentOperation';
import theme from './theme';

const calcReducers =  combineReducers({
    history,
    currentOperation,
    theme
})

export default calcReducers;