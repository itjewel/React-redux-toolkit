// store getState(), dispatch(), subcribe()
// getState() see state data view here
// dispatch() action for dispatch
// subscribe() store connect to view
const { createStore } = require("redux")
// defining constants
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";


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

        default:
            return state
    }
}

const store = createStore(counterReducer)

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(decrementCounter());

// run node index.js