import Navbar from '../components/HomePage/header/Navbar';
import blogImg1 from '../assets/CalScore/calculate-score.jpg';
import step1 from '../assets/CalScore/step-calculate.jpg';
import step2 from '../assets/CalScore/step-calculate2.jpg';
import '../CalculateScore/CalScore.model.css';
import CalculateForm from './CalculateForm';
import Footer2 from '../components/Footer2/Footer2';
const CalculateScore = () => {
    return (
        <div>
            <Navbar />
            <div className="category-calculate-score">
                <div className="uk-container uk-container-center">
                    <h1 className="blogtitle entry-title">
                        <span>Công cụ tính điểm tốt nghiệp THPT 2024 chính xác nhất</span>
                    </h1>
                    <div className="blogcontent">
                        <p>
                            <strong>
                                Không phải ai cũng nắm được về công thức tính điểm tốt nghiệp THPT, hoặc đã biết nhưng
                                vẫn gặp khó khăn trong việc tính toán thì Công cụ tính điểm xét tốt nghiệp THPT 2024
                                dưới đây sẽ giúp các em thực hiện một cách dễ dàng hơn để biết được mình trượt, hay đã
                                đỗ tốt nghiệp hay chưa.
                            </strong>
                        </p>
                        <div className="blog-img">
                            <img src={blogImg1} alt="blo image"></img>
                        </div>
                    </div>
                    <div className="tcontent-container">
                        <p className="tcontent-title">Mục lục</p>
                        <ul className="tcontent-list">
                            <li>1.Công cụ tính điểm</li>
                            <li>2.Cách sử dụng công cụ tính nhanh điểm tốt nghiệp THPT</li>
                            <li>3.Công cụ tính điểm xét tốt nghiệp THPT 2024</li>
                        </ul>
                    </div>
                    <h2 className="step-use-calculate">
                        <span id="1_Cong_cu_tinh_diem">1. Công cụ tính điểm</span>
                    </h2>
                    <center>Công cụ tính điểm xét tốt nghiệp THPT 2024</center>
                    <CalculateForm />
                    <h2 className="step-use-calculate">
                        <span id="use-calculate">2.&nbsp;Cách sử dụng công cụ tính nhanh điểm tốt nghiệp THPT</span>
                    </h2>
                    <p className="step-calculate-thpt">
                        <strong>Bước 1:</strong> Tra cứu điểm thi tốt nghiệp THPT&nbsp;
                        <a
                            href="https://thptquocgia.edu.vn/diemthi/#google_vignette"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-red font-bold"
                        >
                            tra cứu
                        </a>
                    </p>
                    <p className="step-calculate-thpt">
                        <strong>Bước 2:</strong>&nbsp;Nhập điểm các môn vào công cụ tính điểm bên trên.
                    </p>
                    <p>
                        Tại mục “<strong>Đối tượng học sinh</strong>“, thí sinh chọn “<strong>Hệ THPT</strong>” nếu theo
                        học hệ THPT thường, thí sinh chọn “<strong>Hệ GDTX</strong>” nếu theo học hệ Giáo dục thường
                        xuyên .
                    </p>
                    <p className="step-calculate-thpt">
                        <strong>Bước 3:</strong> Thí sinh bấm “<strong>Tính điểm xét tốt nghiệp</strong>” sau khi hoàn
                        tất nhập điểm vào tất cả các ô.
                    </p>
                    <h2 className="step-use-calculate">
                        <span id="3_Cong_thuc_tinh_diem">3. Công thức tính điểm</span>
                    </h2>
                    <p>
                        Ngoài ra, thí sinh có thể tự tính điểm tốt nghiệp THPT của mình theo phương thức thủ công bằng
                        công thức dưới đây của Bộ Giáo dục và Đào tạo:
                    </p>
                    <img className="receipt-calScore" src={step1} alt="receipt-calScore"></img>
                    <div className="">
                        <p className="title-detail">
                            <strong>Trong đó:&nbsp;</strong>
                        </p>
                        <p>-Tổng điểm 4 bài thi bao gồm: Toán + Văn + Anh + Điểm trung bình của bài thi tổ hợp;</p>
                        <p>-Điểm trung bình cả năm lớp 12: Được tính bằng công thức (ĐTB kỳ 1 + ĐTB kỳ 2×2)/3;</p>
                        <p>-Điểm ưu tiên gồm: Điểm ưu tiên đối tượng, ưu tiên khu vực. Tìm hiểu thêm</p>
                        <p>
                            -Điểm khuyến khích là điểm dành cho những thí sinh tham gia các cuộc thi của Bộ Giáo dục tổ
                            chức (phân theo diện tốt nghiệp) và đạt được thành tích nổi bật.
                        </p>
                        <img className="receipt-calScore" src={step2} alt="step2"></img>
                        <p className="title-detail">
                            <strong>Trong đó:&nbsp;</strong>
                        </p>
                        <p>– Tổng điểm 3 bài thi: Toán + Văn +&nbsp;Điểm trung bình của bài thi tổ hợp;</p>
                        <p>– Các giá trị khác tương tự với công thức dành cho học sinh hệ Giáo dục THPT.</p>
                        <p>
                            <em>(Theo Bộ Giáo dục và Đào tạo)</em>
                        </p>
                        <p>aaaaaaaa</p>
                    </div>
                </div>
                <Footer2 />
            </div>
        </div>
    );
};

export default CalculateScore;
