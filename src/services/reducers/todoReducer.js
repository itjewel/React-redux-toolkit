import { GET_TODO_FAILED, GET_TODO_REQUEST, GET_TODO_SUCCESS } from "../constants/todosConstant";

const initialState = {
      isLoading: false,
      todos: [],
      error: null,
}
const todoReducer = (state = initialState, action) => {
      switch (action.type) {
            case GET_TODO_REQUEST:
                  return {
                        ...state,
                        isLoading: true,
                  }
            case GET_TODO_SUCCESS:
                  return {
                        todos: [action.payload],
                        isLoading: false,
                        error: null,
                  }
            case GET_TODO_FAILED:
                  return {
                        isLoading: false,
                        todos: [],
                        error: action.payload
                  }
            default:
                  return state;
      }
}

export default todoReducer