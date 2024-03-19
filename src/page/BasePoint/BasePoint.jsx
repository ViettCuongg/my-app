import Navbar from '../../components/HomePage/header/Navbar';
// import TableScore from './TableScore';
import dc1 from '../../assets/dc1.jpg';
import dc2 from '../../assets/dc2.jpg';
import dc3 from '../../assets/dc3.jpg';
import Footer2 from '../../components/Footer2/Footer2';
const BasePoint = () => {
    return (
        <div>
            <Navbar />
            <div className="container px-0 py-0 mx-auto block">
                <div className="post-content">
                    <div className="title-container">
                        <h1 className="my-2 leading-6 text-[24px] font-bold">
                            Thông báo điểm trúng tuyển đại học và thủ tục nhập học năm 2023
                        </h1>
                    </div>
                    <div className="field-content text-center pt-4 mt-6 ">
                        <h3 className="">
                            <strong className="font-bold text-[26px]">THÔNG BÁO</strong>
                        </h3>
                        <h4 className="text-center text-[18px] pt-4 ">
                            <strong>Điểm trúng tuyển đại học và thủ tục nhập học năm 2023</strong>{' '}
                        </h4>
                    </div>
                    <div className="mx-auto block">
                        <div className="pt-4">
                            <p className="py-1">
                                Căn cứ Thông tư số 08/2022/TT-BGDĐT ngày 06/6/2022 của Bộ trưởng Bộ Giáo dục và Đào tạo
                                ban hành Quy chế tuyển sinh đại học, tuyển sinh cao đẳng ngành Giáo dục Mầm non;
                            </p>
                            <p className="py-1">
                                Căn cứ Đề án tuyển sinh đại học năm 2023 của Trường Đại học Tôn Đức Thắng;
                            </p>
                            <p className="py-1">
                                Hội đồng tuyển sinh Trường Đại học Tôn Đức Thắng (TDTU) thông báo kết quả điểm trúng
                                tuyển năm 2023 các ngành trình độ đại học chính quy như sau:
                            </p>
                            <p className="py-2">
                                <strong>1. Điểm trúng tuyển</strong>
                            </p>
                            <p className="py-1">
                                Phương thức xét tuyển theo kết quả học tập THPT - Đợt 1 (<strong>PT1-Đ1</strong>) và ưu
                                tiên xét tuyển theo quy định của TDTU (<strong>PT3</strong>): Điểm trúng tuyển theo
                                thông báo{' '}
                                <strong>
                                    Kết quả trúng tuyển có điều kiện các ngành trình độ đại học chính quy
                                    2023&nbsp;Phương thức xét tuyển theo kết quả học tập THPT (PT1) – Đợt 1; Phương thức
                                    ưu tiên xét tuyển theo quy định của TDTU (PT3) ngày
                                </strong>{' '}
                                08/7/2023 của Nhà trường.
                            </p>
                            <p className="py-1">
                                Phương thức xét tuyển theo kết quả học tập THPT – Đợt 2 <strong>(PT1-Đ2)</strong>: Điểm
                                xét tuyển được thực hiện theo đúng đề án tuyển sinh đại học năm 2023, thang điểm 40 và
                                được làm tròn đến 02 chữ số thập phân (đã bao gồm điểm ưu tiên khu vực, đối tượng, hệ số
                                trường THPT, điểm ưu tiên thành tích học sinh giỏi).
                            </p>
                            <p className="py-1">
                                Phương thức xét tuyển theo điểm thi THPT năm 2023 <strong>(PT2)</strong>: Điểm xét tuyển
                                được thực hiện theo đúng đề án tuyển sinh đại học năm 2023, là tổng điểm của 3 môn theo
                                tổ hợp (có nhân hệ số môn theo tổ hợp, ngành xét tuyển theo thang điểm 40), cộng với
                                điểm ưu tiên khu vực, đối tượng theo thang điểm 40 (nếu có), được làm tròn đến 2 chữ số
                                thập phân theo quy định của Bộ GD&amp;ĐT.
                            </p>
                            <p className="py-1">
                                Phương thức xét tuyển theo điểm thi đánh giá năng lực năm 2023 của Đại học Quốc gia
                                TP.HCM <strong>(PT4)</strong>: Điểm xét tuyển được thực hiện theo đúng đề án tuyển sinh
                                đại học năm 2023 theo thang điểm 1200 (đã bao gồm điểm ưu tiên khu vực, đối tượng theo
                                thang điểm 1200).
                            </p>
                            <p className="py-1">Bảng điểm trúng tuyển theo các phương thức như sau:</p>
                        </div>
                    </div>

                    {/* <TableScore /> */}
                    <div className="pt-24">
                        <div className="w-[700px] mx-auto">
                            <img className="w-[800px]" src={dc1} alt="dc1"></img>
                            <img className="w-[800px]" src={dc2} alt="dc2"></img>
                            <img className="w-[800px]" src={dc3} alt="dc3"></img>
                        </div>
                    </div>

                    <div className="pt-16">
                        <p>
                            Năm 2023, trường Đại học Tôn Đức Thắng tuyển 6.600 sinh viên. Trường sử dụng 4 phương thức
                            tuyển sinh gồm: Xét học bạ; Xét điểm thi tốt nghiệp THPT 2023; Xét thẳng, ưu tiên xét theo
                            quy định của nhà trường; Xét điểm thi đánh giá năng lực 2023 của Đại học Quốc gia TP HCM.
                            Học phí chương trình chuẩn khóa 2023 dao động 24,6-45,6 triệu đồng mỗi năm, tùy ngành. Riêng
                            ngành Dược, học phí trung bình 55,2 triệu đồng một năm.
                        </p>
                    </div>
                    <Footer2 />
                </div>
            </div>
        </div>
    );
};

export default BasePoint;
