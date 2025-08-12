import {
    memo
} from 'react'
import {
    Divider
} from 'react-vant'
import {
    Search,
    FlagO
} from '@react-vant/icons'
import styles from './SuggestSearch.module.css'
const SuggestSearch = ({
    suggestList
}) => {
    // console.log(suggestList);
    return (
        <div className={styles.suggestSearch}>
            {
                suggestList.map((item) => (
                    <div key={item.id} className={styles.suggestItemContainer}>
                        <div
                            className={styles.suggestItem}
                        >
                            <div>
                                <Search fontSize='16px' />
                            </div>
                            <div>{item.name}</div>
                            <div>
                                <FlagO fontSize='16px' />
                            </div>

                        </div>
                        <Divider
                            style={{
                                borderColor: '#e8e8e8',
                                margin: '8px 0'
                            }}
                        />
                    </div>
                ))
            }
        </div>
    )
}
export default memo(SuggestSearch)