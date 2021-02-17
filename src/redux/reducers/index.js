import { combineReducers } from "redux";
import {gistFiles} from "./gistFiles";



const rootReducer = combineReducers({
    files: gistFiles
})


export default rootReducer