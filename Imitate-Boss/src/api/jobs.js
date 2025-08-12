import axios from './config'

export const getJobs = (page) => {
    return axios.get('/jobs', {
        params: { page }
    })
}