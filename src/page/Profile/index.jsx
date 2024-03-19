import Navbar from '../../components/HomePage/header/Navbar';
import Footer2 from '../../components/Footer2/Footer2';
import { useEffect, useState } from 'react';

import * as http from '../../api/axios';

export default function Profile() {
    const user = JSON.parse(localStorage.getItem('user'));
    const [inputValue, setInputValue] = useState(user);
    const [point, setPoint] = useState({});
    useEffect(() => {
        const fetchApiGetPoint = async () => {
            try {
                const res = await http.get(`transcript/user/${user.id}`);
                setPoint(res);
                console.log(res);
            } catch (error) {
                console.log(error);
            }
        };
        fetchApiGetPoint();
    }, [user.id]);
    const handleChange = (e) => {
        setPoint((pre) => ({ ...pre, [e.target.name]: e.target.value }));
    };
    const updatePoint = async () => {
        const { id } = inputValue;
        try {
            const res = await http.post(`transcript/update/${id}`, point);
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <Navbar />
            <div className="container px-0 py-0 mx-auto mt-2 z-0">
                <div className="grid grid-cols-3 gap-6">
                    <div className="flex flex-col items-center col-span-1 bg-white rounded-lg p-4">
                        <h1 className="text-2xl font-semibold text-center">Thông tin cá nhân</h1>
                        {/* <div className="w-[150px] h-[150px] mt-2">
                            <img
                                src="https://i.pinimg.com/236x/a2/9b/d0/a29bd0059d58604110bb2f996c8ece65.jpg"
                                alt="avatar"
                                className="object-cover w-full h-full rounded-full cursor-pointer"
                            />
                        </div> */}
                        <form>
                            <div className="grid grid-cols-1 gap-2">
                                <div className="mb-2">
                                    <label htmlFor="fname" className="inline-block mr-3 text-base font-semibold">
                                        Họ Tên:
                                    </label>
                                    <input
                                        name="fname"
                                        id="fname"
                                        // onChange={handleChange}
                                        className="w-full px-2 py-1 text-base font-normal border rounded-md "
                                        type="text"
                                        value={inputValue.fullname}
                                    />
                                </div>
                                <div className="mb-2">
                                    <label htmlFor="" className="inline-block mr-3 text-base font-semibold ">
                                        Email:
                                    </label>
                                    <input
                                        className="w-full px-2 py-1 text-base font-normal border rounded-md "
                                        type="text"
                                        value={inputValue.email}
                                        // onChange={handleChange}
                                        name="email"
                                        disabled
                                    />
                                </div>
                                <div className="mb-2">
                                    <label htmlFor="" className="inline-block mr-3 text-base font-semibold ">
                                        Số điện thoại:
                                    </label>
                                    <input
                                        className="w-full px-2 py-1 text-base font-normal border rounded-md "
                                        type="text"
                                        value={inputValue.phoneNumber}
                                    />
                                </div>

                                <div className="mb-2">
                                    <label className="inline-block mr-3 text-base font-semibold" htmlFor="">
                                        Trường:
                                    </label>
                                    <input
                                        className="w-full px-2 py-1 text-base font-normal border rounded-md "
                                        type="text"
                                        value={inputValue.school}
                                    />
                                </div>
                                <div className="mb-2">
                                    <label htmlFor="" className="inline-block mr-3 text-base font-semibold text-center">
                                        Ngày sinh:
                                    </label>
                                    <input
                                        className="w-full px-2 py-1 text-base font-normal border rounded-md "
                                        type="date"
                                    // value={inputValue.dob}
                                    />
                                </div>
                                {/* <div className="mb-2">
                                    <label htmlFor="" className="inline-block mr-3 text-base font-semibold">
                                        Giới tính:
                                    </label>
                                    <select
                                        className="w-full px-2 py-1 text-base font-normal border rounded-md "
                                        name=""
                                        id=""
                                    >
                                        <option>Nam/Nữ</option>
                                        <option value="nam">Nam</option>
                                        <option value="nu">Nữ</option>
                                    </select>
                                </div> */}
                            </div>
                        </form>
                    </div>
                    <div className="flex flex-col col-span-2 p-4 bg-white rounded-lg z-1">
                        <div className="w-full p-2 rounded-lg">
                            <h1 className="text-2xl font-semibold text-center">Bảng điểm</h1>
                            <div className="grid grid-cols-3 gap-2">
                                <div className="flex flex-col">
                                    <label className="text-base italic font-bold text-[#000]" htmlFor="">
                                        Toán
                                    </label>
                                    <input
                                        className="px-2 py-1 border border-[#ccc] focus:border-[#ccc] focus:outline-none rounded-lg"
                                        type="text"
                                        value={point.toan}
                                        onChange={handleChange}
                                        name="toan"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-base italic font-bold text-[#000]" htmlFor="">
                                        Văn
                                    </label>
                                    <input
                                        className="px-2 py-1 border border-[#ccc] focus:border-[#ccc] focus:outline-none rounded-lg"
                                        type="text"
                                        value={point.nguVan}
                                        name="nguVan"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-base italic font-bold text-[#000]" htmlFor="">
                                        Anh
                                    </label>
                                    <input
                                        className="px-2 py-1 border border-[#ccc] focus:border-[#ccc] focus:outline-none rounded-lg"
                                        type="text"
                                        value={point.tiengAnh}
                                        name="tiengAnh"
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="flex flex-col">
                                    <label className="text-base italic font-bold text-[#000]" htmlFor="">
                                        Sử
                                    </label>
                                    <input
                                        className="px-2 py-1 border border-[#ccc] focus:border-[#ccc] focus:outline-none rounded-lg"
                                        type="text"
                                        value={point.lichSu}
                                        name="lichSu"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-base italic font-bold text-[#000]" htmlFor="">
                                        Địa
                                    </label>
                                    <input
                                        className="px-2 py-1 border border-[#ccc] focus:border-[#ccc] focus:outline-none rounded-lg"
                                        type="text"
                                        value={point.diaLy}
                                        name="diaLy"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-base italic font-bold text-[#000]" htmlFor="">
                                        Giáo dục công dân
                                    </label>
                                    <input
                                        className="px-2 py-1 border border-[#ccc] focus:border-[#ccc] focus:outline-none rounded-lg"
                                        type="text"
                                        value={point.gdcd}
                                        name="gdcd"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-base italic font-bold text-[#000]" htmlFor="">
                                        Lý
                                    </label>
                                    <input
                                        className="px-2 py-1 border border-[#ccc] focus:border-[#ccc] focus:outline-none rounded-lg"
                                        type="text"
                                        value={point.vatLy}
                                        name="vatLy"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-base italic font-bold text-[#000]" htmlFor="">
                                        Hóa
                                    </label>
                                    <input
                                        className="px-2 py-1 border border-[#ccc] focus:border-[#ccc] focus:outline-none rounded-lg"
                                        type="text"
                                        value={point.hoaHoc}
                                        name="hoaHoc"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-base italic font-bold text-[#000]" htmlFor="">
                                        Sinh
                                    </label>
                                    <input
                                        className="px-2 py-1 border border-[#ccc] focus:border-[#ccc] focus:outline-none rounded-lg"
                                        type="text"
                                        value={point.sinhHoc}
                                        name="sinhHoc"
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="flex flex-col">
                                    <label className="text-base italic font-bold text-[#000]" htmlFor="">
                                        Tin
                                    </label>
                                    <input
                                        className="px-2 py-1 border border-[#ccc] focus:border-[#ccc] focus:outline-none rounded-lg"
                                        type="text"
                                        value={point.tinHoc}
                                        name="tinHoc"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-base italic font-bold text-[#000]" htmlFor="">
                                        Giáo dục thể chất
                                    </label>
                                    <input
                                        className="px-2 py-1 border border-[#ccc] focus:border-[#ccc] focus:outline-none rounded-lg"
                                        type="text"
                                        value={point.gdtc}
                                        name="gdtc"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-base italic font-bold text-[#000]" htmlFor="">
                                        Giáo dục quốc phòng
                                    </label>
                                    <input
                                        className="px-2 py-1 border border-[#ccc] focus:border-[#ccc] focus:outline-none rounded-lg"
                                        type="text"
                                        value={point.gdqp}
                                        name="gdqp"
                                        onChange={handleChange}
                                    />
                                </div>
                                <button onClick={updatePoint} className="mt-3 border bg-bermuda rounded-lg">
                                    Cập nhật
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer2 />
        </>
    );
}
