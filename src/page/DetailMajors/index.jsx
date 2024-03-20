import Footer2 from '../../components/Footer2/Footer2';
import Navbar from '../../components/HomePage/header/Navbar';

export default function DetailMajors() {
    return (
        <>
            <Navbar />
            <div className="bg-white">
                <main className="container mx-auto bg-white mt-4 px-10">
                    <div>
                        <h1 className=" text-center text-3xl font-medium pt-4">Kỹ thuật phần mềm</h1>
                        <div className="flex items-center justify-between  py-0">
                            <p>
                                <span className="text-xl font-semibold italic ">mã ngành:</span> 09001
                            </p>
                        </div>
                    </div>
                    <ul className="">
                        <p className="font-bold text-[18px] italic">1. Giới thiệu:</p>
                        <li className="text-base text-justify mb-4 tracking-widest leading-7">
                            Chúng ta không thể sống trong một thế giới hiện đại mà không cần dùng đến phần mềm. Hầu hết
                            các thiết bị điện tử hiện đại ngày nay đều được điều khiển bằng phần mềm. Nền sản xuất và
                            phân phối công nghiệp; dịch vụ tài chính ngân hàng, chứng khoán, bất động sản, … đều ứng
                            dụng phần mềm máy tính để xử lý hầu hết các công việc. Đặc biệt, trong lĩnh vực giải trí như
                            trò chơi máy tính, điện ảnh và truyền hình đều sử dụng các phần mềm chuyên dụng để xử lý các
                            công việc phức tạp. Từ đó cho thấy rằng phần mềm rất cần thiết cho hầu hết các hoạt động của
                            đời sống kinh tế và xã hội.
                        </li>
                        <li className="text-base text-justify mb-4 tracking-widest leading-7">
                            Ngành Kỹ thuật phần mềm đào tạo những kiến thức liên quan đến quy trình phát triển phần mềm
                            một cách chuyên nghiệp nhằm tạo ra sản phẩm phần mềm đạt chất lượng cao, đáp ứng các nhu cầu
                            nghiệp vụ cụ thể trong nền sản xuất của xã hội. Sinh viên học ngành này được trang bị các
                            kiến thức chuyên sâu về công nghiệp phần mềm, bao gồm: quy trình phát triển phần mềm, kỹ
                            năng vận dụng các công cụ phần mềm vào việc hỗ trợ phát triển các phần mềm khác. Sinh viên
                            cũng được trang bị các kiến thức cần thiết liên quan đến các pha thực hiện trong một dự án
                            phần mềm như: thu thập yêu cầu, phân tích, thiết kế, lập trình, kiểm thử, vận hành và bảo
                            trì phần mềm.
                        </li>
                    </ul>
                    <div className="">
                        <p className="font-bold text-[18px] italic">2.Ngành đào tạo:</p>
                        <ul>
                            <li className="text-base text-justify mb-4 tracking-widest leading-7">
                                <span className="font-bold italic">Kỹ Thuật phần mềm: </span>
                                <span>0908986</span>
                            </li>
                            <li className="text-base text-justify mb-4 tracking-widest leading-7">
                                <span className="font-bold italic">Kỹ Thuật phần mềm: </span>
                                <span>0908986</span>
                            </li>
                        </ul>
                    </div>
                </main>
            </div>
            <Footer2 />
        </>
    );
}
