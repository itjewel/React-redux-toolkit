import { createStore } from "redux";
import counterReducer from "./services/reducers/counterReducer";

const storeCount = createStore(counterReducer);
export default storeCount;