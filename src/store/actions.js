import { fetchAskList, fetchNewsList, fetchJobsList, fetchList, fetchUserInfo, fetchCommentId } from "../api/index"

export default {
    async FETCH_NEWS(context) {
        const response = await fetchNewsList()
        context.commit('SET_NEWS', response.data)
        return response;
    },
    async FETCH_ASK(context) {
        const response = await fetchAskList()
        context.commit('SET_ASK', response.data)
        return response;
    },
    async FETCH_JOBS(context) {
        const response = await fetchJobsList()
        context.commit('SET_JOBS', response.data)
        return response;
    },
    async FETCH_LIST(context, name) {
        const response = await fetchList(name)
        context.commit('SET_LIST', response.data)
        return response;
    },
    async FETCH_USER(context) {
        const response = await fetchUserInfo()
        context.commit('SET_USER', response.data)
        return response;
    },
    async FETCH_ITEM(context) {
        const response = await fetchCommentId()
        context.commit('SET_ITEM', response.data)
        return response;
    },
}
        // FETCH_NEWS(context) {
        //     return fetchNewsList()
        //         .then(response => { context.commit('SET_NEWS', response.data) 
        //             return response;
        //         })
        //         .catch(error => console.log(error))          
        // },
        // FETCH_ASK(context) {
        //     return fetchAskList()
        //         .then(response => { context.commit('SET_ASK', response.data) 
        //             return response;
        //         })
        //         .catch(error => console.log(error))
        // },
        // FETCH_JOBS(context) {
        //     return fetchJobsList()
        //         .then(response => { context.commit('SET_JOBS', response.data) 
        //             return response;
        //         })
        //         .catch(error => console.log(error))
        // },
        // FETCH_LIST(context, pageName) {
        //     return fetchList(pageName)
        //         .then(response => {
        //             context.commit('SET_LIST', response.data)
        //             return response;
        //         })
        //     .catch(error => console.log(error))
        // },
        // FETCH_USER(context, username) {
        //     fetchUserInfo(username)
        //         .then(response => context.commit('SET_USER', response.data))
        //         .catch(error => console.log(error))
        // },
        // FETCH_ITEM(context, id) {
        //     fetchCommentId(id)
        //         .then(response => context.commit('SET_ITEM', response.data))
        //         .catch(error => console.log(error))
        // }
    