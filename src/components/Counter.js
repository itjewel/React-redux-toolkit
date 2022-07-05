import { useDispatch, useSelector } from "react-redux"
import { decrementAction, incrementAction, resetAction } from "../services/actions/counterAction"

const Counter = () => {
      const count = useSelector((state) => state.count)
      const dispatch = useDispatch()

      const increment = () => {
            dispatch(incrementAction())
      }
      const decrement = () => {
            dispatch(decrementAction())
      }
      const reset = () => {
            dispatch(resetAction())
      }

      return (
            <div>
                  <h2>Counter App</h2>
                  <h3>Count: {count}</h3>
                  <button onClick={increment}>Increment +</button>
                  <button onClick={decrement}>Decrement -</button>
                  <button onClick={reset}>Reset</button>
            </div>
      )
}

export default Counter