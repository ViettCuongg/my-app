import { useState } from 'react';
import Navbar from '../../components/HomePage/header/Navbar';

const HollandQuiz = () => {
    const [answers, setAnswers] = useState({});
    const [result, setResult] = useState('');
    const hollandGroupsArray = ['Realistic', 'Investigative', 'Artistic', 'Social', 'Enterprising', 'Conventional'];

    const questions = [
        {
            id: 1,
            text: 'Tôi thích tổ chức và làm việc với số liệu, hồ sơ hoặc máy móc; Tôi thích làm việc với biểu đồ và đồ thị.',
        },
        {
            id: 2,
            text: 'Tôi thích làm việc với cây cỏ, động vật hoặc vật liệu như gỗ, dụng cụ hoặc máy móc.',
        },
        {
            id: 3,
            text: 'Tôi thích làm việc với mọi người, dạy học, giúp đỡ hoặc giáo dục họ; Tôi thích làm việc theo cách hợp tác hơn là cạnh tranh.',
        },
        {
            id: 4,
            text: 'Tôi thích sáng tạo và thích sử dụng tài năng nghệ thuật của mình để tạo ra sản phẩm mới.',
        },
        {
            id: 5,
            text: 'Tôi thích làm việc với ý tưởng, phân tích vấn đề và tìm ra giải pháp logic.',
        },
        {
            id: 6,
            text: 'Tôi thích làm việc ngoài trời, khám phá hoặc tham gia vào các hoạt động thể chất.',
        },
        {
            id: 7,
            text: 'Tôi thích tham gia vào các hoạt động tổ chức, quản lý hoặc lãnh đạo.',
        },
        {
            id: 8,
            text: 'Tôi thích sử dụng công nghệ và máy móc để giải quyết vấn đề.',
        },
        {
            id: 9,
            text: 'Tôi thích viết, giao tiếp hoặc thực hiện các hoạt động liên quan đến ngôn ngữ.',
        },
        {
            id: 10,
            text: 'Tôi thích nghiên cứu và tìm hiểu thông tin mới.',
        },
    ];

    const handleAnswerChange = (questionId, value) => {
        setAnswers({ ...answers, [questionId]: value });
    };
    const calculateHollandCode = () => {
        const answerCount = {
            A: 0,
            B: 0,
            C: 0,
            D: 0,
            E: 0,
        };

        // Đếm số lượng đáp án của từng loại
        for (const questionId in answers) {
            answerCount[answers[questionId]]++;
        }

        // Kiểm tra nếu tất cả các loại đáp án có số lượng bằng nhau
        const allEqual = Object.values(answerCount).every((count) => count === Object.values(answerCount)[0]);

        // Nếu tất cả bằng nhau, chọn một loại đáp án ngẫu nhiên
        if (allEqual) {
            const answerTypes = Object.keys(answerCount);
            return answerTypes[Math.floor(Math.random() * answerTypes.length)];
        }

        // Tìm số lượng lớn nhất của đáp án
        const maxCount = Math.max(...Object.values(answerCount));

        // Lấy tất cả các loại đáp án có số lượng bằng maxCount
        const maxAnswerTypes = Object.keys(answerCount).filter((answer) => answerCount[answer] === maxCount);

        // Chọn một loại đáp án ngẫu nhiên từ trong nhóm đáp án có số lượng lớn nhất
        const maxAnswer = maxAnswerTypes[Math.floor(Math.random() * maxAnswerTypes.length)];

        return maxAnswer;
    };

    const mapHollandCodeToGroup = (hollandCode) => {
        const hollandGroups = {
            R: 'Realistic',
            I: 'Investigative',
            A: 'Artistic',
            S: 'Social',
            E: 'Enterprising',
            C: 'Conventional',
        };

        return hollandCode in hollandGroups ? hollandGroups[hollandCode] : null;
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const hollandCode = calculateHollandCode();
        console.log('Holland Code:', hollandCode);

        const hollandGroup = mapHollandCodeToGroup(hollandCode);
        console.log('Holland Group:', hollandGroup);

        if (hollandGroup) {
            setResult(hollandGroup);
        } else {
            const randomIndex = Math.floor(Math.random() * hollandGroupsArray.length);
            setResult(hollandGroupsArray[randomIndex]);
        }
    };

    return (
        <div>
            <Navbar />
            <div className="pt-12 mx-auto my-auto max-w-[780px]">
                <h1 className="font-bold text-2xl">Holland Test</h1>
                <form onSubmit={handleSubmit}>
                    {questions.map((question, index) => (
                        <div key={question.id}>
                            <p className="py-4">
                                {index + 1}. {question.text}
                            </p>
                            <label>
                                <input
                                    type="radio"
                                    value="A"
                                    name={`question_${question.id}`}
                                    onChange={() => handleAnswerChange(question.id, 'A')}
                                />
                                Strongly Disagree
                            </label>
                            <label className="pl-4">
                                <input
                                    type="radio"
                                    value="B"
                                    name={`question_${question.id}`}
                                    onChange={() => handleAnswerChange(question.id, 'B')}
                                />
                                Disagree
                            </label>
                            <label className="pl-4">
                                <input
                                    type="radio"
                                    value="C"
                                    name={`question_${question.id}`}
                                    onChange={() => handleAnswerChange(question.id, 'C')}
                                />
                                Neutral
                            </label>
                            <label className="pl-4">
                                <input
                                    type="radio"
                                    value="D"
                                    name={`question_${question.id}`}
                                    onChange={() => handleAnswerChange(question.id, 'D')}
                                />
                                Agree
                            </label>
                            <label className="pl-4">
                                <input
                                    type="radio"
                                    value="E"
                                    name={`question_${question.id}`}
                                    onChange={() => handleAnswerChange(question.id, 'E')}
                                />
                                Strongly Agree
                            </label>
                        </div>
                    ))}
                    <div className="flex items-center justify-center">
                        <button
                            type="submit"
                            className="max-w-780px w-56 my-4 px-5 py-3 mt-8 rounded-md bg-[#20B486] text-white font-medium"
                        >
                            Submit
                        </button>
                    </div>
                </form>
                {result && (
                    <p>
                        Your Holland Group: <span className="font-bold">{result}</span>
                    </p>
                )}
            </div>
        </div>
    );
};

export default HollandQuiz;
