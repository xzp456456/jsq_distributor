import * as types from './types';
const state = {
    count: 0
}

const getters = {

}

const actions = {
    [types.HTTP_COUNTER]({ commit }) {
        commit(types.HTTP_COUNTER);
    }
}

const mutations = {
    [types.HTTP_COUNTER](state) {
        state.count = state.count + 5;
    }
}

export default {
    state,
    actions,
    mutations
}