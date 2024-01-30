import { createStore, combineReducers, applyMiddleware } from "redux";
import {thunk} from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import { allUsersReducer } from "./reducer/userReducer";


const reducer = combineReducers({
    allUsers:allUsersReducer
})

const initialState={}
const middleware=[thunk]
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store