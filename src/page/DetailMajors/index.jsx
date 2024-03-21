import { Link } from 'react-router-dom';
import Footer2 from '../../components/Footer2/Footer2';
import Navbar from '../../components/HomePage/header/Navbar';

import css from '../DetailMajors/DetailMajors.module.scss';

export default function DetailMajors() {
    return (
        <>
            <Navbar />
            <div className="container px-0 py-0">
                <div className={css.banner}>
                    <div className="flex flex-col text-center mb-2 z-10">
                        <h1 className="text-3xl text-white font-semibold cursor-pointer">Ngành kĩ thuật phần mềm </h1>
                        <div className="text-xl text-white font-normal mt-3">
                            <Link className="hover:underline" to={'/Homepage'}>
                                Trang Chủ
                            </Link>{' '}
                            &gt; <span className="hover:underline">Công nghệ thông tin</span>
                        </div>
                    </div>
                </div>
                <div className="pt-12">
                    <div>
                        <h1 className="font-bold text-xl">1. Giới thiệu</h1>
                        <p className="pt-4">
                            Chúng ta không thể sống trong một thế giới hiện đại mà không cần dùng đến phần mềm. Hầu hết
                            các thiết bị điện tử hiện đại ngày nay đều được điều khiển bằng phần mềm. Nền sản xuất và
                            phân phối công nghiệp; dịch vụ tài chính ngân hàng, chứng khoán, bất động sản, … đều ứng
                            dụng phần mềm máy tính để xử lý hầu hết các công việc. Đặc biệt, trong lĩnh vực giải trí như
                            trò chơi máy tính, điện ảnh và truyền hình đều sử dụng các phần mềm chuyên dụng để xử lý các
                            công việc phức tạp. Từ đó cho thấy rằng phần mềm rất cần thiết cho hầu hết các hoạt động của
                            đời sống kinh tế và xã hội. Ngành Kỹ thuật phần mềm đào tạo những kiến thức liên quan đến
                            quy trình phát triển phần mềm một cách chuyên nghiệp nhằm tạo ra sản phẩm phần mềm đạt chất
                            lượng cao, đáp ứng các nhu cầu nghiệp vụ cụ thể trong nền sản xuất của xã hội. Sinh viên học
                            ngành này được trang bị các kiến thức chuyên sâu về công nghiệp phần mềm, bao gồm: quy trình
                            phát triển phần mềm, kỹ năng vận dụng các công cụ phần mềm vào việc hỗ trợ phát triển các
                            phần mềm khác. Sinh viên cũng được trang bị các kiến thức cần thiết liên quan đến các pha
                            thực hiện trong một dự án phần mềm như: thu thập yêu cầu, phân tích, thiết kế, lập trình,
                            kiểm thử, vận hành và bảo trì phần mềm. Sinh viên sau khi tốt nghiệp sẽ đáp ứng được ngay
                            yêu cầu của nhà tuyển dụng mà không phải mất thời gian đào tạo lại. Sinh viên có thể tham
                            gia thị trường gia công phần mềm; có khả năng lập trình, phát triển các phần mềm trên các
                            nền tảng khác nhau như nền tảng web, nền tảng di động, hệ thống nhúng …; có khả năng phân
                            tích, thiết kế, phát triển, kiểm thử và vận hành các hệ thống phần mềm.
                        </p>
                    </div>
                    <div className="pt-12">
                        <h1 className="font-bold text-xl">2. Điều kiện tuyển sinh</h1>
                        <div className="flex pt-4 ">
                            <p className="font-bold">Môn nhân 2 và điều kiện: </p> <p className="pl-2">Toán lý hóa</p>
                        </div>
                        <div className="flex pt-4 ">
                            <p className="font-bold">Tổ hợp thi: </p> <p className="pl-2">Toán lý hóa</p>
                        </div>
                        <div className="pt-12">
                            <h1 className="font-bold text-xl">3. Các ngành học liên quan</h1>
                        </div>
                    </div>
                </div>
            </div>
            <Footer2 />
        </>
    );
}
