
const initialState = {
    token: "",
    isValid: false
}

const SET_TOKEN = "SET_TOKEN"
const GET_TOKEN = "GET_TOKEN"

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_TOKEN:
            // console.log(action.payload);
            return {
                token: action.payload,
                isValid: true
            }
        case GET_TOKEN:
            return state
        default:
            return state
    }
}