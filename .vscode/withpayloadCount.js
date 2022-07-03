// store getState(), dispatch(), subcribe()
// getState() see state data view here
// dispatch() action for dispatch
// subscribe() store connect to view
const { createStore } = require("redux")
// defining constants
const INCREMENT = "INCREMENT";
const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE";
const DECREMENT = "DECREMENT";
const RESET = "RESET";


// state
initialState = {
    count: 0,
}

// action -object- type
const incrementCounter = () => {
    return {
        type: INCREMENT
    };
}

const decrementCounter = () => {
    return {
        type: DECREMENT
    };
}
const resetCounter = () => {
    return {
        type: RESET
    };
}

const incrementCounterByValue = (value) => {
    return {
        type: INCREMENT_BY_VALUE,
        payload: value,
    };
}


// reducer 

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1,
            }
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1,
            }
        case RESET:
            return {
                ...state,
                count: 0,
            }
        case INCREMENT_BY_VALUE:
            return {
                ...state,
                count: state.count + action.payload,
            }

        default:
            return state
    }
}

const store = createStore(counterReducer)

store.subscribe(() => {
    console.log(store.getState())
})

// store.dispatch(incrementCounter());
// store.dispatch(incrementCounter());
// store.dispatch(incrementCounter());
// store.dispatch(decrementCounter());
// store.dispatch(resetCounter());
store.dispatch(incrementCounterByValue(5));
store.dispatch(incrementCounterByValue(10));

// run node index.js