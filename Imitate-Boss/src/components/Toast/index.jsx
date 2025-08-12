import { useState, useEffect } from 'react'
import {
    Badge
} from 'react-vant'
import styles from './Toast.module.css'
import { toastEvents } from './ToastController'
const Toast = () => {

    const [count, setCount] = useState(0)

    useEffect(() => {
        const show = () => {
            setCount(prev => prev + 1)
        }
        const decrease = () => {
            setCount(prev => Math.max(0, prev - 1))
        }
        const clear = () => {
            setCount(0)
        }
        toastEvents.on('show', show)
        toastEvents.on('decrease', decrease)
        toastEvents.on('clear', clear)
        return () => {
            toastEvents.off('show', show)
            toastEvents.off('decrease', decrease)
            toastEvents.off('clear', clear)
        }
    }, [])

    return (
        <Badge content={count} className={styles.badge} showZero={false} />
    )
}

export default Toast