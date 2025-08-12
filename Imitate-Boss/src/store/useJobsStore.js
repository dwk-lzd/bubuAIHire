import { Loading } from 'react-vant'
import {
    create
} from 'zustand'
import { getJobs } from '@/api/jobs'
export const useJobsStore = create((set, get) => ({
    jobs: [],
    page: 1,
    isLoading: false,
    initialLoading: true,
    fetchMore: async () => {
        // 如果还在请求中，则直接返回
        if (get().isLoading) return
        // 更新状态，表示正在请求中
        set({ isLoading: true })
        const res = await getJobs(get().page)
        // console.log(res);
        const newJobs = res.data
        set(state => ({
            jobs: [...state.jobs, ...newJobs],
            page: state.page + 1,
            isLoading: false,
            initialLoading: false
        }))
    }
}))