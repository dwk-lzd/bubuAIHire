import {
    Loading
} from 'react-vant'
import {
    useState,
    useEffect,
    useRef
} from 'react'
import {
    memo
} from 'react'
import styles from './Search.module.css'
import HotSearch from '@/components/HotSearch'
import HistorySearch from '@/components/HistorySearch'
import SuggestSearch from '@/components/SuggestSearch'
import SearchHeader from '@/components/SearchHeader'
import {
    useHistoryStore
} from '@/store/useHistoryStore'
import {
    useHotlistStore
} from '@/store/useHotlistStore'
import {
    useSuggestStore
} from '@/store/useSuggestStore'
import useTitle from '@/hooks/useTitle';
const Search = () => {
    // 热门搜索
    const { hotlist, setHotlist } = useHotlistStore()
    const { historyList, addHistory } = useHistoryStore()
    const { suggestList, setSuggestList, clearSuggestList } = useSuggestStore()
    const searchRef = useRef(null)
    const [value, setValue] = useState('')

    // 初始化時清空搜索建議
    useEffect(() => {
        clearSuggestList()
        useTitle('bubu智聘搜索页')
    }, [])

    const handleBack = () => {
        history.go(-1)
    }

    const handleValue = (value) => {
        // api 请求
        setValue(value)
        if (!value.trim()) {
            clearSuggestList() // 使用同步清空方法
            return
        }
        setSuggestList(value)
    }

    // 處理搜索
    const handleSearch = () => {
        const newHistory = [...historyList, {
            id: historyList.length + 1,
            text: value
        }]
        localStorage.setItem('searchHistory', JSON.stringify(newHistory))
        addHistory(value)
        setValue('')
        clearSuggestList() // 搜索後清空建議
        setTimeout(() => {
            searchRef.current?.focus()
        }, 0)
    }

    return (
        <div className={`flex flex-col h-screen `}>
            <SearchHeader
                value={value}
                setValue={setValue}
                onSearch={handleSearch}
                onBack={handleBack}
                placeholder="请输入职位名称"
                handleValue={handleValue}
                searchRef={searchRef}
            />
            {
                value.trim() === '' ? (
                    <>
                        {/* 搜索历史 */}
                        <HistorySearch historyList={historyList} />
                        {/* 热门搜索 */}
                        <HotSearch hotlist={hotlist} setHotlist={setHotlist} />
                    </>
                ) : (
                    <SuggestSearch suggestList={suggestList} />
                )
            }
        </div>
    )
}
export default memo(Search);