import { create } from 'zustand'

export const useLikeStore = create((set, get) => ({
    likedArticles: [],

    // 添加或移除喜歡的文章
    toggleLike: (article) => {
        const { likedArticles } = get()
        const existingIndex = likedArticles.findIndex(item => item.id === article.id)

        if (existingIndex !== -1) {
            // 如果已存在，則移除
            set(state => ({
                likedArticles: state.likedArticles.filter(item => item.id !== article.id)
            }))
            return false // 返回 false 表示取消點讚
        } else {
            // 如果不存在，則添加
            set(state => ({
                likedArticles: [...state.likedArticles, article]
            }))
            return true // 返回 true 表示點讚
        }
    },

    // 檢查文章是否被點讚
    isLiked: (articleId) => {
        const { likedArticles } = get()
        return likedArticles.some(item => item.id === articleId)
    },

    // 從喜歡列表中刪除文章
    removeLiked: (articleId) => {
        set(state => ({
            likedArticles: state.likedArticles.filter(item => item.id !== articleId)
        }))
    }
}))