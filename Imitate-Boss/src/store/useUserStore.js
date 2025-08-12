import {
    create
} from 'zustand'
import {
    doLogin,
    getUser
} from '@/api/user'

export const useUserStore = create((set) => ({
    user: null,
    isLogin: false,
    isLoading: false,
    login: async ({ username = '', password = '' }) => {
        set({
            isLoading: true
        })
        const data = await doLogin({ username, password })
        if (data.code === 0) {
            const { token, data: userData } = data
            localStorage.setItem('token', token)
            set({
                user: userData.username,
                isLogin: true,
                isLoading: false
            })
            return { success: true, user: userData }

        } else {
            // alert(data.message)
            set({
                user: null,
                isLoading: false,
                isLogin: false
            })
            return { success: false, message: data.message }
        }
    },
    getUserInfo: async () => {
        const data = await getUser()
        if (data.code === 0) {
            set({
                user: data.user
            })
        } else {
            set({
                user: null
            })
        }
    }
}))