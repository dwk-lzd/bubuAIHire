import axios from './config'

export const doLogin = (data) => {
    return axios.post('/login', data)
}

export const getUser = () => {
    return axios.get('/user')
}