import {createStore, applyMiddleware} from 'redux'
import thunk from "redux-thunk";
const reducer = () => {}

export default createStore(reducer, applyMiddleware(thunk))
