import {createStore} from 'redux'
import rootReducer from './reducers'


const store = ()=> {
    return createStore(rootReducer)
}


export default store