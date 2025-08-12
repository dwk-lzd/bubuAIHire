import {
    useEffect
} from 'react'

import { useUserStore } from '@/store/useUserStore'
import {
    useNavigate,
} from 'react-router-dom'

const RequireAuth = ({ children }) => {
    const token = localStorage.getItem('token') || ''
    const navigate = useNavigate()
    useEffect(() => {
        if (!token) {
            navigate('/login')
        }
    }, [])
    return (
        <>
            {children}
        </>
    )
}
export default RequireAuth;
