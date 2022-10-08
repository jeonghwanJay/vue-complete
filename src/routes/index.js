import Vue from 'vue'
import VueRouter from 'vue-router'
import UserView from '../views/UserView.vue'
import NewsView from '../views/NewsView.vue'
import JobsView from '../views/JobsView.vue'
import AskView from '../views/AskView.vue'
import ItemView from '../views/ItemView.vue'
import bus from '../utils/bus'
import {store} from '../store/index'
// import createListView from '../views/CreateListView'

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
            // component: createListView('JobsView')
            component: JobsView
        },
                {
            path: '/ask',
            name: 'ask',
            // component: createListView('AskView')
            component: AskView
        },
                        {
            path: '/news',
            name: 'news',
            // component: createListView('NewView')
            component: NewsView,
            beforeEnter(from, to, next) {
            bus.$emit('start:spinner')
            store.dispatch('FETCH_LIST', to.name)
                .then(() => bus.$emit('end:spinner'))
                .catch((error) => console.log(error))
                next()
            }
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