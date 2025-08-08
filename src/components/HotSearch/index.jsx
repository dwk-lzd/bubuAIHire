import {
    Skeleton,
    Divider
} from 'react-vant'
import {
    Fire
} from '@react-vant/icons'
import {
    memo,
    useEffect
} from 'react'
import styles from './HotSearch.module.css'


const HotSearch = ({ hotlist, setHotlist }) => {

    useEffect(() => {
        setHotlist()
    }, [])
    return (
        <div className={`${styles.hotlist}`}>
            <Skeleton loading={hotlist.length === 0} title={false} row={9} rowCol={1} rowHeight={30} />
            {hotlist && hotlist.length > 0 ? (<h2 className={`${styles.hotlistTitle}`}>热门搜索</h2>) : ''}
            {
                hotlist && hotlist.map((item, index) => {
                    return (
                        <div key={item.id}>
                            <div className={`${styles.hotlistItem}`}>
                                <div className={`${styles.hotlistItemIcon}`}>
                                    <Fire fontSize='16px' color='red' />
                                </div>
                                <div>{item.name}</div>
                            </div>
                            {/* 分割线*/}
                            {index < hotlist.length && (
                                <Divider
                                    style={{
                                        borderColor: '#e8e8e8',
                                        margin: '8px 0'
                                    }}
                                    hairline={false}
                                />
                            )}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default memo(HotSearch); 