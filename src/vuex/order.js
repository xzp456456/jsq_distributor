import * as types from './types';
const state = {
    order_level: {},
    device:{},
    info:{},
    team:{}
}

const getters = {

}

const actions = {
    [types.HTTP_ORDER]({ commit },data) {
        commit(types.HTTP_ORDER,data);
    }
}

const mutations = {
    [types.HTTP_ORDER](state,data) {
        state.order_level.my_order_count = data.my_order_count;
        state.order_level.level1_order_count = data.level1_order_count;
        state.order_level.level2_order_count = data.level2_order_count;
    },
    [types.HTTP_DEVICE](state,data) {
        state.device.my_device_count = data.my_device_count;
        state.device.level1_device_count = data.level1_device_count;
        state.device.level2_device_count = data.level2_device_count;
    },
    [types.HTTP_INFO](state,data) {
        state.info = data;
    },
    [types.HTTP_TEAM](state,data) {
        state.team = data;
    }
}

export default {
    state,
    actions,
    mutations
}