import {
    memo,
    useEffect,
    useRef
} from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './JobsWaterfall.module.css'
import ImageCard from '@/components/ImageCard'
import { Loading } from 'react-vant'
const JobsWaterfall = ({ jobs, fetchMore, isLoading }) => {
    const navigate = useNavigate()
    useEffect(() => {
        // fetchMore()
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                fetchMore()
            }
        })
        if (divBottom.current) observer.observe(divBottom.current);
        return () => observer.disconnect()

    }, [])

    const divBottom = useRef(null)
    return (
        <div className={styles.jobsContainer}>
            {
                jobs.map(item => (
                    <div key={item.id} className={styles.jobsItem}
                        onClick={() => {
                            navigate(`/detail/${item.id}`)
                        }}
                    >
                        <div className={styles.jobsItemBox}>
                            <div className={styles.jobsItemHeader}>
                                <p>{item.title.name}</p>
                                <p
                                    style={{ color: '#029F9F' }}
                                >{item.salary}</p>
                            </div>
                            <div className={styles.jobsItemContent}>
                                <p>{item.jobTime}</p>
                                <p>{item.jobTimes}</p>
                                <p>{item.graduation}</p>
                            </div>
                            <div className={styles.jobsItemBenefits}>
                                {
                                    item.benefits.map((benefit, index) => (
                                        <p
                                            key={index}
                                        >
                                            {benefit}
                                        </p>
                                    ))
                                }
                            </div>
                            <div className={styles.jobsItemFooter}>
                                <div className={styles.jobsItemFooterCompany}>
                                    <ImageCard url={item.company.logo} height={40} />
                                    <div>
                                        <p>{item.company.name}</p>
                                        <p>{item.company.size}</p>
                                    </div>
                                </div>
                                <div>
                                    <p>{item.location}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
            <div ref={divBottom} className={styles.loading}>
                {isLoading ? <Loading type='ball' /> : null}
            </div>
        </div>
    )
}
export default memo(JobsWaterfall)