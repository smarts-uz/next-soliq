import HttpClient from "../utils/HttpClient";
import {api} from './api'

export const getBankList = () => {
    return HttpClient.doGet(api.bank);
}
