// store getState(), dispatch(), subcribe()
// getState() see state data view here
// dispatch() action for dispatch
// subscribe() store connect to view
const { createStore } = require("redux")
// defining constants
const ADD_USER = "ADD_USER";



// state
initialState = {
    user: ["jewel"],
    count: 1,
}

// action -object- type
const incrementUser = (value) => {
    return {
        type: ADD_USER,
        payload: value,
    };
}



// reducer 

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                user: [...state.user, action.payload],
                count: state.count + 1,
            }

        default:
            return state
    }
}

const store = createStore(counterReducer)

store.subscribe(() => {
    console.log(store.getState())
})


store.dispatch(incrementUser("nadim"));
store.dispatch(incrementUser("alian"));
store.dispatch(incrementUser("saddam"));

// run node index.js