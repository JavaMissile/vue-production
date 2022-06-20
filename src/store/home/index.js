import { reqCategoryList, reqGetBannerList } from '@/api'

const state = {
    categoryList: [],
    bannerList: [],
};
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList;
    },
    BANNERLIST(state, bannerList) {
        state.bannerList = bannerList;
    }
};
const actions = {
    async categoryList({ commit }) {
        let result = await reqCategoryList();
        if (result.code == 200) {
            commit("CATEGORYLIST", result.data)
        }
    },
    async getBannerList({ commit }) {
        let result = await reqGetBannerList();
        if (result.code == 200) {
            commit("BANNERLIST", result.data)
        }
    }
};
const getters = {};
export default {
    state,
    mutations,
    actions,
    getters

}