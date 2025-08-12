import axios from './config'
export const getSuggestSearch = (keyword) => {
    return axios.get('/suggestSearch', {
        params: {
            keyword
        }
    })
}


