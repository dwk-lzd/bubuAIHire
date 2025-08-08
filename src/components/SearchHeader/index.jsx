import {
    Search as SearchVant,
    Button
} from 'react-vant'
import {
    ArrowLeft
} from '@react-vant/icons'
import {
    memo,
    useEffect,
    useMemo
} from 'react'
import styles from './SearchHeader.module.css'
import {
    debounce
} from '@/utils'

const SearchHeader = ({
    value,
    setValue,
    onSearch,
    onBack,
    placeholder = '请输入职位名称',
    handleValue,
    searchRef
}) => {
    const handleValueDebounce = useMemo(() => {
        return debounce(handleValue, 700)
    }, [])

    useEffect(() => {
        // 當輸入框為空時，立即清空搜索建議，不使用防抖
        if (!value || value.trim() === '') {
            handleValue('') // 立即清空，不經過防抖
        } else {
            // 有內容時使用防抖
            handleValueDebounce(value)
        }
    }, [value, handleValueDebounce])

    // 處理輸入框獲得焦點
    const handleFocus = () => {
        // 當獲得焦點且輸入框為空時，清空搜索建議
        if (!value || value.trim() === '') {
            handleValue('')
        }
    }

    return (
        <div className={`${styles.searchHeader}`}>
            <ArrowLeft
                fontSize={20}
                onClick={onBack}
            />

            <SearchVant
                value={value}
                label='搜索'
                ref={searchRef}
                shape='round'
                placeholder={placeholder}
                className={`flex-1`}
                onChange={(value) => {
                    setValue(value)
                }}
                onFocus={handleFocus}
            />
            <Button
                round
                size='small'
                color='linear-gradient(to right, rgb(200, 243, 230), rgb(232, 255, 249))'
                className={`${styles.searchButton}`}
                disabled={value.trim() === '' ? true : false}
                onClick={onSearch}
            >
                <span>搜索</span>
            </Button>
        </div >
    )
}

export default memo(SearchHeader); 