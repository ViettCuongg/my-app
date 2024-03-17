import { useEffect, useState } from 'react';
import '../CalculateScore/CalScore.model.css';
const CalculateForm = () => {
    const [diemXetTN, setDiemXetTN] = useState(0.0);
    const [doituong, setDoiTuong] = useState('thpt');
    const [diemToan, setDiemToan] = useState(0);
    const [diemNguVan, setDiemNguVan] = useState(0);
    const [diemNgoaiNgu, setDiemNgoaiNgu] = useState(0);
    const [diemVatLi, setDiemVatLi] = useState(0);
    const [diemHoaHoc, setDiemHoaHoc] = useState(0);
    const [diemSinhHoc, setDiemSinhHoc] = useState(0);
    const [diemTB12, setDiemTB12] = useState(0);
    const [diemKhuyenKhich, setDiemKhuyenKhich] = useState(0);
    const [diemUuTien, setDiemUuTien] = useState(0);
    const calculateScore = () => {
        // Convert input values to floats
        const diemToanFloat = parseFloat(diemToan);
        const diemNguVanFloat = parseFloat(diemNguVan);
        const diemNgoaiNguFloat = parseFloat(diemNgoaiNgu);
        const diemVatLiFloat = parseFloat(diemVatLi);
        const diemHoaHocFloat = parseFloat(diemHoaHoc);
        const diemSinhHocFloat = parseFloat(diemSinhHoc);
        const diemTB12Float = parseFloat(diemTB12);
        const diemKhuyenKhichFloat = parseFloat(diemKhuyenKhich);
        const diemUuTienFloat = parseFloat(diemUuTien);

        // Calculate the graduation score based on the selected type
        let tongDiem4Mon =
            diemToanFloat +
            diemNguVanFloat +
            diemNgoaiNguFloat +
            (diemVatLiFloat + diemHoaHocFloat + diemSinhHocFloat) / 3;
        let diemXetTN = 0;

        let tongDiem3Mon = diemToanFloat + diemNguVanFloat + (diemVatLiFloat + diemHoaHocFloat + diemSinhHocFloat) / 3;

        let diemtGDTX = (tongDiem3Mon / 3 + diemKhuyenKhichFloat / 4) * 7 + diemTB12Float * 3;
        if (doituong === 'thpt') {
            // Hệ THPT calculation
            diemXetTN = (((tongDiem4Mon + diemKhuyenKhichFloat) / 4) * 7 + diemTB12Float * 3) / 10 + diemUuTienFloat;
        } else if (doituong === 'gdtx') {
            // Hệ GDTX calculation
            diemXetTN = diemtGDTX / 10 + diemUuTienFloat;
        }

        // Update the state with the result
        setDiemXetTN(diemXetTN.toFixed(1));
    };
    useEffect(() => {
        setDiemToan(0);
        setDiemNguVan(0);
        setDiemXetTN(0);
        setDiemNguVan(0);
        setDiemNgoaiNgu(0);
        setDiemVatLi(0);
        setDiemHoaHoc(0);
        setDiemSinhHoc(0);
        setDiemTB12(0);
        setDiemKhuyenKhich(0);
        setDiemUuTien(0);
        // Đặt giá trị mặc định của các biến state khác về 0
    }, [doituong]);
    const handleDiemToanChange = (e) => {
        const value = e.target.value;
        if (/^\d*(\.\d{0,2})?$/.test(value) && value <= 10) {
            setDiemToan(value);
        }
    };

    const handleDiemToanKeyDown = (e) => {
        const keyCode = e.keyCode || e.which;
        if (keyCode === 189 || keyCode === 69) {
            e.preventDefault();
        }
    };

    return (
        <div>
            <div className="form-container">
                <form className="" method="post">
                    <center>
                        <div>
                            <br />
                            Nhập điểm môn Toán:
                            <input
                                type="text"
                                name="diemtoan_toan"
                                value={diemToan}
                                onChange={handleDiemToanChange}
                                onKeyDown={handleDiemToanKeyDown}
                                className="score"
                            />
                            <br />
                            Nhập điểm môn Ngữ văn:
                            <input
                                type="text"
                                name="diemtoan_nguvan"
                                value={diemNguVan}
                                onChange={(e) => setDiemNguVan(e.target.value)}
                                className="score"
                            />
                            <br />
                            Nhập điểm môn Ngoại ngữ:
                            <input
                                type="text"
                                name="diemtoan_ngoaingu"
                                value={diemNgoaiNgu}
                                onChange={(e) => setDiemNgoaiNgu(e.target.value)}
                                className="score"
                            />
                            <br />
                            Nhập điểm môn Vật lí (hoặc Lịch sử):
                            <input
                                type="text"
                                name="diemtoan_vatly"
                                value={diemVatLi}
                                onChange={(e) => setDiemVatLi(e.target.value)}
                                className="score"
                            />
                            <br />
                            Nhập điểm môn Hóa học (hoặc Địa lí):
                            <input
                                type="text"
                                name="diemtoan_hoahoc"
                                value={diemHoaHoc}
                                onChange={(e) => setDiemHoaHoc(e.target.value)}
                                className="score"
                            />
                            <br />
                            Nhập điểm môn Sinh học (hoặc GDCD):
                            <input
                                type="text"
                                name="diemtoan_sinhhoc"
                                value={diemSinhHoc}
                                onChange={(e) => setDiemSinhHoc(e.target.value)}
                                className="score"
                            />
                            <br />
                            Nhập điểm trung bình cả năm lớp 12:
                            <input
                                type="text"
                                name="diemtoan_TB12"
                                value={diemTB12}
                                onChange={(e) => setDiemTB12(e.target.value)}
                                className="score"
                            />
                            <br />
                            Nhập điểm khuyến khích (nếu có):
                            <input
                                type="text"
                                name="diemtoan_khuyenkhich"
                                value={diemKhuyenKhich}
                                onChange={(e) => setDiemKhuyenKhich(e.target.value)}
                                className="score"
                            />
                            <br />
                            Nhập điểm ưu tiên (nếu có):
                            <input
                                type="text"
                                name="diemtoan_uutien"
                                value={diemUuTien}
                                onChange={(e) => setDiemUuTien(e.target.value)}
                                className="score"
                            />
                            <br />
                            Đối tượng học sinh:
                            <input
                                type="radio"
                                name="diemtoan_doituong"
                                value="thpt"
                                checked={doituong === 'thpt'}
                                onChange={() => setDoiTuong('thpt')}
                                className="score"
                            />
                            Hệ THPT
                            <input
                                type="radio"
                                name="diemtoan_doituong"
                                value="gdtx"
                                checked={doituong === 'gdtx'}
                                onChange={() => setDoiTuong('gdtx')}
                                className="score"
                            />
                            Hệ GDTX
                            <br />
                            <input type="button" value="Tính điểm xét tốt nghiệp" onClick={calculateScore}></input>
                            <br />
                            Điểm xét tốt nghiệp:
                            <label type="text" id="diemxetTN" name="diemTN">
                                {diemXetTN}
                            </label>
                        </div>
                    </center>
                </form>
            </div>
        </div>
    );
};

export default CalculateForm;
