// store getState(), dispatch(), subcribe()
// getState() see state data view here
// dispatch() action for dispatch
// subscribe() store connect to view
const { createStore, combineReducers } = require("redux")
// defining constants for products
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCTS = "ADD_PRODUCTS";

// defining constants for Items
const GET_CART_ITEMS = "GET_PRODUCTS";
const ADD_CART_ITEM = "ADD_PRODUCTS";



// state products
initialProductState = {
    products: ["sugger", "salt"],
    numberofProducts: 2,
}

// state
initialCartState = {
    cart: ["sugger"],
    numberofProducts: 1,
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


// action -object- type
const getCartItems = () => {
    return {
        type: GET_CART_ITEMS,
    };
}
const addCartItems = (products) => {
    return {
        type: ADD_CART_ITEM,
        payload: products,
    };
}



// product reducer 

const productReducer = (state = initialProductState, action) => {
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

// product reducer 

const cartReducer = (state = initialCartState, action) => {
    switch (action.type) {
        case ADD_CART_ITEM:
            return {
                cart: [...state.cart, action.payload],
                munber: state.numberofProducts + 1,
            }

        case GET_CART_ITEMS:
            return {
                ...state,
            }

        default:
            return state
    }
}

const rootReducer = combineReducers({
    productR: productReducer,
    cartR: cartReducer,
})

const store = createStore(rootReducer)

store.subscribe(() => {
    console.log(store.getState())
})

// store.dispatch(getProducts());

// store.dispatch(addProducts("pen"));


store.dispatch(getCartItems());

store.dispatch(addCartItems("pen"));
// store.dispatch(getProducts("nadim"));

// run node index.js