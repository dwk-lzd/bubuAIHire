import {
    Loading
} from 'react-vant'
import {
    useState,
} from 'react';
const Coze = () => {
    const [score, setScore] = useState('');
    const [strengths, setStrengths] = useState([]);
    const [weaknesses, setWeaknesses] = useState([]);
    const [suggestions, setSuggestions] = useState([]);
    const [loading, setLoading] = useState(false);

    async function uploadImageToCoze(imageFile) {

        const formData = new FormData();
        formData.append("file", imageFile); // imageFile 是 File 或 Blob 对象

        const response = await fetch("https://api.coze.cn/v1/files/upload", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${import.meta.env.VITE_COZE_API_KEY}`,

            },
            body: formData,
        });

        if (!response.ok) {
            throw new Error(`Upload failed: ${response.status}`);
        }

        const result = await response.json();
        return result.data.id; // 返回 file_id
    }

    async function callCozeWorkflowWithImage(file_id) {
        const workflow_id = import.meta.env.VITE_COZE_WORKFLOW_ID;

        const parameters = {
            input: JSON.stringify({ file_id }),
        }
        setLoading(true);
        const response = await fetch("https://api.coze.cn/v1/workflow/run", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${import.meta.env.VITE_COZE_API_KEY}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ workflow_id, parameters, }),
        });

        if (!response.ok) {
            throw new Error(`Workflow call failed: ${response.status}`);
        }

        const result = await response.json();
        console.log(result.data);

        setLoading(false);


        const result1 = JSON.parse(result.data);
        console.log(result1);
        console.log(result1.score);
        console.log(result1.strengths);
        console.log(result1.weaknesses);
        console.log(result1.suggestions);

        setScore(result1.score);
        setStrengths(result1.strengths);
        setWeaknesses(result1.weaknesses);
        setSuggestions(result1.suggestions);



    }
    return (
        <div>
            {loading ? <Loading type='ball' className='fixed-loading' /> : ''}
            <h2>请上传你的简历图片</h2>
            <input type="file" onChange={async (e) => {
                const file = e.target.files[0];
                const fileId = await uploadImageToCoze(file);
                console.log(fileId);
                await callCozeWorkflowWithImage(fileId);
            }} />
            <div>
                {
                    (
                        <div>
                            <div>
                                <h3>{`✅ 优点:`}</h3>
                                {strengths.map((item, index) => <div key={index}>{`${index + 1}. ${item}`}</div>)}
                            </div>
                            <div>
                                <h3>{`❌ 缺点:`}</h3>
                                {weaknesses.map((item, index) => <div key={index}>{`${index + 1}. ${item}`}</div>)}
                            </div>
                            <div>
                                <h3>{`建议：`}</h3>
                                {suggestions.map((item, index) => <div key={index}>{`${index + 1}. ${item}`}</div>)}
                            </div>
                            <div>
                                <h3>{`⭐ 综合评分：满分10分：`}</h3>

                                {score}
                            </div>



                        </div>
                    )

                }
            </div>
        </div>
    );
};

export default Coze;
