export const PENDING_FILE = 'PENDING_FILE'
export const LOADING_FILE = 'LOADING_FILE'


export const pendingFiles = () => ({
    type: PENDING_FILE,
})

export const loadingFiles = (payload)=> ({
    type: LOADING_FILE,
    payload
})
