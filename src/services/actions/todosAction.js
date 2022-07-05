import { GET_TODO_FAILED, GET_TODO_REQUEST, GET_TODO_SUCCESS } from '../constants/todosConstant';

import axios from 'axios';

// async return for redux-thunk
// async (dispatch) => { this can create for redux-thunk
export const getAllTodo = () => async (dispatch) => {
      dispatch({ type: GET_TODO_REQUEST })
      try {
            const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
            dispatch({ type: GET_TODO_SUCCESS, payload: res.data });
      } catch (error) {
            dispatch({ type: GET_TODO_FAILED, payload: error.message })
      }
}