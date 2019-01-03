import * as types from './types';
import { postAjax } from "../api/axios";
import * as api from "../api/api";
import layer from 'layer-mobile'
import router from '../router/index'
const state = {
    access_token: ""
}

const getters = {

}

const actions = {
    [types.HTTP_LOGIN]({ commit },data) {
        return new Promise((resolve,reject)=>{
            postAjax(api.login, data).then(res => {
                if (res.status) {
                  let access_token = res.data.access_token;
                    localStorage.setItem('access_token',res.data.access_token);
                    state.access_token  = access_token;
                }
                resolve(res);
              });
        })
        
    }
}

const mutations = {
    [types.HTTP_LOGIN](state,data) {
       
     
    }
}

export default {
    state,
    actions,
    mutations
}