import { memo, useEffect, useRef } from 'react'
import { useLikeStore } from '@/store/useLikeStore'
import styles from './LikeArticle.module.css'
import ImageCard from '@/components/ImageCard'
import { DeleteO } from '@react-vant/icons'

const LikeArticle = () => {
    const { likedArticles, removeLiked } = useLikeStore()
    const containerRef = useRef(null)

    const handleRemove = (articleId) => {
        removeLiked(articleId)
    }
    // 調試信息
    console.log('喜歡的文章數量:', likedArticles.length)
    console.log('喜歡的文章數據:', likedArticles)

    if (likedArticles.length === 0) {
        return (
            <div className={styles.emptyContainer}>
                <div className={styles.emptyContent}>
                    <p>还没有喜欢的文章</p>
                    <p>去其他标签页看看吧～</p>
                </div>
            </div>
        )
    }

    return (
        <div className={styles.articleContainer} ref={containerRef}>
            {likedArticles.map(item => (
                <div key={item.id} className={styles.articleItem}>
                    <div className={styles.articleItemBox}>
                        <div className={styles.articleUser}>
                            <ImageCard url={item.avator} />
                            <p>{item.person}</p>
                        </div>
                        <div className={styles.articleText}>
                            <p>{item.text}</p>
                        </div>
                        <div className={styles.articleImages}>
                            {
                                item.images.map((image, index) => (
                                    <ImageCard key={index} url={image} />
                                ))
                            }
                        </div>
                        <div className={styles.articleType}>
                            <p>{`# ${item.type}`}</p>
                        </div>
                        <div className={styles.articleContact}>
                            <div className={styles.articleContactBox}>
                                {
                                    item.comments.map((comment, index) => (
                                        <div key={comment.id} className={styles.articleCommentItem}>
                                            <p>{`${comment.name}：${comment.text}`}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className={styles.articleFooter}>
                            <DeleteO
                                fontSize={20}
                                onClick={() => handleRemove(item.id)}
                                style={{
                                    color: '#ff4757',
                                    cursor: 'pointer'
                                }}
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default memo(LikeArticle)