import { applyMiddleware, createStore } from "redux";
import todoReducer from "./services/reducers/todoReducer";
const thunk = require('redux-thunk').default

const storeTodos = createStore(todoReducer, applyMiddleware(thunk));
export default storeTodos;