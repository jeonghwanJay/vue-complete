import Vue from 'vue'
import vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(vuex);

export const store = new vuex.Store({
    state: {
        news: [],
        ask: [],
        jobs: [],
        user: {},
    },
    getters: {
        fetchedAsk(state) {
            return state.ask;
        }
    },
    mutations,
    actions,
})