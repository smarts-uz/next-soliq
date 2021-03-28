import * as types from "../actionTypes/AppActionTypes";
import * as app from "../../api/AppApi";
import {toast} from "react-toastify";

export const getBanks = () => (dispatch) => {
    dispatch({
        api: app.getBankList,
        types: [
            types.REQUEST_START,
            types.REQUEST_GET_BANK_SUCCESS,
            types.REQUEST_ERROR
        ]
    })
}
