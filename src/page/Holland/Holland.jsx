import { Link } from 'react-router-dom';
import Footer2 from '../../components/Footer2/Footer2';
import Navbar from '../../components/HomePage/header/Navbar';
const Holland = () => {
    return (
        <div>
            <Navbar />
            <div className="holland-conten">
                <div style={{ marginTop: '10vh' }} className="shadow-lg pt-20 pb-20 px-20">
                    <h1 className="font-bold text-2xl text-center">TRẮC NGHIỆM SỞ THÍCH NGÀNH NGHỀ MẬT MÃ HOLLAND</h1>
                    <h1 className="text-center text-red font-bold text-4xl pb-12 pt-2">MẬT MÃ HOLLAND</h1>
                    <div className="px-44 ">
                        <p>
                            <span>
                                “Làm những gì bạn yêu thích và bạn sẽ không bao giờ phải làm việc trong cuộc đời của
                                mình” - đó là bản chất của Trắc nghiệm Holland.
                            </span>
                        </p>
                        <p>
                            Lý thuyết lựa chọn nghề nghiệp Holland xuất hiện lần đầu tiên vào năm 1959. Đây là công
                            trình của Tiến sỹ Tâm lý người Mỹ John L. Holland (1919-2008). Theo lý thuyết, được chọn
                            công việc hoặc môi trường có chương trình giáo dục phù hợp, hoặc tương đồng với sở thích và
                            tính cách của bạn, rất có thể giúp bạn cảm thấy hài lòng trong công việc và thành công trong
                            sự nghiệp. Việc này có nghĩa là nếu bạn có thể làm việc mình thích, và còn được làm việc với
                            những người cùng chí hướng, thì đó là môi trường lý tưởng để bạn trau dồi đam mê và phát
                            triển tài năng của bạn.
                        </p>
                        <p>
                            Trắc nghiệm Holland có thể giúp bạn không chỉ chú ý hơn đến các đặc điểm tính cách và môi
                            trường làm việc tương ứng mà còn có thể liệt kê một loạt các nghề nghiệp mà trước đây bạn có
                            thể chưa nghĩ đến. Hơn nữa, trắc nghiệm này cũng có thể giúp bạn xác định một số đặc điểm
                            phẩm chất còn tiềm ẩn mà bạn chưa khám phá ra. Lý thuyết lựa chọn nghề nghiệp Holland chia
                            con người ra 6 loại tính cách-viết tắt là RIASEC, tương ứng với 6 loại ngành nghề phù hợp:
                        </p>
                    </div>
                    <div className="flex items-center justify-center">
                        <img src="https://huongnghiepaau.edu.vn/wp-content/uploads/2022/02/trac-nghiem-holland-riasec.png"></img>
                    </div>
                    <div className="pl-44">
                        <h1 className=" font-bold text-2xl text-red">Trắc Nghiệm Nghề Nghiệp Holland</h1>
                        <div className="">
                            <ul className="flex pt-8">
                                <li>
                                    <img src="https://huongnghiepaau.edu.vn/wp-content/uploads/2022/07/nhom-nghiep-vu-228x250.jpg"></img>
                                </li>
                                <li>
                                    <img src="https://huongnghiepaau.edu.vn/wp-content/uploads/2022/07/nhom-ky-thuat-228x250.jpg"></img>
                                </li>
                                <li>
                                    <img src="https://huongnghiepaau.edu.vn/wp-content/uploads/2022/07/nhom-nghien-cuu-228x250.jpg"></img>
                                </li>
                                <li>
                                    <img src="https://huongnghiepaau.edu.vn/wp-content/uploads/2022/07/nhom-nghe-thuat-228x250.jpg"></img>
                                </li>
                                <li>
                                    <img src="https://huongnghiepaau.edu.vn/wp-content/uploads/2022/07/nhom-xa-hoi-228x250.jpg"></img>
                                </li>
                                <li>
                                    <img src="https://huongnghiepaau.edu.vn/wp-content/uploads/2022/07/nhom-quan-ly-228x250.jpg"></img>
                                </li>
                            </ul>
                        </div>
                        <div className=" pt-12 grid grid-cols-2 gap-4">
                            <div>
                                <h1 className="font-bold text-xl pb-4">Nghề Nghiệp Phù Hợp Nhóm R – Kỹ Thuật: </h1>
                                <ul>
                                    <li className="list-disc">Thợ máy của máy bay</li>
                                    <li className="list-disc">Kỹ sư</li>
                                    <li className="list-disc">Thợ sơn</li>
                                    <li className="list-disc">Kỹ sư ô tô</li>
                                    <li className="list-disc">Thợ điện</li>
                                    <li className="list-disc">Thợ làm kính</li>
                                    <li className="list-disc">Y tá điều dưỡng</li>
                                </ul>
                            </div>
                            <div>
                                <h1 className="font-bold text-xl pb-4">Nghề Nghiệp Phù Hợp Nhóm I - Nghiên Cứu:</h1>
                                <ul>
                                    <li className="list-disc">Nhà khảo cổ học</li>
                                    <li className="list-disc">Nhà hóa học</li>
                                    <li className="list-disc">Nhà vật lý học</li>
                                    <li className="list-disc">Nhà địa lý học</li>
                                    <li className="list-disc">Nhà sinh vật học</li>
                                    <li className="list-disc">Nha sĩ</li>
                                    <li className="list-disc">Dược sĩ</li>
                                    <li className="list-disc">Kỹ sư phần mềm</li>
                                </ul>
                            </div>
                            <div>
                                <h1 className="font-bold text-xl pb-4">Nghề Nghiệp Phù Hợp Nhóm A – Nghệ Thuật: </h1>
                                <ul>
                                    <li className="list-disc">Diễn viên</li>
                                    <li className="list-disc">Giáo viên dạy kịch</li>
                                    <li className="list-disc">Phóng viên</li>
                                    <li className="list-disc">Thợ chụp hình</li>
                                    <li className="list-disc">Giám đốc quảng cáo</li>
                                    <li className="list-disc">Thiết kế đồ họa</li>
                                    <li className="list-disc">Kiến trúc sư</li>
                                </ul>
                            </div>
                            <div>
                                <h1 className="font-bold text-xl pb-4">Nghề Nghiệp Phù Hợp Nhóm S - Xã Hội: </h1>
                                <ul>
                                    <li className="list-disc">Giáo sĩ</li>
                                    <li className="list-disc">Bộ trưởng</li>
                                    <li className="list-disc">Thị trưởng</li>
                                    <li className="list-disc">Giáo sư</li>
                                    <li className="list-disc">Giáo viên THPT</li>
                                    <li className="list-disc">Nhà hoạt động xã hội</li>
                                    <li className="list-disc">Thủ thư</li>
                                    <li className="list-disc">Nhà trị liệu</li>
                                    <li className="list-disc">Tư vấn học đường</li>
                                </ul>
                            </div>
                            <div>
                                <h1 className="font-bold text-xl pb-4">Nghề Nghiệp Phù Hợp Nhóm E Quản Lý: </h1>
                                <ul>
                                    <li className="list-disc">Đại diện bán ô tô</li>
                                    <li className="list-disc">Giám đốc tín dụng</li>
                                    <li className="list-disc">Nhân viên bất động sản</li>
                                    <li className="list-disc">Nhân viên bán bảo hiểm</li>
                                    <li className="list-disc">Chủ doanh nghiệp</li>
                                    <li className="list-disc">Quản lí khách sạn</li>
                                    <li className="list-disc">Người vận động hành lang</li>
                                    <li className="list-disc">Người mua bán chứng khoán</li>
                                </ul>
                            </div>
                            <div>
                                <h1 className="font-bold text-xl pb-4">Nghề Nghiệp Phù Hợp Nhóm C – Nghiệp Vụ:</h1>
                                <ul>
                                    <li className="list-disc">Kế toán</li>
                                    <li className="list-disc">Kiểm toán viên</li>
                                    <li className="list-disc">Thanh tra xây dựng</li>
                                    <li className="list-disc">Người vận hành máy tính</li>
                                    <li className="list-disc">Thủ thư</li>
                                    <li className="list-disc">Thu ngân ở ngân hàng</li>
                                    <li className="list-disc">Thư ký pháp lý</li>
                                    <li className="list-disc">Giáo viên</li>
                                </ul>
                            </div>
                        </div>
                        <div className="pt-20">
                            <h1 className="font-bold text-2xl text-lightblue">Trắc Nghiệm Holland Miễn Phí</h1>
                            <p className="pt-4">
                                Công cụ <span className="font-bold">trắc nghiệm Holland miễn phí</span> giúp bạn tìm ra
                                ba kiểu tính cách của bạn tương ứng với 3 mật mã Holland (ví dụ: RCE hoặc ECR ). Sau đó
                                dùng mã này kết nối với những nghề nghiệp cụ thể. Bấm vào nút Bắt đầu để tìm mã Holland
                                – RIASEC của mình nhé!
                            </p>
                        </div>
                        <div className="flex items-center justify-center">
                            <Link to="/HollandQuizz">
                                <button className="px-8 py-3 rounded-md bg-[#20B486]">Làm bài test</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer2 />
        </div>
    );
};

export default Holland;
