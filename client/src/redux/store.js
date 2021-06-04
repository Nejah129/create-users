
import{createStore,compose,applyMiddleware} from "redux"
import thunk from "redux-thunk"
import userReducer from "./reducers/reducer";


const devtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();


const store=createStore(userReducer,compose(applyMiddleware(thunk),devtools));
export default store;