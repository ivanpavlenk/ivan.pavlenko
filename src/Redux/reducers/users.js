import {
    ADD_ALL_USERS,
    PENDING_USER,
    SET_CURRENT_PAGE,
    SET_NEXT_PAGE, SET_PREV_PAGE,
    SET_TOTAL_USERS_COUNT
} from "../actions/constants";
import {addAllUsers, closeForm, pendingUser, setTotalUserCount} from "../actions";

const initialsState = {
    users:[],
    isLoading:null,
    pageSize:10,
    totalUsersCount:null,
    currentPage:1
};
const url = 'http://localhost:3000/users';
export const fetchUsersForCurrentPage = (currentPage)=>{
    return dispatch=> {
        dispatch(pendingUser())
        fetch(`${url}?_limit=10&_page=${currentPage}`)
            .then(response=>dispatch(setTotalUserCount(response.headers.get('X-Total-Count'))));

        fetch(`${url}?_limit=10&_page=${currentPage}`)
            .then(response => response.json())
            .then(json => dispatch(addAllUsers(json)))
    }
};
export const fetchFilteredUsersForCurrentPage = (currentPage,filterBy,filterValue)=>{
    return dispatch=> {
        dispatch(pendingUser())
        fetch(`${url}?_limit=10_page=${currentPage}&${filterBy}=${filterValue}`)
            .then(response=>dispatch(setTotalUserCount(response.headers.get('X-Total-Count'))));

        fetch(`${url}?_limit=10_page=${currentPage}&${filterBy}=${filterValue}`)
            .then(response => response.json())
            .then(json => dispatch(addAllUsers(json)))
    }
};

export const fetchDeleteUser=(id,currentPage)=>{
    return dispatch=>{
        dispatch(pendingUser())
        fetch(`${url}/${id}`,{
            method:"DELETE"
        })
        .then(dispatch(fetchUsersForCurrentPage(currentPage)))
    }
}

export const fetchAddUser = (user,currentPage)=>{
    return dispatch=> {
        dispatch(pendingUser())
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        fetch(`${url}`,
            {method:'POST',
                headers:myHeaders,
                body:JSON.stringify({
                    name:user.name,
                    surname:user.surname,
                    birthday:user.birthday,
                    phone:user.phone,
                    email:user.email
                })
            }).then(()=> dispatch(fetchUsersForCurrentPage(currentPage)))
    }
};
export const fetchUpdateUser = (user,id,currentPage)=>{
    return dispatch=> {
        dispatch(pendingUser())
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        fetch(`${url}/${id}`,
            {method:'PATCH',
                headers:myHeaders,
                body:JSON.stringify({
                    name:user.name,
                    surname:user.surname,
                    birthday:user.birthday,
                    phone:user.phone,
                    email:user.email
                })
            })
            .then(()=> dispatch(fetchUsersForCurrentPage(currentPage)))
            .then(()=>dispatch(closeForm()))
    }
};

export const users = (state=initialsState,action)=> {
    switch (action.type) {
        case ADD_ALL_USERS: {
            return {...state,users:action.payload,isLoading: false}
        }
        case PENDING_USER: {
            return {...state,isLoading: true}
        }
        case SET_CURRENT_PAGE: {
            return {...state,currentPage: action.payload}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state,totalUsersCount:action.payload}
        }
        case SET_NEXT_PAGE: {
            if (state.currentPage < action.payload) {
                return {...state, currentPage: state.currentPage + 1}
            }else {return state}
        }
        case SET_PREV_PAGE: {
            if (state.currentPage > 1) {
                return {...state, currentPage: state.currentPage - 1}
            }else {return state}
        }
        default: return state
    }
};

