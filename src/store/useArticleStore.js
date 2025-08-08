import { create } from 'zustand'
import { getArticle } from '@/api/article'
export const useArticleStore = create((set, get) => ({
    articles: [],
    page: 1,
    isLoading: false,
    initialLoading: true,
    fetchArticle: async () => {
        if (get().isLoading) return
        set({ isLoading: true })
        const res = await getArticle(get().page)
        const newArticles = res.data
        set(state => ({
            articles: [...state.articles, ...newArticles],
            page: state.page + 1,
            isLoading: false,
            initialLoading: false
        }))
    }
}))