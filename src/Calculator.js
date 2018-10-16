import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import './Calculator.css';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';





class Calculator extends PureComponent{
    constructor(props) {
        super(props);
        console.log(this.props)
    }

    componentDidMount() {
        const buttons = document.querySelectorAll('.calc-container .button:not(.backspace)');
        [...buttons].map(val => val.addEventListener('click', this.handleClick))
    }

    handleClick = (evt) => {
        const clickedOn = evt.target.closest('.button').value;
        const newOperation = clickedOn;
        this.props.updateCurrent(newOperation)
    }

    handleLongButtonPress = (evt) => {
        console.log('HUEHUE')
        this.buttonPressTimer = setTimeout(() => {
            this.props.updateCurrent('clear');
        }, 700);
    }

    handleLongButtonRelease = (evt) => {
        clearTimeout(this.buttonPressTimer);
        this.props.updateCurrent('back')
    }

    render() {
        return (
            <Paper className='calc-container' elevation={4}>
                <Grid item xs={12} className={`current-operation ${this.props.currentOperation.computed?'computed':''}`}>
                    <span className='expression'>{this.props.currentOperation.expression}</span>
                    <div className='result hidden'>{this.props.currentOperation.result}</div>
                </Grid>
                <Grid item xs={12} className='buttons-container'>
                    <Grid container>
                        <Grid item xs={3}>
                            <Button className='button' value='7'>7</Button>
                        </Grid>
                        <Grid item xs={3}>
                            <Button className='button' value='8'>8</Button>
                        </Grid>
                        <Grid item xs={3}>
                            <Button className='button' value='9'>9</Button>
                        </Grid>
                        <Grid item xs={3}>
                            <Button className='button operation-button backspace' onTouchStart={this.handleLongButtonPress} 
                                onTouchEnd={this.handleLongButtonRelease} onMouseDown={this.handleLongButtonPress} 
                                onMouseUp={this.handleLongButtonRelease} value='clear'>
                                <Icon>backspace</Icon>
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={3}>
                            <Button className='button' value='4'>4</Button>
                        </Grid>
                        <Grid item xs={3}>
                            <Button className='button' value='5'>5</Button>
                        </Grid>
                        <Grid item xs={3}>
                            <Button className='button' value='6'>6</Button>
                        </Grid>
                        <Grid item xs={3}>
                            <Button className='button operation-button' value='*'> x </Button>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={3}>
                            <Button className='button' value='1'>1</Button>
                        </Grid>
                        <Grid item xs={3}>
                            <Button className='button' value='2'>2</Button>
                        </Grid>
                        <Grid item xs={3}>
                            <Button className='button' value='3'>3</Button>
                        </Grid>
                        <Grid item xs={3}>
                            <Button className='button operation-button' value='-'> - </Button>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={3}>
                            <Button className='button' value='0'>0</Button>
                        </Grid>
                        <Grid item xs={3}>
                            <Button className='button' value='.'>.</Button>
                        </Grid>
                        <Grid item xs={3}>
                            <Button className='button' value='='> = </Button>
                        </Grid>
                        <Grid item xs={3}>
                            <Button className='button operation-button' value='+'> <Icon>add</Icon> </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        )
    }
}

export default Calculator;