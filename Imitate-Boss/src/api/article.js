import axios from '@/api/config'

export const getArticle = (page) => {
    return axios.get('/square', {
        params: { page }
    })
}