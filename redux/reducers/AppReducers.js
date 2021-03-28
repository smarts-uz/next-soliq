import * as types from "../actionTypes/AppActionTypes";
import {createReducer} from "../../utils/StoreUtils";

const initState = {
    loading: false,
    showModal: false,
    currentItem: '',
    banks: '',
};

const reducers = {
    [types.REQUEST_START](state) {
        state.loading = true;
    },
    [types.REQUEST_GET_BANK_SUCCESS](state, payload) {
            state.banks = payload
    },
    [types.REQUEST_ERROR](state) {
        state.loading = false;
    },
    updateState(state, {payload}) {
        return {
            ...state,
            ...payload,
        };
    },
};
export default createReducer(initState, reducers);
