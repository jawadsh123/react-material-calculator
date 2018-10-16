import React, { Component } from 'react';
import './App.css';
// import Calculator from './containers/calculatorContainer';
import Grid from '@material-ui/core/Grid';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Calculator from './containers/calculatorContainer';
import calcReducer from './reducers';

const store = createStore(calcReducer);

class App extends Component {
    render() {
        return (
                <Grid container className="App" justify='center' alignItems='center'>
                    <Provider store={store}>
                        <Calculator></Calculator>
                    </Provider>
                </Grid>
        );
    }
}

export default App;
