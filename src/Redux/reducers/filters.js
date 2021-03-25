import {FILTER_OFF, FILTER_ON, SET_FILTER_VALUES} from "../actions/constants";


const initialsState = [
    {
        isFilterMode:false,
        filterValues: null
    }
];

export const filters =  (state=initialsState,action)=>{
    switch (action.type) {
        case FILTER_ON: {
            return {...state,isFilterMode:true}
        }
        case FILTER_OFF: {
            return {...state,isFilterMode: false,filterValues:null}
        }

        case SET_FILTER_VALUES: {
            return {...state,filterValues:action.payload}
        }
        default: return state
    }
};
