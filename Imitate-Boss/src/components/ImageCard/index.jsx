import styles from './card.module.css'
import {
    useRef,
    useEffect,
    memo
} from 'react'
import {
    useNavigate
} from 'react-router-dom'

const ImageCard = ({ url }) => {
    const navigate = useNavigate()
    // const { url, height } = props
    const imgRef = useRef(null)
    useEffect(() => {
        const observer = new IntersectionObserver(([entry], obs) => {
            if (entry.isIntersecting) {
                const img = entry.target
                const oImg = document.createElement('img')
                oImg.src = img.dataset.src
                oImg.onload = () => {
                    img.src = img.dataset.src
                }
                // img.src = img.dataset.src || ''
                obs.unobserve(entry.target)
            }

        })
        if (imgRef.current) observer.observe(imgRef.current)
    }, [])
    return (
        <img ref={imgRef} data-src={url} className={styles.img} />
    )
}
export default memo(ImageCard)