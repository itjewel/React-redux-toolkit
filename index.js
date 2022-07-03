// store getState(), dispatch(), subcribe()
// getState() see state data view here
// dispatch() action for dispatch
// subscribe() store connect to view
const { createStore } = require("redux")
// defining constants
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCTS = "ADD_PRODUCTS";



// state
initialState = {
    products: ["sugger", "salt"],
    numberofProducts: 2,
}

// action -object- type
const getProducts = () => {
    return {
        type: GET_PRODUCTS,
    };
}
const addProducts = (products) => {
    return {
        type: ADD_PRODUCTS,
        payload: products,
    };
}



// product reducer 

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCTS:
            return {
                products: [...state.products, action.payload],
                munber: state.numberofProducts + 1,
            }

        case GET_PRODUCTS:
            return {
                ...state,
            }

        default:
            return state
    }
}

const store = createStore(productReducer)

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(getProducts());

store.dispatch(addProducts("pen"));
// store.dispatch(getProducts("nadim"));

// run node index.js