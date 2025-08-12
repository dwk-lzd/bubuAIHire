import {
    useState,
    useEffect
} from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Acount.module.css'
import {
    Image,
    Divider,
    Button,
    NoticeBar
} from 'react-vant'
import {
    Like,
    Star,
    Scan,
    SettingO,
    Column,
    Invitation,
    Play
} from '@react-vant/icons'
import Icon from '@/components/Icon/Icon'
import schoolLogo from '@/assets/school.png'
import { useUserStore } from '@/store/useUserStore'
import useTitle from '@/hooks/useTitle';

const Acount = () => {
    useEffect(() => {
        useTitle('bubu智聘账号中心')
    }, [])

    const { user, getUserInfo } = useUserStore()
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem('token')
        navigate('/login')
    }
    const [userInfo, setUserInfo] = useState({
        nickname: user || '二二三四',
        slogan: 'AAA大运重卡(只跑国道)',
        graduateTime: '2026年毕业',
        level: '本科',
        avatar: 'https://resouces.modelscope.cn/cover-images/88aa6906-bc1e-4392-9311-a76aebd0307e.png?x-oss-process=image/format,jpg/quality,Q_50',
    })
    const [images, setImages] = useState([])
    const [usualFunctionList, setUsualFunctionList] = useState([
        { icon: <Column fontSize={30} color='#81ececc0' />, title: '在线简历' },
        { icon: <Invitation fontSize={30} color='#81ececc0' />, title: '附件简历' },
        { icon: <Like fontSize={30} color='#81ececc0' />, title: '求职意向' },
        { icon: <Star fontSize={30} color='#81ececc0' onClick={() => navigate('/coze')} />, title: '简历优化' },
    ])
    const [otherFunctionList, setOtherFunctionList] = useState([
        { icon: <Icon type='icon-boshimao1' size={25} />, title: '实习专区' },
        { icon: <Icon type='icon-gaoxin' size={25} />, title: '高薪机会' },
        { icon: <Icon type='icon-wuguan' size={25} />, title: 'AI改简历' },
        { icon: <Icon type='icon-shangchuanjianli' size={25} />, title: '升级简历' },
        { icon: <Icon type='icon-jingzhenglifenxi' size={25} />, title: '竞争力分析' },
        { icon: <Icon type='icon-tiku' size={25} />, title: '校招题库' },
        { icon: <Icon type='icon-shexiangji' size={25} />, title: '模拟面试' },
        { icon: <Icon type='icon-ceping' size={25} />, title: '职业测评' },
        { icon: <Icon type='icon-shu' size={25} />, title: '在线课堂' },
        { icon: <Icon type='icon-feiji' size={25} />, title: '留学生专区' },
        { icon: <Icon type='icon-yajin' size={25} />, title: '防骗指南' },
        { icon: <Icon type='icon-gengduo' size={25} />, title: '更多' },
    ])
    return (
        <div className={`${styles.container}`}>

            {/* 用户信息 */}
            <div className={styles.user}>
                <Image
                    className={styles.userAvatar}
                    round
                    height='65'
                    width='65'
                    src={userInfo.avatar}
                />
                <div className={styles.userMessage}>
                    <div className={styles.userNickname}>昵称：{userInfo.nickname}</div>
                    <div className={styles.userSlogan}>签名：{userInfo.slogan}</div>
                    <div className='flex' style={{ alignItems: 'center', gap: '8px' }}>
                        <div>{userInfo.graduateTime}</div>
                        <Divider
                            type='vertical'
                            style={{
                                borderColor: 'black',
                            }}
                        />
                        <div>{userInfo.level}</div>
                    </div>
                </div>
                <div className={styles.userIcon}>
                    <div className={styles.userIconScan} >
                        <Scan fontSize={20} />
                    </div>
                    <div className={styles.userIconSetting} >
                        <SettingO fontSize={20} />
                    </div>
                </div>
            </div>
            {/* VIP专区 */}
            <div className={styles.vipContainer}>
                <div className={styles.vipTitle}>
                    <div>
                        <h3
                            style={{
                                fontSize: '16px',
                                margin: '10px 0 5px 10px'
                            }}
                        >{`VIP·学生版 快点来升级VIP吧`}</h3>
                        <p
                            style={{
                                fontSize: '12px',
                                margin: '0 0 5px 10px'
                            }}
                        >{`开通VIP享受更多功能`}</p>
                    </div>

                    <Button
                        round
                        size='small'
                        color='rgb(247, 132, 50)'
                        style={{
                            margin: '0 10px 0 0',
                            fontSize: '14px',
                            fontWeight: '200'
                        }}
                    >
                        去升级
                    </Button>
                </div>

                <NoticeBar
                    text='加入bubu智聘，开启你的职场之旅，让你总是快人一步。'
                    background='white'
                    color='#029F9F'
                    className={styles.vipNotice}
                />


            </div>

            {/* 校园专区 */}
            <div className={styles.schoolContainer}>
                <div className={styles.school}>
                    <img src={schoolLogo} alt="校园专区" className={styles.schoolLogo} />
                    <div>
                        <h3>{`京海理工大学 校园专区`}</h3>
                        <p>{`官方定制校招专区`}</p>
                    </div>
                </div>
                <div className={styles.schoolEnter}>
                    <p>进入</p>
                    <Play fontSize={15} />
                </div>
            </div>

            {/* 常用功能 */}
            <div className={styles.usualFunction}>
                <h2 className={styles.usualFunctionTitle}>常用功能</h2>
                <div className={styles.usualFunctionList}>
                    {
                        usualFunctionList.map((item, index) => (
                            index === 3 ? (
                                <div key={index} className={styles.usualFunctionItem} onClick={() => navigate('/coze')}>

                                    <div className={styles.usualFunctionIcon}>
                                        {item.icon}
                                    </div>
                                    <div className={styles.usualFunctionText}>{item.title}</div>
                                </div>
                            ) : (<div key={index} className={styles.usualFunctionItem}>
                                <div className={styles.usualFunctionIcon}>
                                    {item.icon}
                                </div>
                                <div className={styles.usualFunctionText}>{item.title}</div>
                            </div>)
                        ))
                    }
                </div>
            </div>

            {/* 其他功能 */}
            <div className={styles.otherFunction}>
                <h2 className={styles.otherFunctionTitle}>其他功能</h2>
                {/* 使用grid布局3行4列 */}
                <div className={styles.otherFunctionList}>
                    {
                        otherFunctionList.map((item, index) => (
                            <div key={index} className={styles.otherFunctionItem}>
                                <div className={styles.otherFunctionIcon}>
                                    {item.icon}
                                </div>
                                <div className={styles.otherFunctionText}>{item.title}</div>
                            </div>
                        ))
                    }
                </div>
            </div>

            {/* 登出按钮 */}
            <div className={styles.logout}>
                <Button
                    round
                    size='large'
                    color='#029F9F'
                    onClick={handleLogout}
                >
                    登出
                </Button>
            </div>

            {/* 底部备案信息 */}
            <div className={styles.footer}>
                <p>{`客服电话 400-888-8888 工作时间 8:00-22:00`}</p>
                <p>{`老年人直连热线 400-999-9999 工作时间 8:00-22:00`}</p>
                <p>{`算法举报与未成年人举报渠道同上`}</p>
                <p>{`人力资源服务许可证营业执照京海区人社局监督电话`}</p>
                <p>{`京ICP备88888888号-88A京ICP证888888号`}</p>
                <p>{`算法备案信息`}</p>
            </div>
        </div>
    )
}
export default Acount