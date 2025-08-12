import {
    create
} from 'zustand'
import {
    getSuggestSearch
} from '@/api/suggestSearch'

export const useSuggestStore = create((set) => ({
    suggestList: [],
    setSuggestList: async (value) => {
        // 如果值为空，立即同步清空建议列表
        if (!value || value.trim() === '') {
            set({ suggestList: [] })
            return
        }

        // 有值时才发送送 API 请求
        try {
            const res = await getSuggestSearch(value)
            set({ suggestList: res.data })
        } catch (error) {
            console.error('獲取搜索建議失敗:', error)
            set({ suggestList: [] })
        }
    },

    // 添加同步清空方法
    clearSuggestList: () => {
        set({ suggestList: [] })
    }
}))

