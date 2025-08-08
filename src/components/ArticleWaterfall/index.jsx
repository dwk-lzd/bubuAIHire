import {
    useEffect,
    memo,
    useRef
} from 'react'
import styles from './ArticleWaterfall.module.css'
import {
    LikeO,
    ShareO,
    CommentO,
} from '@react-vant/icons'
import ImageCard from '@/components/ImageCard'
import { Loading } from 'react-vant'
import { showToast, decreaseToast } from '@/components/Toast/ToastController'
import { useLikeStore } from '@/store/useLikeStore'
const ArticleWaterfall = ({ articles, fetchArticle, isLoading }) => {
    const bottomRef = useRef(null)
    const { toggleLike, isLiked } = useLikeStore()

    const handleLike = (article) => {
        const isNowLiked = toggleLike(article)
        if (isNowLiked) {
            showToast() // 點讚時加一
        } else {
            decreaseToast() // 取消點讚時減一
        }
    }
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                fetchArticle()
            }
        })
        if (bottomRef.current) observer.observe(bottomRef.current);
        return () => observer.disconnect()
    }, [])
    return (
        <div className={styles.articleContainer}>
            {
                articles.map(item => (
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
                                <LikeO
                                    fontSize={20}
                                    onClick={() => handleLike(item)}
                                    style={{
                                        color: isLiked(item.id) ? '#ff4757' : '#666',
                                        cursor: 'pointer'
                                    }}
                                />
                                <CommentO fontSize={20} />
                                <ShareO fontSize={20} />
                            </div>
                        </div>
                    </div>
                ))
            }
            <div ref={bottomRef} className={styles.loading}>
                {isLoading ? <Loading type='ball' /> : null}
            </div>
        </div>
    )
}
export default memo(ArticleWaterfall)