import { useEffect, useState } from 'react'
import styles from './Square.module.css'
import Icon from '@/components/Icon/Icon'
import { useNavigate } from 'react-router-dom'
import { NoticeBar, Swiper, Tabs, Skeleton, Badge } from 'react-vant'
import {
    CommentO
} from '@react-vant/icons'
import ArticleWaterfall from '@/components/ArticleWaterfall'
import { useArticleStore } from '@/store/useArticleStore'
import Toast from '@/components/Toast'
import LikeArticle from '@/components/LikeArticle'
import { clearToast } from '@/components/Toast/ToastController'
import useTitle from '@/hooks/useTitle';

const Square = () => {
    const navigate = useNavigate()
    const navList = ['推荐', '同行说', '喜欢']
    // 通知內容數據
    const noticeData = [
        '我的面试经历',
        '职场人几点钟下班',
        '计算机专业人均工资',
    ]
    const { articles, fetchArticle, isLoading, initialLoading } = useArticleStore()

    // 修復 Tabs 高度問題 - 只針對喜歡列表頁面

    useEffect(() => {
        fetchArticle()
        useTitle('bubu智聘广场页')
    }, [])

    return (

        <>
            {initialLoading ? (
                // 骨架屏內容
                <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
                    {/* 模拟搜索区域 */}
                    <div style={{
                        padding: '20px',
                        backgroundColor: 'white',
                        // margin: '10px',
                        // borderRadius: '10px'
                    }}>
                        <Skeleton
                            title={false}
                            avatar={{ size: 30 }}
                            row={1}
                        />
                    </div>

                    {/* 模拟标签页 */}
                    <div style={{
                        backgroundColor: 'white',
                        // margin: '10px 0',
                        // padding: '10px 0'
                        marginBottom: '10px',
                    }}>
                        <Skeleton
                            title={false}
                            row={1}
                            style={{ height: '40px' }}
                        />
                    </div>

                    {/* 模拟文章列表 */}
                    <div style={{ padding: '0 20px' }}>
                        <Skeleton
                            title
                            avatar
                            row={3}
                            style={{
                                marginBottom: '20px',
                                backgroundColor: 'white',
                                padding: '15px',
                                borderRadius: '10px'
                            }}
                        />
                        <Skeleton
                            title
                            avatar
                            row={2}
                            style={{
                                marginBottom: '20px',
                                backgroundColor: 'white',
                                padding: '15px',
                                borderRadius: '10px'
                            }}
                        />
                        <Skeleton
                            title
                            avatar
                            row={4}
                            style={{
                                backgroundColor: 'white',
                                padding: '15px',
                                borderRadius: '10px'
                            }}
                        />
                    </div>
                </div>
            ) : (
                <div>
                    <div className={styles.HeaderSearch}>
                        <div className={styles.HeaderSearchLeft}>
                            <Icon type='icon-mianxingdaiyanjingnanshenglikenanligongnanchengxuyuantubiao' size={30} />
                        </div>

                        <div className={styles.HeaderSearchInput}
                            onClick={() => {
                                navigate('/search')
                            }}
                        >
                            <Icon type='icon-sousuo' size={20} />
                            <div className={styles.HeaderSearchInputText}>
                                搜索文章、话题或用户
                            </div>
                        </div>

                        <div className={styles.HeaderSearchRight}>
                            <CommentO fontSize={25} />
                        </div>
                    </div>
                    <Tabs
                        background=' linear-gradient(to bottom,#81ECEC49 0%, white 100%)'
                        type='line'
                        color='black'
                        animated={true}
                        swipeable={true}
                        align='start'
                        className={styles.tabs}
                    >
                        {navList.map((item, index) => (
                            <Tabs.TabPane key={index} title={
                                index === 2 ? (
                                    <div className={styles.tabWithBadge} onClick={() => {
                                        clearToast()
                                    }}>
                                        <div className={styles.badgeContainer} style={{ fontSize: '16px' }}>{item}
                                            <Toast />
                                        </div>
                                    </div>
                                ) : (
                                    <span style={{ fontSize: '16px' }}>{item}</span>
                                )
                            }
                            >
                                {index === 2 ? (<LikeArticle />) : (<ArticleWaterfall articles={articles} fetchArticle={fetchArticle} isLoading={isLoading} />)}
                            </Tabs.TabPane>
                        ))}
                    </Tabs>

                </div>
            )}
        </>
    )
}

export default Square
