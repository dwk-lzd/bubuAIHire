import {
    useState,
    useRef,
    useEffect,
} from 'react'
import {
    Divider,
    Button,
    Loading,
} from 'react-vant'
import {
    Contact,
    Lock,
    Close
} from '@react-vant/icons'
import styles from './Login.module.css'
import {
    useUserStore
} from '@/store/useUserStore'
import {
    useNavigate
} from 'react-router-dom'
import useTitle from '@/hooks/useTitle';
const Login = () => {
    useEffect(() => {
        useTitle('bubu智聘登录页')
    }, [])

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const usernameRef = useRef('')
    const passwordRef = useRef('')
    const { login, isLogin, isLoading } = useUserStore()
    const navigate = useNavigate()
    const handleLogin = async (e) => {
        e.preventDefault()
        const result = await login({ username, password })
        if (result && result.message) {
            alert(result.message)
        }
        if (result && result.success) {
            navigate('/acount')
        }
    }

    return (

        <div className={styles.loginContainer}>
            {isLoading && <Loading type='ball' className='fixed-loading' />}
            <div className={styles.loginHeader}>
                <h1>bubu智聘</h1>
                <p>找工作，直接跟老板谈，快人一步</p>
            </div>
            <div className={styles.loginBody}>
                <form className={styles.loginForm}>
                    <div className={styles.loginUsername}>
                        <div className={styles.loginUsernameIcon}>
                            <Contact />
                            <p>用户名</p>
                        </div>
                        <input
                            type="text"
                            placeholder='请输入用户名'
                            value={username}
                            autoComplete="username"
                            ref={usernameRef}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        {username && <Close fontSize={15}
                            onClick={() => {
                                setUsername('')
                                usernameRef.current.focus()
                            }}
                        />}
                    </div>
                    <Divider />
                    <div className={styles.loginPassword}>
                        <div className={styles.loginPasswordIcon}>
                            <Lock />
                            <p>密码</p>
                        </div>
                        <input
                            type="password"
                            placeholder='请输入密码'
                            autoComplete="current-password"
                            value={password}
                            ref={passwordRef}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        {password && <Close fontSize={15}
                            onClick={() => {
                                setPassword('')
                                passwordRef.current.focus()
                            }}
                        />}
                    </div>
                    <Divider />
                    <div className={styles.loginButton}>
                        <Button
                            round
                            type='info'
                            size='large'
                            style={{ background: 'linear-gradient(135deg, rgb(0, 185, 107) 0%, rgb(0, 168, 84) 100%)' }}
                            onClick={handleLogin}
                            disabled={!username || !password}
                        >
                            登录
                        </Button>
                    </div>
                    <Divider >
                        快速登录
                    </Divider>
                </form>
                <div className={styles.loginQuickLogin}>
                    <Button
                        round
                        size='large'
                        style={{ marginBottom: '10px', background: 'rgb(245, 245, 245)' }}
                        onClick={() => {
                            setUsername('job_seeker1')
                            setPassword('123456')
                        }}
                    >
                        求职者1测试登录
                    </Button>
                    <Button
                        round
                        size='large'
                        style={{ marginBottom: '10px', background: 'rgb(245, 245, 245)' }}
                        onClick={() => {
                            setUsername('job_seeker2')
                            setPassword('123456')
                        }}
                    >
                        求职者2测试登录
                    </Button>

                </div>
                <div className={styles.loginTestAccount}>
                    <div className={styles.loginTestAccountInfo}>
                        <h3>测试账号信息</h3>
                        <p>{`·求职者1: job_seeker1 / 123456`}</p>
                        <p>{`·求职者2: job_seeker2 / 123456`}</p>
                    </div>
                </div>
            </div>

            <div className={styles.loginFooter}>
                <p>© 2025 bubu智聘. All rights reserved.</p>
            </div>
        </div>
    )
}
export default Login;