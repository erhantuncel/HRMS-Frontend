import { combineReducers } from "redux";
import userReducer from "./reducers/userReducer";

const rootReducer = combineReducers({
    userInfo: userReducer
})

export default rootReducer;