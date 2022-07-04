// store getState(), dispatch(), subcribe()
// getState() see state data view here
// dispatch() action for dispatch
// subscribe() store connect to view
const { createStore, applyMiddleware } = require("redux");
const thunk = require('redux-thunk').default
const axios = require('axios').default;
// defining constants for products
const GET_TODO_REQUEST = "GET_TODO_REQUEST";
const GET_TODO_SUCCESS = "GET_TODO_SUCCESS";
const GET_TODO_FAILED = "GET_TODO_FAILED";
const API_URL = "https://jsonplaceholder.typicode.com/todos";

// state products
initialState = {
      todos: [],
      isLoding: false,
      error: null,
}



// action -object- type
const todoRequest = () => {
      return {
            type: GET_TODO_REQUEST,
      };
}
const todoSuccess = (items) => {
      return {
            type: GET_TODO_SUCCESS,
            payload: items,
      };
}

const todoFailed = (error) => {
      return {
            type: GET_TODO_FAILED,
            payload: error,
      }
}


// product reducer 

const productReducer = (state = initialState, action) => {
      switch (action.type) {
            case GET_TODO_REQUEST:
                  return {
                        ...state,
                        isLoding: true,
                  }

            case GET_TODO_SUCCESS:
                  return {
                        ...state,
                        todos: action.payload,
                        isLoding: false,
                  }
            case GET_TODO_FAILED:
                  return {
                        ...state,
                        isLoding: false,
                        error: action.payload,
                  }

            default:
                  return state
      }
}

const store = createStore(productReducer, applyMiddleware(thunk))

store.subscribe(() => {
      console.log(store.getState())
})

const fetchData = () => {
      return (dispatch) => {
            dispatch(todoRequest());
            axios.get(API_URL).then((res) => {
                  const todos = res.data;
                  // const titles = todos.map((todo) => todo.title);
                  // console.log(titles)
                  dispatch(todoSuccess(todos))
            }).catch((error) => {
                  const errorMessage = error.message;
                  // console.log(error)
                  dispatch(todoFailed(errorMessage))
            })
      }
}
store.dispatch(fetchData());

// store.dispatch(addProducts("pen"));
