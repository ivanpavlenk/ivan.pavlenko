import {
    ADD_ALL_USERS,
    CLOSE_FORM,
    EDIT_USER, FILTER_OFF, FILTER_ON,
    PENDING_USER,
    SET_CURRENT_PAGE, SET_FILTER_VALUES, SET_NEXT_PAGE, SET_PREV_PAGE,
    SET_TOTAL_USERS_COUNT,
    SHOW_FORM,
} from "./constants";

export const showForm = (payload)=> {
   return (
       {
           type:SHOW_FORM,
           payload
       }

   )
};
export const closeForm = (payload)=> {
    return (
        {
            type:CLOSE_FORM,
            payload
        }

    )
};

export const editUser = (id)=> {
    return (
        {
            type:EDIT_USER,
            payload: id
        }

    )
}

export const pendingUser = (payload)=> {
    return (
        {
            type:PENDING_USER,
            payload
        }

    )
};

export const addAllUsers = (payload) => {
    return (
        {
            type:ADD_ALL_USERS,
            payload
        }
    )
};

export const setCurrentPage = (payload) => {
    return (
        {
            type:SET_CURRENT_PAGE,
            payload
        }
    )
};
export const setTotalUserCount = (payload) => {
    return (
        {
            type:SET_TOTAL_USERS_COUNT,
            payload
        }
    )
};

export const setNextPage = (payload) => {
    return (
        {
            type:SET_NEXT_PAGE,
            payload
        }
    )
};

export const setPrevPage = () => {
    return (
        {
            type:SET_PREV_PAGE,
        }
    )
};

export const filterOn = (payload) => {
    return (
        {
            type:FILTER_ON,
            payload
        }
    )
};

export const filterOff = (payload) => {
    return (
        {
            type:FILTER_OFF,
            payload
        }
    )
};


export const setFilterValue = (filterBy,filterValue) => {
    return (
        {
            type:SET_FILTER_VALUES,
            payload: {filterBy,filterValue}
        }
    )
};