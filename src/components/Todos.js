import { Fragment, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllTodo } from "../services/actions/todosAction"


export const Todos = () => {
      const dispatch = useDispatch()
      const { isLoading, todos, error } = useSelector((state) => state);
      // const todoData = todos[0];
      useEffect(() => {
            dispatch(getAllTodo())
      }, [])

      return (
            <div>
                  <h2>Todos</h2>
                  {isLoading && <h3>Loading...</h3>}
                  {error && <h3>{error.message}</h3>}
                  {/* {console.log(todos)} */}
                  {todos && todos.map((todo) => (
                        todo.map((val) => (<Fragment key={val.id}>
                              <h1> {val.title}</h1>
                              <hr />
                        </Fragment>
                        ))
                  ))
                  }
            </div >
      )
}
