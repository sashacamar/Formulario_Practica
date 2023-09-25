import { GET_ALL_FORMS, GET_FORM_BY_ID, SEND_FORM, UPDATE_FORM } from "./types";

const initialState = {
    id: '',
    form: []
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case SEND_FORM:
            return { ...state, id: action.payload.id}
        case GET_FORM_BY_ID:
            return { ...state, form: action.payload}
        default: return { ...state };
    }
}

export default rootReducer;