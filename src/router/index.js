import Vue from 'vue'
import VueRouter from 'vue-router'
import JobsView from '../views/JobsView.vue'
import AskView from '../views/AskView.vue'
import NewsView from '../views/NewsView.vue'

Vue.use(VueRouter);

export const router = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/news',
        },
        {
            path: '/jobs',
            component: JobsView,
        },
                {
            path: '/ask',
            component: AskView,
        },
                        {
            path: '/news',
            component: NewsView,
        }
    ]
})