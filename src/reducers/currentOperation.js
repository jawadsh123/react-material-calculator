const mexp = require('math-expression-evaluator');

const evaluateExpression = (expression) => {
    try {
        return mexp.eval(expression);
    } catch {
        return '';
    }
}

const currentOperation = (state = {expression:'',result:'', computed:false}, action) => {
    switch(action.type) {
        case 'UPDATE_CURRENT':
            let result = '';
            let newState = {};

            switch(action.expression) {
                case '=':
                    result = evaluateExpression(state.expression);
                    newState = {...state, result:result, computed:true};
                    break;
                case 'clear':
                    newState = {expression:'', result:'', computed:false}
                    break;
                case 'back':
                    console.log(state.expression)
                    if (state.expression.length > 0){
                        const newExpression = state.expression.slice(0,-1);
                        result = evaluateExpression(newExpression);
                        newState = {expression:newExpression, result:result, computed:false}
                    } else {
                        return state;
                    }
                    break;
                default:
                    let newExpression = '';
                    if (state.computed) {
                        newExpression = state.result + action.expression;
                    } else {
                        newExpression = state.expression + action.expression;
                    }
                    result = evaluateExpression(newExpression);
                    newState = {expression: newExpression, result: result, computed:false};
            }
            return newState
        default:
            return state
    }
    return state;
}

export default currentOperation;