import {
    create
} from 'zustand'
import {
    getHotSearch
} from '@/api/hotSearch'

export const useHotlistStore = create((set) => ({
    hotlist: [],
    isLoading: false,
    setHotlist: async () => {
        set({ isLoading: true })
        const res = await getHotSearch()
        set({ hotlist: res.data })
        set({ isLoading: false })
    }
}))