import axios from './config'

export const getHotSearch = () => {
    return axios.get('/search')
}