import Navbar from '../HomePage/header/Navbar';
import quizz1 from '../../assets/quizzIntro.png';
import quizzIntro1 from '../../assets/quizzIntro1.png';
import quizzIntro2 from '../../assets/quizzIntro2.jpg';
import arrowdown from '../../assets/arrowdown.png';
import { useNavigate } from 'react-router-dom';
import '../QuizzPersonality/QuizzPersonality.model.css';
import { Cursor } from 'react-bootstrap-icons';
import { useRef } from 'react';
const QuizzPersonality = () => {
    const ref = useRef(null);
    const handleClick = () => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };
    const navigate = useNavigate();
    const handleClickMBTI = () => {
        navigate('/mbti-intro');
    };
    return (
        <div>
            <Navbar />
            <div className="flex items-center justify-center space-x-12"></div>
            <div className="container">
                <div className="flex items-center justify-center pt-10">
                    <div className="md:pl-5 md:pr-5 relative md:flex md:justify-between md:mt-8 md:mb-8">
                        <div className="text-tahiti  text-2xl font-bold relative flex">
                            <img className="loopSearchIcon" src={quizzIntro1} alt="Quizz Intro1" />
                            <h3 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-red text-4xl font-bold">
                                CHỌN ĐÚNG NGHỀ
                            </h3>
                        </div>
                        <div className="relative md:pt-9 pt-0 flex justify-end">
                            <img src={quizz1} alt="Quizz 1" />
                            <h3
                                className="absolute top-1/2 left-14.125rem transform -translate-x-1/2 -translate-y-1/2 text-bermuda text-3xl font-bold"
                                style={{ top: 'calc(50% + 65px)' }}
                            >
                                THÀNH CÔNG SẼ ĐẾN
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="relative flex justify-center">
                    <div className="border rounded-md overflow-hidden md:border-[#d7d7d7] md:rounded-[12px] md:flex md:mb-8">
                        <img className="w-60 h-60 object-cover md:w-80 md:h-80" src={quizzIntro2} alt="quizzIntro2" />

                        <div className="p-8">
                            <p className="max-w-[500px] md:max-w-96">
                                TDTter cung cấp cho bạn các bài trắc nghiệm tính cách (MBTI) hoặc sở thích (Holland)
                                giúp bạn hiểu rõ về bản thân mình hơn, từ đó đưa ra cho bạn những định hướng về nghề
                                nghiệp phù hợp nhất
                            </p>
                            <div className="text-center">
                                <div className="flex justify-center pt-8">
                                    <img className="transform rotate-90 bg-none" src={arrowdown} alt="a"></img>
                                </div>
                                <div className="pt-8">
                                    <button
                                        onClick={handleClick}
                                        type="button"
                                        className="text-white bg-gradient-to-br from-red to-bubble-gum hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                                    >
                                        Khám phá thêm
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="justify-center mt-16">
                    <div className="line-with-words justify-center">
                        <span className="text-2xl font-bold text-blue">TRẮC NGHIỆM TÍNH CÁCH</span>
                    </div>
                </div>

                <div ref={ref} className="quizz_container grid grid-cols-2 md:grid-cols-2 gap-2 md:gap-12 ">
                    <a href="#">
                        <div className="styled_card h-full">
                            <div className="card_header">
                                <span>TRẮC NGHIỆM TÍNH CÁCH MBTI</span>
                            </div>
                            <div className="p-2  md:px-3 md:py-3 flex-grow flex-col flex md:text-[17px]">
                                <div className="content mb-2 flex-grow">
                                    <p>
                                        Sử dụng bộ câu hỏi đánh giá, giúp người trả lời định hướng bản thân rõ ràng dựa
                                        theo học thuyết MBTI (Myers-Briggs Type Indicator)
                                    </p>
                                    <p className="pt-6">Bộ câu hỏi: 74 câu trắc nghiệm</p>
                                    <p>Với kết quả là 4 cặp cá tính đối lập:</p>
                                    <div className="pt-5 pl-10 pb-5">
                                        <p> + Extraversion (hướng ngoại);</p>
                                        <p>+ Introversion (hướng nội);</p>
                                        <p>+ iNtuition (trực giác);</p>
                                        <p>+ Sensing (cảm giác);</p>
                                        <p>+ Thinking (lý trí);</p>
                                        <p>+ Feeling (cảm xúc);</p>
                                        <p>+ Judging (nguyên tắc);</p>
                                        <p>+ Perceiving (linh hoạt).</p>
                                    </div>
                                    <p>
                                        Với việc trả lời các câu hỏi trắc nghiệm, người trả lời sẽ nhận được 4 chữ đại
                                        diện cho đặc điểm tính cách của bản thân. Từ đó đưa ra gợi ý công việc phù hợp
                                        với tính cách đó.
                                    </p>
                                </div>
                                <div className="flex justify-center items-center pt-8">
                                    <button
                                        className="flex justify-center items-center w-64 h-12 border border-blue hover:bg-bluedark hover:text-white text-blue font-bold py-2 px-4 rounded-lg transition-all duration-300 cursor-pointer"
                                        onClick={handleClickMBTI}
                                    >
                                        <Cursor className="block align-middle mr-2" size={18} color="blue" />
                                        <span className="leading-5"> KHÁM PHÁ NGAY</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="#">
                        <div className="styled_card h-full">
                            <div className="card_header">
                                <span>TRẮC NGHIỆM SỞ THÍCH</span>
                            </div>
                            <div className="p-2  md:px-3 md:py-3 flex-grow flex-col flex md:text-[17px]">
                                <div className="content mb-2 flex-grow">
                                    <p>Được phát triển bởi nhà tâm lý học người Mỹ - John Holland.</p>
                                    <p className="pt-6">
                                        Sử dụng bộ 42 câu hỏi về sở thích để cho ra kết quả về 6 nhóm người:
                                    </p>
                                    <p>Với kết quả là 4 cặp cá tính đối lập:</p>
                                    <div className="pt-5 pl-10 pb-5">
                                        <p>+ Realistic - nhóm kỹ thuật;</p>
                                        <p>+ Investigate - nhóm nghiên cứu;</p>
                                        <p>+ iNtuition (trực giác);</p>
                                        <p>+ Artistic - nhóm nghệ thuật;</p>
                                        <p>+ Social - nhóm xã hội;</p>
                                        <p>+ Enterprising - nhóm quản lý;</p>
                                        <p>+ Conventional - nhóm nghiệp vụ.</p>
                                    </div>
                                    <p>
                                        Với việc trả lời các câu hỏi trắc nghiệm, người trả lời sẽ nhận được 4 chữ đại
                                        diện cho đặc điểm tính cách của bản thân. Từ đó đưa ra gợi ý công việc phù hợp
                                        với tính cách đó.
                                    </p>
                                </div>
                                <div className="styles_buttonBg__1QNBg">
                                    <button className="styles_btn__2iAnc undefined styles_lg__3X7rs rounded-md w-full">
                                        <p>Khám Phá Ngay</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default QuizzPersonality;
