import {
    useEffect,
    useState
} from 'react';
import {
    Button,
    Input,
    Loading,
    Toast,
    Image
} from 'react-vant'
import ReactMarkdown from 'react-markdown'
import { chat } from '@/llm/index.js'
import styles from './AiConversation.module.css'
import { ChatO, UserO } from '@react-vant/icons';
import Icon from "@/components/Icon/Icon"
import useTitle from '@/hooks/useTitle';
const AiConversation = () => {
    useEffect(() => {
        useTitle('bubu智聘AI智能招聘助手')
    }, [])
    const [text, setText] = useState("");
    const [isSending, setIsSending] = useState(false);
    // 数据驱动界面
    // 静态界面
    const [messages, setMessages] = useState([
        {
            id: 1,
            content: '你好',
            role: 'user'
        },
        {
            id: 2,
            content: '你好，我是您的招聘小助手,有什么可以帮您的吗？',
            role: 'assistant'
        },
    ]);
    const handleChat = async () => {
        if (text.trim() === "") {
            Toast.info('内容不能为空');
            return
        }
        setIsSending(true);
        setText("")
        setMessages((prev) => [...prev, {
            id: prev.length + 1,
            content: text,
            role: 'user'
        }])
        const newMassage = await chat([{
            role: 'user',
            content: text
        }]);
        setMessages((prev) => [...prev, newMassage.data])
        setIsSending(false);

    }
    return (
        <div className="flex flex-col h-all">
            <div className={styles.header}>
                <div className={styles.headerLeft}>
                    <Image round src="https://resouces.modelscope.cn/cover-images/88aa6906-bc1e-4392-9311-a76aebd0307e.png?x-oss-process=image/format,jpg/quality,Q_50" />
                </div>
                <div className={styles.headerRight}>
                    布布AI智能招聘助手
                </div>
                <div>
                    <Icon type='icon-zaixiankefu' size={24} />
                </div>
            </div>
            <div className={styles.chatAreaWrapper}>
                <div className={`flex-1 ${styles.chatArea}`}>
                    {
                        messages.map((msg, index) => (
                            <div key={index} className={`${msg.role === 'user' ? styles.messageRight : styles.messageLeft}`}>
                                {msg.role === 'assistant' ? <Icon type='icon-a-zhinengjiqirenjiqiren' size={20} /> : <Icon type='icon-yonghu-nan' size={20} />}
                                <div className={styles.messageContent}>
                                    <ReactMarkdown>{msg.content}</ReactMarkdown>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className={`flex ${styles.inputArea}`}>
                <Input
                    value={text}
                    onChange={(e) => setText(e)}
                    placeholder="请输入消息"
                    className={`flex-1 ${styles.input}`}
                />
                <Button disabled={isSending} type="primary" onClick={handleChat} className={styles.button}>发送</Button>
            </div>
            {isSending && (<div className="fixed-loading"><Loading type="ball" /></div>)}
        </div>
    )
}
export default AiConversation
