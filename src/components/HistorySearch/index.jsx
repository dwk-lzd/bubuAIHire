import {
    memo,
    useEffect
} from 'react'
import {
    Close,
    ClockO
} from '@react-vant/icons'
import {
    useHistoryStore
} from '@/store/useHistoryStore'
import styles from './HistorySearch.module.css'

const HistorySearch = ({ historyList }) => {
    const { addHistory, removeHistory, clearHistory } = useHistoryStore()

    return (
        <div className={`${styles.historyContainer}`}>
            <div className={`${styles.historyHeader}`}>
                {historyList && historyList.length > 0 ? (<h2>搜索历史</h2>) : ''}
                {historyList && historyList.length > 0 ? (<p onClick={() => {
                    // 一键清除
                    clearHistory()
                    localStorage.removeItem('searchHistory')
                }}>一键清除</p>) : ''}
            </div>
            <div className={`${styles.historyList}`}>
                {
                    historyList.map((item) => {
                        return (
                            <div key={item.id} className={`${styles.historyItem}`}>
                                <div className={`${styles.historyItemClock}`}>
                                    <ClockO fontSize={16} color='#999' />
                                </div>
                                <div>
                                    {item.text}
                                </div>
                                <div className={`${styles.historyItemCross}`}
                                    onClick={() => {
                                        removeHistory(item.id)
                                        // 同時清除本地存儲
                                        const currentHistory = JSON.parse(localStorage.getItem('searchHistory') || '[]')
                                        const updatedHistory = currentHistory.filter(historyItem => historyItem.id !== item.id)
                                        localStorage.setItem('searchHistory', JSON.stringify(updatedHistory))
                                    }}
                                >
                                    <Close fontSize={16} color='#999' />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default memo(HistorySearch);