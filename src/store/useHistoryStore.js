import { create } from 'zustand'

export const useHistoryStore = create((set) => ({
    historyList: JSON.parse(localStorage.getItem('searchHistory')) || [],
    addHistory: (value) => {
        set((state) => ({
            historyList: [...state.historyList, {
                id: state.historyList.length + 1,
                text: value
            }]
        }))
    },
    removeHistory: (value) => {
        set((state) => ({
            historyList: state.historyList.filter((item) => item.id !== value)
        }))
    },
    clearHistory: () => {
        set({ historyList: [] })
    }
}))