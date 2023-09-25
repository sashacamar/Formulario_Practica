import axios from "axios";

import { GET_ALL_FORMS, GET_FORM_BY_ID, SEND_FORM, UPDATE_FORM } from "./types";


export const getForms = () => {
    const endpoint = '/search/';
    return async function (dispatch) {
        const { data } = await axios.get(endpoint)
        dispatch({ type: GET_ALL_FORMS, payload: data });
    }
}
export const getFormById = (id) => {
    const endpoint = `/search/${id}`;
    return async function (dispatch) {
        const { data } = await axios.get(endpoint)
        dispatch({ type: GET_FORM_BY_ID, payload: data });
    }
}
export const sendForm = (form) => {
    const endpoint = '/send';
    return async function (dispatch) {
        const { data } = await axios.post(endpoint, form)
        dispatch({ type: SEND_FORM, payload: data });
    }
}
export const updateForm = (id, form) => {
    const endpoint = `/update/${id}`;
    return async function (dispatch) {
        const { data } = await axios.post(endpoint, form)
        dispatch({ type: UPDATE_FORM, payload: data });
    }
}
