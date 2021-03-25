import { combineReducers } from 'redux'
import {users} from "./users";
import {userForm} from "./form";
import {filters} from "./filters";


export default combineReducers({
    users,
    userForm,
    filters
})
