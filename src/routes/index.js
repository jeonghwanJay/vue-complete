import Vue from 'vue'
import VueRouter from 'vue-router'
// import JobsView from '../views/JobsView.vue'
// import AskView from '../views/AskView.vue'
// import NewsView from '../views/NewsView.vue'
import UserView from '../views/UserView.vue'
import ItemView from '../views/ItemView.vue'
import createListView from '../views/CreateListView'

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/news',
        },
        {
            path: '/jobs',
            name: 'jobs',
            // component: JobsView,
            component: createListView('JobsView')
        },
                {
            path: '/ask',
            name: 'ask',
            // component: AskView,
            component: createListView('AskView')
        },
                        {
            path: '/news',
            name: 'news',
            // component: NewsView,
            component: createListView('NewsView')
        },
        {
            path: '/user/:id',
            component: UserView,
        },
        {
            path: '/item/:id',
            component: ItemView,
        }
    ]
})