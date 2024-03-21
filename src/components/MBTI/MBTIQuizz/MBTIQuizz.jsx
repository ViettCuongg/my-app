import { useState } from 'react';
// import Navbar from '../../HomePage/header/Navbar';
// import { Footer } from '../../SignUp/RegisterForm';
import '../MBTIQuizz/MBTIQuizz.model.css';
import { MBTIQuestion } from '../../../data/MBTI/MBTIQuizz/MBTIQuizz';
import Navbar from '../../HomePage/header/Navbar';
import Footer2 from '../../Footer2/Footer2';
import { IconButton, Tooltip } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';
import { ToastContainer, toast } from 'react-toastify';
import { FaCheck } from 'react-icons/fa6';
import * as http from '../../../api/axios';
function MBTIQuizApp() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState('');
    const [answers, setAnswers] = useState([]);
    const [showResult, setShowResult] = useState(false);

    const [resultTest, setResultTest] = useState({});

    const handleOptionSelect = (value) => {
        setSelectedOption(value);
    };

    const handleNextQuestion = () => {
        const updatedAnswers = [...answers];
        updatedAnswers[currentQuestion] = selectedOption;
        setAnswers(updatedAnswers);

        setSelectedOption('');

        if (currentQuestion + 1 < MBTIQuestion.length) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowResult(true);
        }
    };

    const calculateResult = () => {
        if (answers.length === 0 || answers.every((answer) => !answer)) {
            return 'Vui lòng trả lời ít nhất 1 câu hỏi.';
        }
        let counts = {
            e: 0,
            i: 0,
            s: 0,
            n: 0,
            t: 0,
            f: 0,
            j: 0,
            p: 0,
        };

        answers.forEach((answer) => {
            counts[answer]++;
        });

        // Đảm bảo có ít nhất một giá trị cho mỗi loại
        const requiredTypes = ['e', 'i', 's', 'n', 't', 'f', 'j', 'p'];
        requiredTypes.forEach((type) => {
            if (!counts[type]) {
                counts[type] = 0;
            }
        });

        // Chuyển đổi từ kết quả tính toán sang chuỗi MBTI
        let result = '';
        result += counts['e'] >= counts['i'] ? 'E' : 'I';
        result += counts['s'] >= counts['n'] ? 'S' : 'N';
        result += counts['t'] >= counts['f'] ? 'T' : 'F';
        result += counts['j'] >= counts['p'] ? 'J' : 'P';

        return result;
    };

    const restartQuiz = () => {
        setCurrentQuestion(0);
        setAnswers([]);
        setSelectedOption('');
        setShowResult(false);
    };
    const handleFinishTest = () => {
        const result = calculateResult();
        setShowResult(true);
        const fetchApi = async () => {
            try {
                const res = await http.post('hobby/test_result', { email: dataEmail, result: result });
                setResultTest(res);
            } catch (error) {
                console.log(error);
            }
        };
        fetchApi();
        console.log('Kết quả của bài test:', result);
    };
    const [isLogEmail, setIsLogEmail] = useState(false);
    const [dataEmail, setDataEmail] = useState();
    const [isValid, setIsValid] = useState(false);

    const handlechangeEmail = (e) => {
        const { value } = e.target;
        setDataEmail(value);
        // Regular expression for email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // // Test if the entered email matches the regex
        setIsValid(emailRegex.test(value));
    };
    const handleCheckEmailLog = () => {
        if (dataEmail === '' || dataEmail === null || dataEmail === undefined) {
            toast.error('Vui lòng nhập email');
        } else if (isValid === true) {
            setIsLogEmail(true);
        } else {
            toast.error('Email không đúng định dạng');
        }
    };

    return (
        <>
            <ToastContainer position="top-right" />
            <Navbar />
            {isLogEmail ? (
                <div className="flex flex-col gap-20 p-10 mx-auto mt-32 text-red-500 bg-white rounded-lg quiz-container drop-shadow-2xl md:w-3/4 lg:w-2/4">
                    {showResult ? (
                        <div className="result-container">
                            <div className="flex justify-between">
                                <h2 className="pb-4 text-2xl font-bold">Kết quả</h2>
                                {answers.length < 70 ? (
                                    <Tooltip
                                        title="Vui lòng hoàn thành 70 câu hỏi để nhận kết quả chính xác nhất "
                                        placement="top"
                                        arrow
                                        PopperProps={{
                                            disablePortal: true,
                                            modifiers: [
                                                {
                                                    name: 'offset',
                                                    options: {
                                                        offset: [0, 2],
                                                    },
                                                },
                                            ],
                                        }}
                                        sx={{ color: 'red' }}
                                    >
                                        <IconButton color="error">
                                            <ErrorIcon />
                                        </IconButton>
                                    </Tooltip>
                                ) : null}
                            </div>
                            <hr className="pb-4" />

                            <p>
                                <span className="text-lg text-purple">Kết quả của bạn là: </span>
                                <span className="text-xl font-bold text-red">{calculateResult()}</span>
                                <br />
                                <span className="text-lg text-purple">Email của bạn là: </span>
                                <span className="text-xl font-bold text-red">{dataEmail}</span>
                            </p>
                            <div className="">
                                <h1>
                                    <span className="text-xl font-bold text-p">{resultTest.name}</span> -{' '}
                                    {resultTest.description}{' '}
                                </h1>
                                <p>
                                    {' '}
                                    <span className="font-bold">Ngành học phù hợp:</span>{' '}
                                    {resultTest?.majors?.map((item, index) => (
                                        <ul key={index}>
                                            <li className="flex items-center gap-3">
                                                <FaCheck className="text-xl text-[#22c55e]" /> {item}
                                            </li>
                                        </ul>
                                    ))}
                                </p>
                            </div>

                            <div className="flex items-center justify-center pt-8">
                                <button
                                    className="inline-block rounded bg-red px-6 pb-2 pt-2.5 font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-lightblue"
                                    onClick={restartQuiz}
                                >
                                    Làm lại bài test
                                </button>{' '}
                            </div>
                        </div>
                    ) : (
                        <div className="question-container">
                            {answers.length > 0 && (
                                <div className="flex justify-end">
                                    <button
                                        className="inline-block rounded bg-red px-6 pb-2 pt-2.5 font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-lightblue"
                                        onClick={handleFinishTest}
                                    >
                                        Kết thúc
                                    </button>{' '}
                                </div>
                            )}

                            <h1 className="pb-2 text-4xl font-bold text-red">Bộ câu hỏi MBTI</h1>
                            <hr className="pb-4" />
                            <h2 className="py-2 text-xl font-bold text-purple">Câu hỏi {currentQuestion + 1}</h2>
                            <div className="item-center">
                                <p className="font-bold text-medium ">{MBTIQuestion[currentQuestion].question}</p>
                                <ul>
                                    {MBTIQuestion[currentQuestion].answers.map((answer, index) => (
                                        <li key={index}>
                                            <label>
                                                <input
                                                    type="radio"
                                                    name={MBTIQuestion[currentQuestion].id}
                                                    value={answer.value}
                                                    checked={selectedOption === answer.value}
                                                    onChange={() => handleOptionSelect(answer.value)}
                                                />
                                                {answer.text}
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex items-center justify-center gap-4 pt-12">
                                <button
                                    disabled
                                    className={`inline-block rounded bg-green cursor-pointer px-6 pb-2 pt-2.5 font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-lightblue `}
                                >
                                    Quay lại
                                </button>
                                <button
                                    className="inline-block rounded bg-green px-6 pb-2 pt-2.5 font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-lightblue"
                                    onClick={handleNextQuestion}
                                >
                                    Tiếp theo
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                <div className="container mx-auto my-2 w-[300px] h-[200px] flex flex-col bg-white p-0 shadow-xl rounded-lg">
                    <div className="flex justify-center w-full bg-white rounded-lg item-center">
                        <div className="flex flex-col w-full gap-4 px-4 py-2">
                            <label htmlFor="">Vui lòng nhập email:</label>
                            <input
                                value={dataEmail}
                                onChange={handlechangeEmail}
                                type="text"
                                placeholder="email"
                                className="px-2 py-1 border rounded-lg"
                            />
                            <button
                                onClick={handleCheckEmailLog}
                                className="w-full py-2 text-white border bg-green rounded-3xl hover:opacity-95"
                            >
                                Tiếp tục
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <Footer2 />
        </>
    );
}

export default MBTIQuizApp;
