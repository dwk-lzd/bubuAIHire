import {
    useState,
    useEffect
} from 'react';
import { useNavigate } from 'react-router-dom'
import {
    Swiper,
    Tabs,
    Skeleton
} from 'react-vant'
import styles from './Home.module.css'
import {
    Arrow,
} from '@react-vant/icons'
import Icon from '@/components/Icon/Icon.jsx'
import JobsWaterfall from '@/components/JobsWaterfall/index.jsx'
import {
    useJobsStore
} from '@/store/useJobsStore'
import useTitle from '@/hooks/useTitle';

import swiper1 from '@/assets/swiper/swiper1.png'
import swiper2 from '@/assets/swiper/swiper2.png'
import swiper3 from '@/assets/swiper/swiper3.png'
import swiper4 from '@/assets/swiper/swiper4.png'
import swiper5 from '@/assets/swiper/swiper5.png'
import swiper6 from '@/assets/swiper/swiper6.png'
import swiper7 from '@/assets/swiper/swiper7.png'
const Home = () => {
    const navigate = useNavigate()
    const { fetchMore, jobs, isLoading, initialLoading } = useJobsStore()
    const navList = ['推荐', '实习', '校招', '留学生', '大招秋招', '问答', '活动']
    const swiperList = [
        { id: 1, image: swiper1 },
        { id: 2, image: swiper2 },
        { id: 3, image: swiper3 },
        { id: 4, image: swiper4 },
        { id: 5, image: swiper5 },
        { id: 6, image: swiper6 },
        { id: 7, image: swiper7 },
    ]
    useEffect(() => {
        fetchMore()
        useTitle('bubu智聘首页')
    }, [])
    return (
        <div className={styles.Container}>
            {initialLoading ? (
                // 骨架屏內容
                <div>
                    {/* 模拟搜索区域 */}
                    <Skeleton
                        title={false}
                        avatar={{ size: 30 }}
                        row={1}
                        style={{ marginBottom: '20px', backgroundColor: 'white' }}
                    />

                    {/* 模拟轮播图 */}
                    <Skeleton
                        title={false}
                        avatar={false}
                        row={0}
                        style={{ height: '120px', marginBottom: '20px', backgroundColor: 'white' }}
                    />

                    {/* 模拟标签页 */}
                    <Skeleton
                        title={false}
                        avatar={false}
                        row={1}
                        style={{ marginBottom: '20px', backgroundColor: 'white' }}
                    />

                    {/* 模拟职位列表 */}
                    <Skeleton title avatar row={3} style={{ marginBottom: '15px', backgroundColor: 'white' }} />
                    <Skeleton title avatar row={3} style={{ marginBottom: '15px', backgroundColor: 'white' }} />
                    <Skeleton title avatar row={3} style={{ marginBottom: '15px', backgroundColor: 'white' }} />
                    <Skeleton title avatar row={3} style={{ backgroundColor: 'white' }} />
                </div>
            ) :
                (<div className={styles.Header}>
                    <div className={styles.HeaderSearch}>
                        <div className={styles.HeaderSearchLeft}>
                            <Icon type='icon-rili' size={30} />
                        </div>

                        <div className={styles.HeaderSearchInput}>
                            <Icon type='icon-sousuo' size={20} />
                            <input type="text" placeholder='搜索职位/公司'
                                onClick={() => {
                                    navigate('/search')
                                }}
                            />
                        </div>
                        <div className={styles.HeaderSearchRight}>
                            <p>Web前端</p>
                            <Arrow />
                        </div>
                    </div>
                    <div className={styles.HeaderSwiper}>
                        <Swiper autoplay={2500} className={styles.HeaderSwiperItem}>
                            {
                                swiperList.map((item) => (
                                    <Swiper.Item key={item.id}>
                                        <img src={item.image} alt={`swiper-${item.id}`} />
                                    </Swiper.Item>
                                ))
                            }
                        </Swiper>
                    </div>
                    <Tabs
                        background=' linear-gradient(to bottom,#81ECEC49 0%, white 100%)'
                        type='line'
                        color='black'
                        animated={true}
                        swipeable={true}
                    >
                        {
                            navList.map((item, index) => (
                                <Tabs.TabPane key={index} title={item}>
                                    <JobsWaterfall jobs={jobs} fetchMore={fetchMore} isLoading={isLoading} />
                                </Tabs.TabPane>
                            ))
                        }
                    </Tabs>
                </div>)}
        </div>
    )
}
export default Home
