import { useState } from 'react';
// import Navbar from '../../HomePage/header/Navbar';
// import { Footer } from '../../SignUp/RegisterForm';
import '../MBTIQuizz/MBTIQuizz.model.css';
import { MBTIQuestion } from '../../../data/MBTI/MBTIQuizz/MBTIQuizz';
import Navbar from '../../HomePage/header/Navbar';
import Footer2 from '../../Footer2/Footer2';
import { IconButton, Tooltip } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';
function MBTIQuizApp() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState('');
    const [answers, setAnswers] = useState([]);
    const [showResult, setShowResult] = useState(false);

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

        console.log('Kết quả của bài test:', result);
    };
    return (
        <>
            <Navbar />
            <div className="quiz-container mx-auto mt-32 drop-shadow-2xl  bg-white text-red-500 flex flex-col gap-20 rounded-lg p-10 md:w-3/4 lg:w-2/4">
                {showResult ? (
                    <div className="result-container">
                        <div className="flex justify-between">
                            <h2 className="pb-4 font-bold text-2xl">Kết quả</h2>
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
                            <span className="text-purple text-lg">Kết quả của bạn là: </span>
                            <span className="text-red font-bold text-xl">{calculateResult()}</span>
                        </p>
                        <div className="">
                            <h1>
                                <span className="font-bold text-xl text-p">Người giám hộ</span> - Theo đuổi chủ nghĩa
                                làm việc siêng năng, tận tâm và nỗ lực hết mình để đạt được thành quả trong công việc .{' '}
                            </h1>
                            <p>
                                {' '}
                                <span className="font-bold">Ngành học phù hợp:</span> Luật, Luật (Chất lượng cao),QTKD
                                (Chuyên ngành Quản trị Nhà hàng - Khách sạn), QTKD (Chuyên ngành Quản trị nguồn nhân
                                lực), Kinh doanh quốc tế (Chất lượng cao), Marketing (Chất lượng cao), QTKD (Chuyên
                                ngành Quản trị Nhà hàng - Khách sạn) (Chất lượng cao), QTKD (Chuyên ngành Quản trị nguồn
                                nhân lực) (Chất lượng cao), Kinh doanh quốc tế (Chương trình đại học bằng tiếng Anh),
                                Marketing (Chương trình đại học bằng tiếng Anh), QTKD (Chuyên ngành Quản trị Nhà hàng -
                                Khách sạn) (Chương trình đại học bằng tiếng Anh).
                            </p>
                        </div>

                        <div className="flex justify-center items-center pt-8">
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

                        <h1 className="pb-2 font-bold text-red text-4xl">Bộ câu hỏi MBTI</h1>
                        <hr className="pb-4" />
                        <h2 className="py-2 font-bold text-xl text-purple">Câu hỏi {currentQuestion + 1}</h2>
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
                        <div className="flex justify-center items-center pt-12">
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
            <Footer2 />
        </>
    );
}

export default MBTIQuizApp;
