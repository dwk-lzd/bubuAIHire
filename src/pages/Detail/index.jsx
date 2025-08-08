import { useEffect } from 'react'
import styles from './Detail.module.css'
import { useParams } from 'react-router-dom'
import { useJobsStore } from '@/store/useJobsStore'
import AIPNG from '@/assets/AI.png'
import ImageCard from '@/components/ImageCard'
import Icon from '@/components/Icon/Icon.jsx'
import { ArrowLeft, ShareO, StarO, WarnO, LocationO, PointGiftO, ShieldO, Play, Arrow } from '@react-vant/icons'
import {
    Divider
} from 'react-vant'
import { useNavigate } from 'react-router-dom';
import useTitle from '@/hooks/useTitle';
const Detail = () => {
    const { id } = useParams()
    const { jobs } = useJobsStore()
    const job = jobs.find(job => job.id === id)
    const navigate = useNavigate()
    console.log(job)
    useEffect(() => {
        useTitle(`${job.company.name}-${job.title.name} - 职位详情`)

        // 保存原始背景色
        const originalBg = document.body.style.backgroundColor || '#0700000f';

        // 設定為白色
        document.body.style.backgroundColor = 'white';

        // 組件卸載時恢復原始背景色
        return () => {
            document.body.style.backgroundColor = originalBg;
        };
    }, []);
    return (
        <>
            <div className={styles.detailContainer}>
                <div className={styles.detailHeader}>
                    <div className={styles.detailHeaderContainer}>
                        <div className={styles.detailHeaderTop}>
                            <div>
                                <ArrowLeft fontSize={24} onClick={() => history.go(-1)} />
                            </div>
                            <div>
                                <ShareO fontSize={24} className={styles.detailHeaderTopIcon} />
                                <StarO fontSize={24} className={styles.detailHeaderTopIcon} />
                                <WarnO fontSize={24} />
                            </div>
                        </div>
                        <div className={styles.detailHeaderBody}>
                            <div className={styles.detailHeaderBodyMsg}>
                                <h2>{job.title.name}</h2>
                                <p>{job.salary}</p>
                            </div>
                            <div className={styles.detailHeaderBodyLocation}>
                                <LocationO fontSize={24} />
                                <p>{job.location}</p>
                                <PointGiftO fontSize={24} style={{ margin: '0 5px 0 25px' }} />
                                {job.benefits.map((item, index) => (
                                    <p key={index}>{`${item}`}</p>
                                ))}
                            </div>

                        </div>
                        <div className={styles.detailHeaderBottom}>
                            <div className={styles.detailHeaderBottomLeft}>
                                <ShieldO color='#6BD0A2' />
                                <p style={{ color: '#58B282' }}>求职安全中心</p>
                                <Play color='#6BD0A2' />
                            </div>
                            <p>{`更新于${job.updateTime}`}</p>
                        </div>
                        <Divider className={styles.myDivider} />
                    </div>

                </div>
                <div className={styles.detailBody}>
                    <h3 style={{ marginBottom: '10px' }}>职位描述</h3>
                    <p style={{ marginBottom: '10px' }}>优选专业：</p>
                    <div className={styles.detailBodyMajor}>
                        {job.major.map((item, index) => (
                            <p key={index}>{`${item}`}</p>
                        ))}
                    </div>
                    <h4>任职资格</h4>
                    <div className={styles.detailBodyRequirements}>
                        <p>
                            {`1、${job.title.requirements}`}
                        </p>
                        <p>
                            2、扎实掌握操作系统、软件工程、常用算法、数据结构、数据库、网络等计算机专业知识
                        </p>
                        <p>
                            3、计算机、软件工程等相关专业;
                        </p>
                        <p>
                            4、热爱编程，对云原生、大模型等新技术有强烈的好奇心，主动学习能力强，具备较强执行力、抗压能力和团队协作意识;
                        </p>
                        <p>
                            5、加分项:对持续集成，编译构建，开源社区，IDE，软件研发工具，智能化开发有经验，有编程竞赛获奖经历(如ACM、蓝桥杯)。
                        </p>
                    </div>
                    <h4>工作职责</h4>
                    <div className={styles.detailBodyWork}>
                        <p>
                            1、负责业务支撑平台的开发与维护，确保平台的稳定性、可靠性
                            和可扩展性;
                        </p>
                        <p>
                            2.参与项目需求分析、设计和开发工作，能独立完成模块或系
                            统的开发任务;
                        </p>
                        <p>
                            3.与团队成员紧密协作，按时完成项目进度，保证项目质量;
                        </p>
                        <p>
                            4.积极参与团队技术分享和交流活动，促进团队成员的共同成长。
                        </p>
                    </div>
                    <div className={styles.detailBodyFooter}>
                        <div className={styles.detailBodyFooterAI}>
                            <img src={AIPNG} alt="" onClick={() => navigate('/coze')} />

                        </div>
                    </div>
                    <Divider className={styles.myDivider} />
                    <div className={styles.detailBodyFooterBottom}>
                        <h2>公司信息</h2>
                        <div className={styles.detailBodyFooterBottomMsg}>
                            <div className={styles.detailBodyFooterBottomMsgLeft}>

                                <ImageCard url={job.company.logo} />


                                <div>
                                    <h3>{job.company.name}</h3>
                                    <div>
                                        <span style={{ marginRight: '5px' }}>{job.company.size}</span>
                                        <Divider type='vertical' className={styles.myDivider} />
                                        <span style={{ marginLeft: '5px' }}>{job.company.type}</span>
                                    </div>
                                    <div>
                                        <span style={{ marginRight: '5px' }}>{job.location}</span>
                                        <Divider type='vertical' className={styles.myDivider} />
                                        <span style={{ marginLeft: '5px' }}>{`在招职位 ${job.number} 个`}</span>
                                    </div>

                                </div>
                            </div>
                            <Arrow />
                        </div>
                    </div>
                    <Divider className={styles.myDivider} />
                    <div className={styles.detailFooterWarn}>
                        <div className={styles.detailFooterWarnTop}>
                            <div className={styles.detailFooterWarnTopLeft}>
                                <ShieldO fontSize={18} color='#6BD0A2' />
                                <h4 style={{ marginLeft: '5px' }}>智聘安全提醒</h4>
                            </div>
                            <div className={styles.detailFooterWarnTopRight}>
                                <p>我要举报</p>
                                <Arrow />
                            </div>
                        </div>
                        <p>
                            用人单位若存在以下违法行为，请您提高警惕，立刻报警或者向平台举报:
                        </p>
                        <p>
                            1.强迫或者要求您投资入股、购买虚拟货币(如比特币)、转账、汇款等
                        </p>

                        <p>
                            2.要求您提供担保人、担保金或者以其他名义向您收取财物
                        </p>
                        <p>
                            3.以招聘名义向您牟取任何不正当利益(财产权益、人身权益)
                        </p>
                        <p>
                            4.扣押您的身份证件或者其他证件
                        </p>
                        <p>
                            5.要求您添加微信、QQ进行转账、汇款
                        </p>
                        <p>
                            6.其他损害您合法权益的行为等
                        </p>
                    </div>
                </div>
                <div className={styles.detailBotton}>
                    <Divider className={styles.detailBottonDivider} />
                    <button>立即投递</button>
                </div>
            </div >

        </>

    )
}

export default Detail