import axios from 'axios'

const config = {
    baseUrl : 'https://api.hnpwa.com/v0/',
}

async function fetchNewsList() {
    try {
        const response = axios.get(`${config.baseUrl}news/1.json`)
        return response;   
    } catch (error) {
        console.log(error);
    }
}
async function fetchAskList() {
    try {
        const response = axios.get(`${config.baseUrl}ask/1.json`)
        return response;   
    } catch (error) {
        console.log(error);
    }
}
async function fetchJobsList() {
    try {
        const response = axios.get(`${config.baseUrl}jobs/1.json`)
        return response;   
    } catch (error) {
        console.log(error);
    }
}
async function fetchList(pageName) {
    try {
        const response = axios.get(`${config.baseUrl}${pageName}/1.json`)
        console.log(pageName)
        return response;   
    } catch (error) {
        console.log(error);
    }
}
async function fetchUserInfo(username) {
    try {
        const response = axios.get(`${config.baseUrl}${username}/1.json`)
        return response;   
    } catch (error) {
        console.log(error);
    }
}
async function fetchCommentId(id) {
    try {
        const response = axios.get(`${config.baseUrl}item/${id}.json`)
        return response;   
    } catch (error) {
        console.log(error);
    }
}
export { fetchNewsList, fetchAskList, fetchJobsList, fetchList, fetchUserInfo, fetchCommentId}
// function fetchAskList() {
//     return axios.get(`${config.baseUrl}ask/1.json`)
// }
// function fetchJobsList() {
//     return axios.get(`${config.baseUrl}jobs/1.json`)
// }
// function fetchList(pageName) {
//     return axios.get(`${config.baseUrl}${pageName}/1.json`)
// }
// function fetchUserInfo(username) {
//     return axios.get(`${config.baseUrl}user/${username}.json`)
// }
// function fetchCommentId(id) {
//     return axios.get(`${config.baseUrl}item/${id}.json`)
// }
