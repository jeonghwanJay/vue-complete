import Vue from 'vue'
import vuex from 'vuex'
import {fetchAskList, fetchJobsList, fetchNewsList} from '../api/index'

Vue.use(vuex);

export const store = new vuex.Store({
    state: {
        news: [],
        ask: [],
        jobs: [],
    },
    mutations: {
        SET_NEWS(state, news) {
            state.news = news;
        },
        SET_ASK(state, ask) {
            state.ask = ask;
        },
        SET_JOBS(state, jobs) {
            state.jobs = jobs;
        }
    },
    actions: {
        FETCH_NEWS(context) {
            fetchNewsList()
                .then(response => context.commit('SET_NEWS', response.data) )
                .catch(error => console.log(error))
        },
        FETCH_ASK(context) {
            fetchAskList()
                .then(response => context.commit('SET_ASK', response.data))
                .catch(error => console.log(error))
        },
        FETCH_JOBS(context) {
            fetchJobsList()
                .then(response => context.commit('SET_JOBS', response.data))
                .catch(error => console.log(error))
        },
    },
})