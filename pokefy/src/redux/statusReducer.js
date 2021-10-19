
const initialState = {
    isLoggedIn: false
}

const LOG_STATUS = "LOG_STATUS"


export function setLoggedStatus(status) {
    // console.log(status)
    return {
        type: LOG_STATUS,
        payload: status
    }
}


export default function reducer(state = initialState, action) {
    switch(action.type) {
        case LOG_STATUS:
            console.log(action.payload);
            return {isLoggedIn: action.payload}
        default:
            return state
    }
}