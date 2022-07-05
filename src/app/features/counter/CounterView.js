import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "./counterSlice";

const CounterView = () => {
      const { count } = useSelector((state) => state.counter);
      const dispatch = useDispatch()
      // console.log(count)
      return (
            <>
                  <h1>Counter App</h1>
                  <p>Count: {count}</p>
                  <button onClick={() => { dispatch(increment()) }}>Increment +</button>
                  <button onClick={() => { dispatch(decrement()) }}>Decrement -</button>
                  <button onClick={() => { dispatch(reset()) }}>reset </button>
            </>
      )
}

export default CounterView