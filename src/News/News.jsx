import { Button } from '../components/Button';
import { Heading } from '../components/Heading';
import Navbar from '../components/HomePage/header/Navbar';
import { Img } from '../components/Img';
import { Text } from '../components/Text';
import { FaArrowRight } from 'react-icons/fa';
import news1 from '../assets/news/news1.png';
import news2 from '../assets/news/news2.png';
import news3 from '../assets/news/news4.png';
import ts1 from '../assets/news/ts1.jpeg';
import t2s from '../assets/news/ts2.jpg';
import ts3 from '../assets/news/ts3.jpg';
import '../../src/News/News.model.css';
import Footer2 from '../components/Footer2/Footer2';
import { Link } from 'react-router-dom';
const News = () => {
    return (
        <div className="news-container">
            <Navbar />
            <div className="flex flex-row justify-center w-full px-14 py-[95px] bg-gray-50">
                <div className="flex flex-row justify-center w-full mx-[35px] max-w-[1140px]">
                    <div className="flex flex-row justify-center w-full">
                        <div className="flex flex-row  w-full gap-[30px]">
                            <div className="flex flex-col items-center justify-start w-[32%] mb-[223px] bg-white-A700 shadow-xs cursor-pointer rounded shadow-md translate-transform transform hover:scale-105 border-d hover:shadow-xs">
                                <div className="flex flex-col items-end justify-start w-full gap-4">
                                    <Img
                                        src={news1}
                                        alt="news1"
                                        className="w-full rounded-tr rounded-tl object-cover"
                                    />
                                    <div className="flex flex-row justify-start items-start w-[94%]  gap-[18px]">
                                        <div className="flex flex-col items-start justify-start w-[78%] mb-[19px] gap-[18px]">
                                            <div className="flex flex-row justify-start">
                                                <button shape="round" className="w-full uppercase font-medium"></button>
                                            </div>
                                            <Heading as="h1">
                                                Ngày hội việc làm Trường đại học Tôn Đức Thắng lần 1 năm 2024
                                            </Heading>
                                            <div className="flex flex-row justify-start items-center gap-2">
                                                <Text as="p">
                                                    Thao trường quốc phòng, nội bộ số 7, Trường Đại học Tôn Đức Thắng
                                                </Text>
                                                <Text as="p">7:00-16:00</Text>
                                                <Text as="p">10 June, 2024 </Text>
                                            </div>
                                        </div>
                                        <Button
                                            color="blue_A700"
                                            size="md"
                                            shape="square"
                                            className="w-[56px] mt-[100px]"
                                        >
                                            <FaArrowRight />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-start w-[32%] my-[111px] bg-white-A700 shadow-xs cursor-pointer shadow-md translate-transform transform hover:scale-105 rounded hover:shadow-xs">
                                <div className="flex flex-col items-end justify-start w-full gap-4">
                                    <Img
                                        src={news3}
                                        alt="bitmap_one"
                                        className="w-full rounded-tr rounded-tl object-cover"
                                    />
                                    <div className="flex flex-row justify-start items-start w-[94%] gap-4">
                                        <div className="flex flex-col items-start justify-start w-[79%] mb-[19px] gap-[18px]">
                                            <div className="flex flex-row justify-start w-[75%] gap-3">
                                                <div className="flex flex-row justify-start w-[47%]">
                                                    <Button
                                                        shape="round"
                                                        className="w-full uppercase font-medium text-white"
                                                    >
                                                        Hot!!!
                                                    </Button>
                                                </div>
                                                <div className="flex flex-row justify-start w-[47%]">
                                                    <Button
                                                        color="blue_A200"
                                                        shape="round"
                                                        className="w-full uppercase font-medium text-white"
                                                    >
                                                        Farvorite
                                                    </Button>
                                                </div>
                                            </div>
                                            <Heading as="h2">
                                                How Snapchat and Netflix Break UX Design Principles
                                            </Heading>
                                            <div className="flex flex-row justify-start items-center gap-2">
                                                <Text as="p">Hội thao sinh viên Trường Đại học Tôn Đức Thắng 2024</Text>
                                                <Img src="images/img_.svg" alt="image" className="h-[4px] w-[4px]" />
                                                <Text as="p">| Thứ 7 09/03/2024</Text>
                                            </div>
                                        </div>
                                        <Button
                                            color="blue_A700"
                                            size="md"
                                            shape="square"
                                            className="w-[56px] mt-[100px]"
                                        >
                                            <FaArrowRight />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-start justify-start w-[32%] mt-[9px] gap-[193px] cursor-pointer hover:shadow-xs">
                                <div className="flex flex-row justify-start items-start gap-3.5 hover:text-red">
                                    <Img src={news2} alt="line_one" className="h-px mt-2" />
                                    <Heading size="xs" as="h3">
                                        Xem thêm các hoạt động
                                    </Heading>
                                    <FaArrowRight />
                                </div>
                                <div className="flex flex-col items-center justify-start w-full bg-white-A700 shadow-md translate-transform transform hover:scale-105 rounded">
                                    <div className="flex flex-col items-end justify-start w-full gap-4">
                                        <Img
                                            src={news2}
                                            alt="bitmap_one"
                                            className="w-full rounded-tr rounded-tl object-cover"
                                        />
                                        <div className="flex flex-row justify-start items-start w-[94%] gap-[18px]">
                                            <div className="flex flex-col items-start justify-start w-[78%] mb-[19px] gap-[18px]">
                                                <div className="flex flex-row justify-start">
                                                    <Button shape="round" className="w-full uppercase font-medium">
                                                        WEB DESIGN
                                                    </Button>
                                                </div>
                                                <Heading as="h4">How to Design Your Site to Make it Super-fast</Heading>
                                                <div className="flex flex-row justify-start items-center gap-2">
                                                    <Text as="p">
                                                        {' '}
                                                        Ngày hội tư vấn tuyển sinh đại học năm 2024 trường Đại học Tôn
                                                        Đức Thắng
                                                    </Text>
                                                    <Img
                                                        src="images/img_.svg"
                                                        alt="image"
                                                        className="h-[4px] w-[4px]"
                                                    />
                                                    <Text as="p">15 March, 2022</Text>
                                                </div>
                                            </div>
                                            <Button
                                                color="blue_A700"
                                                size="md"
                                                shape="square"
                                                className="w-[56px] mt-[100px]"
                                            >
                                                <FaArrowRight />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="new-container-body">
                <div className="new-title bg-bermuda">
                    <p> Tin tuyển sinh</p>
                </div>
                <ul className="new-sup-title list-category-sub">
                    <li className="list-category-sub-item">ĐGLN HCM</li>
                    <li className="">|</li>
                    <li className="list-category-sub-item">ĐH QGHN</li>
                    <li className="">|</li>
                    <li className="list-category-sub-item">ĐH BKHN</li>
                </ul>
                <div className="">
                    <div className="first-post">
                        <div className="thumb">
                            <img src={ts1} alt="tuyensinh1"></img>
                        </div>
                        <div className="info">
                            <h3 className="title-post">
                                <Link to="/tin-tuc-tuyen-sinh">
                                    <a>Tốt nghiệp THPT 2025: Bộ GD&ĐT chính thức công bố quy chế thi</a>
                                </Link>
                            </h3>
                            <div className="meta_created">22/02/2024 17:41</div>
                        </div>
                    </div>

                    <div className="laster-post">
                        <a
                            href="#"
                            title="Tuyển sinh 2024: Đại học Bách khoa Hà Nội tăng chỉ tiêu xét tuyển bằng điểm Đánh giá tư duy"
                        >
                            Thi Tốt nghiệp THPT 2024: Thí sinh có thể không được thi riêng nếu trượt tốt nghiệp
                        </a>
                    </div>
                    <div className="laster-post">
                        <a
                            href="#"
                            title="Tuyển sinh 2024: Đại học Bách khoa Hà Nội tăng chỉ tiêu xét tuyển bằng điểm Đánh giá tư duy"
                        >
                            Nhận định đề thi minh hoạ kỳ thi tốt nghiệp THPT 2025 môn Địa lý
                        </a>
                    </div>
                    <div className="laster-post">
                        <a
                            href="#"
                            title="Tuyển sinh 2024: Đại học Bách khoa Hà Nội tăng chỉ tiêu xét tuyển bằng điểm Đánh giá tư duy"
                        >
                            Tuyển sinh 2024: ĐH Ngoại thương (FTU) dự kiến mở ngành Khoa học máy tính
                        </a>
                    </div>
                    <div className="laster-post">
                        <a
                            href="#"
                            title="Tuyển sinh 2024: Đại học Bách khoa Hà Nội tăng chỉ tiêu xét tuyển bằng điểm Đánh giá tư duy"
                        >
                            Nhận định đề thi minh hoạ kỳ thi tốt nghiệp THPT 2025 môn Giáo dục kinh tế & Pháp luật
                        </a>
                    </div>
                    <div className="laster-post">
                        <a
                            href="#"
                            title="Tuyển sinh 2024: Đại học Bách khoa Hà Nội tăng chỉ tiêu xét tuyển bằng điểm Đánh giá tư duy"
                        >
                            Nhận định đề thi minh hoạ kỳ thi tốt nghiệp THPT 2025 môn Lịch Sử
                        </a>
                    </div>
                </div>
            </div>
            <div className="new-container-body">
                <div className="new-title bg-bermuda">
                    <p> TIN TỐT NGHIỆP THPT</p>
                </div>
                <ul className="new-sup-title list-category-sub">
                    <li className="list-category-sub-item">Đáp án</li>
                    <li className="">|</li>
                    <li className="list-category-sub-item">Nhận định</li>
                    <li className="">|</li>
                    <li className="list-category-sub-item">Tin tức </li>
                </ul>
                <div className="">
                    <div className="first-post">
                        <div className="thumb">
                            <img className="thumb-img" src={t2s} alt="tuyensinh1"></img>
                        </div>
                        <div className="info">
                            <h3 className="title-post">
                                <a>
                                    Điểm sàn Đánh giá tư duy năm 2024 có thể tăng cao – Thí sinh hãy lưu ý những điều
                                    này!!
                                </a>
                            </h3>
                            <div className="meta_created">22/02/2024 17:41</div>
                        </div>
                    </div>

                    <div className="laster-post">
                        <a
                            href="#"
                            title="Tuyển sinh 2024: Đại học Bách khoa Hà Nội tăng chỉ tiêu xét tuyển bằng điểm Đánh giá tư duy"
                        >
                            Tuyển sinh 2024: Đại học Bách khoa Hà Nội tăng chỉ tiêu xét tuyển bằng điểm Đánh giá tư duy
                        </a>
                    </div>
                    <div className="laster-post">
                        <a
                            href="#"
                            title="Tuyển sinh 2024: Đại học Bách khoa Hà Nội tăng chỉ tiêu xét tuyển bằng điểm Đánh giá tư duy"
                        >
                            Tuyển sinh 2024: Đại Học Dược Hà Nội (HUP) giảm chỉ tiêu tuyển sinh
                        </a>
                    </div>
                    <div className="laster-post">
                        <a
                            href="#"
                            title="Tuyển sinh 2024: Đại học Bách khoa Hà Nội tăng chỉ tiêu xét tuyển bằng điểm Đánh giá tư duy"
                        >
                            Tuyển sinh 2024: ĐH Ngoại thương (FTU) dự kiến mở ngành Khoa học máy tính
                        </a>
                    </div>
                    <div className="laster-post">
                        <a
                            href="#"
                            title="Tuyển sinh 2024: Đại học Bách khoa Hà Nội tăng chỉ tiêu xét tuyển bằng điểm Đánh giá tư duy"
                        >
                            Tuyển sinh 2024: Đại Học Dược Hà Nội (HUP) giảm chỉ tiêu tuyển sinh
                        </a>
                    </div>
                </div>
            </div>
            <div className="new-container-body">
                <div className="new-title bg-bermuda">
                    <p>GÓC TƯ VẤN</p>
                </div>
                <ul className="new-sup-title list-category-sub">
                    <li className="list-category-sub-item">Holland</li>
                    <li className="">|</li>
                    <li className="list-category-sub-item">MBTI</li>
                    <li className="">|</li>
                    <li className="list-category-sub-item">Chọn nghề </li> <li className="">|</li>
                    <li className="list-category-sub-item">Học tập </li>
                </ul>
                <div className="">
                    <div className="first-post">
                        <div className="thumb">
                            <img className="thumb-img" src={ts3} alt="tuyensinh1"></img>
                        </div>
                        <div className="info">
                            <h3 className="title-post">
                                <a>
                                    Tốt nghiệp THPT 2025: Xu hướng xét kết quả của kỳ thi riêng có độ lớn và uy tín cao
                                </a>
                            </h3>
                            <div className="meta_created">08/12/2023 11:35</div>
                        </div>
                    </div>

                    <div className="laster-post">
                        <a
                            href="#"
                            title="Tuyển sinh 2024: Đại học Bách khoa Hà Nội tăng chỉ tiêu xét tuyển bằng điểm Đánh giá tư duy"
                        >
                            Sự kiện “GỠ RỐI KỲ THI ĐÁNH GIÁ TƯ DUY 2024” cùng chuyên gia luyện thi và thủ khoa ĐGTD 2023
                        </a>
                    </div>
                    <div className="laster-post">
                        <a
                            href="#"
                            title="Tuyển sinh 2024: Đại học Bách khoa Hà Nội tăng chỉ tiêu xét tuyển bằng điểm Đánh giá tư duy"
                        >
                            2K6 đừng bỏ lỡ kỳ thi này nếu muốn đỗ Đại học sớm
                        </a>
                    </div>
                    <div className="laster-post">
                        <a
                            href="#"
                            title="Tuyển sinh 2024: Đại học Bách khoa Hà Nội tăng chỉ tiêu xét tuyển bằng điểm Đánh giá tư duy"
                        >
                            Review ngành Quản trị đô thị thông minh và bền vững: Ngành học đáp ứng nhu cầu tuyển dụng
                            của xã hội
                        </a>
                    </div>
                </div>
            </div>
            <Footer2 />
        </div>
    );
};

export default News;
