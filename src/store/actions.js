import { fetchAskList, fetchNewsList, fetchJobsList, fetchList, fetchUserInfo, fetchCommentId } from "@/api"

export default {
        FETCH_NEWS(context) {
            return fetchNewsList()
                .then(response => { context.commit('SET_NEWS', response.data) 
                    return response;
                })
                .catch(error => console.log(error))          
        },
        FETCH_ASK(context) {
            return fetchAskList()
                .then(response => { context.commit('SET_ASK', response.data) 
                    return response;
                })
                .catch(error => console.log(error))
        },
        FETCH_JOBS(context) {
            return fetchJobsList()
                .then(response => { context.commit('SET_JOBS', response.data) 
                    return response;
                })
                .catch(error => console.log(error))
        },
        FETCH_LIST(context, pageName) {
            return fetchList(pageName)
                .then(response => {
                    context.commit('SET_LIST', response.data)
                    return response;
                })
            .catch(error => console.log(error))
        },
        FETCH_USER(context, username) {
            fetchUserInfo(username)
                .then(response => context.commit('SET_USER', response.data))
                .catch(error => console.log(error))
        },
        FETCH_ITEM(context, id) {
            fetchCommentId(id)
                .then(response => context.commit('SET_ITEM', response.data))
                .catch(error => console.log(error))
        }
    }