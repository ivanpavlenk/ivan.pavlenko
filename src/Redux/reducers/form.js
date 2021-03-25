import {CLOSE_FORM, EDIT_USER, SHOW_FORM} from "../actions/constants";



const initialsState = [
    {
        isVisibleForm:false,
        editMode:false,
        editUserId: null,
    }
];

export const userForm =  (state=initialsState,action)=>{
    switch (action.type) {
        case SHOW_FORM: {
            return {...state,isVisibleForm:true,editMode:false}
        }
        case EDIT_USER: {
            return {...state,editMode:true,isVisibleForm: true,editUserId:action.payload}
        }
        case CLOSE_FORM: {
            return {...state,isVisibleForm: false}
        }
        default: return state
    }
};
