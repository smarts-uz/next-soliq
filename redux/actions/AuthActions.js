import * as types from "../actionTypes/AuthActionTypes";
import {
    loginUser,
} from "../../api/AuthApi.js";
import {TOKEN} from "../../utils/constants";
import {
    me,
} from "../../api/AuthApi";
import {toast} from "react-toastify";
import jwt from "jwt-decode";

export const login = (payload) => async (dispatch) => {
    try {
        const res = await dispatch({
            api: loginUser,
            types: [types.REQUEST_AUTH_START, "", types.REQUEST_API_ERROR],
            data: payload.v,
        });
        if (res.success) {
            let parsedToken = jwt(res.payload.token);
            setTimeout(() => {
                setStateRole(parsedToken.roles, dispatch);
                pushHisPage(parsedToken.roles, payload.history);
            }, 1000);
            localStorage.setItem(
                TOKEN,
                res.payload.tokenType + " " + res.payload.token
            );
        }
        return true;
    } catch (err) {
        if (err.response) toast.error(err.response.data.message);

        return false;
    }
};

export const logout = () => (dispatch) => {
    dispatch({
        type: types.AUTH_LOGOUT,
    });
};

export const userMe = (payload) => async (dispatch, getState) => {
    const {
        auth: {currentUser, sentUserMe},
    } = getState();
    if (sentUserMe || currentUser || !localStorage.getItem(TOKEN)) return;
    try {
        const response = await dispatch({
            api: me,
            types: [
                types.AUTH_GET_CURRENT_USER_REQUEST,
                types.AUTH_GET_USER_TOKEN_SUCCESS,
                types.AUTH_GET_CURRENT_USER_ERROR,
            ],
        });
        if (response.success) {
            dispatch({
                type: "updateState",
                payload: {
                    permissions: response.payload.permissions,
                },
            });
            if (payload) {
                dispatch({
                    type: "updateStateOrder",
                    payload: {currentUser: response.payload},
                });
            }
            dispatch({
                type: types.AUTH_GET_USER_TOKEN_SUCCESS,
                payload: response.payload,
            });
            setStateRole(response.payload.roles, dispatch);
        } else {
            dispatch({
                type: types.AUTH_LOGOUT,
            });
        }
    } catch (e) {
        dispatch({
            type: types.AUTH_LOGOUT,
        });
    }
};

const setStateRole = (roles, dispatch) => {
    let roleStatus = ""
    roles.forEach((item) => {
        if (item.roleName === "ROLE_SUPER_ADMIN") {
            dispatch({
                type: "updateState",
                payload: {
                    isSuperAdmin: true,
                    isAdmin: true,
                },
            });
            roleStatus = 'superAdmin'
        } else if (item.roleName === "ROLE_ADMIN") {
            dispatch({type: "updateState", payload: {isAdmin: true}});
            roleStatus = 'admin'
        } else if (item.roleName === "ROLE_AGENT") {
            dispatch({type: "updateState", payload: {isAgent: true}});
            roleStatus = 'agent'
        } else if (item.roleName === "ROLE_USER") {
            dispatch({type: "updateState", payload: {isUser: true}});
            roleStatus = 'user'
        } else if (item.roleName === "ROLE_CORPORATE") {
            dispatch({type: "updateState", payload: {isUser: true}});
            roleStatus = 'corporateAdmin'
        }
        localStorage.setItem('role', roleStatus);
    });
};

const pushHisPage = (roles, history) => {
    const {push} = history;
    roles.forEach(({roleName}) => {
        if (roleName === "ROLE_SUPER_ADMIN") {
            push("/admin");
        } else if (roleName === "ROLE_ADMIN") {
            push("/admin");
        } else if (roleName === "ROLE_AGENT") {
            push("/agent");
        } else if (roleName === "ROLE_USER") {
            push("/client/main-page");
        } else if (roleName === "ROLE_CORPORATE") {
            push("/corporate/mainPage");
        }
    });
};
