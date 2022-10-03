import Vue from 'vue'
import vuex from 'vuex'
import {fetchNewsList} from '../api/index'

Vue.use(vuex);

export const store = new vuex.Store({
    state: {
        news: [],
    },
    mutations: {
        SET_NEWS(state, news) {
            state.news = news;
        }
    },
    actions: {
        FETCH_NEWS(context) {
            fetchNewsList()
                .then(response => context.commit('SET_NEWS', response.data) )
                .catch(error => console.log(error))
        }
    },
})