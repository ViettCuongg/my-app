import Navbar from '../../components/HomePage/header/Navbar';
import svdt2 from '../../assets/student/sv2dt.png';
import Footer2 from '../../components/Footer2/Footer2';
const ExcellentStudentDetail = () => {
    return (
        <div>
            <Navbar />
            <div>
                <div className="post-content item-center ml-12 ">
                    <div className="post-title">
                        <span className=" text-2xl font-bold my-2 pt-12">Cử nhân tiêu biểu Nguyễn Võ Minh Phương</span>
                    </div>
                    <div className="field-post-content">
                        <div className="flex">
                            <p className="">Tốt nghiệp loại: </p>
                            <p className="font-bold text-red ml-4">Gioi</p>
                        </div>
                        <div className="flex">
                            <p>Điểm trung bình toàn khoá:</p>
                            <p className="font-bold text-red ml-4">8.53</p>
                        </div>
                        <img src={svdt2}></img>
                    </div>
                    <div>
                        <p> THẺ </p>
                        <div className="flex">
                            <p>Tốt nghiệp</p>
                            <p> Gioi</p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer2 />
        </div>
    );
};

export default ExcellentStudentDetail;
