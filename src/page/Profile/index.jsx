import Navbar from '../../components/HomePage/header/Navbar';
import Footer2 from '../../components/Footer2/Footer2';
import { useEffect, useState } from 'react';

import * as http from '../../api/axios';
import { useNavigate } from 'react-router';

export default function Profile() {
    const user = JSON.parse(localStorage.getItem('user'));
    const navigation = useNavigate();

    const [point, setPoint] = useState({});
    const [dataUser, setDataUser] = useState({});
    useEffect(() => {
        if (user === null || user === undefined || user === '') {
            navigation('/');
        } else {
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
            const fetchApiGetUser = async () => {
                try {
                    const res = await http.get(`user/${user.id}`);
                    setDataUser(res);
                    console.log(res);
                } catch (error) {
                    console.log(error);
                }
            };
            fetchApiGetPoint();
            fetchApiGetUser();
        }
    }, [user.id]);
    const handleChange = (e) => {
        setPoint((pre) => ({ ...pre, [e.target.name]: e.target.value }));
    };
    const updatePoint = async () => {
        const { id } = user;
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
            <div className="container z-0 px-0 py-0 mx-auto mt-2">
                <div className="grid grid-cols-3 gap-6">
                    <div className="flex flex-col items-center col-span-1 p-4 bg-white rounded-lg">
                        <h1 className="text-2xl font-semibold text-center">Thông tin cá nhân</h1>

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
                                        value={dataUser.fullname}
                                    />
                                </div>
                                {/* <div className="mb-2">
                                    <label htmlFor="" className="inline-block mr-3 text-base font-semibold ">
                                        Email:
                                    </label>
                                    <input
                                        className="w-full px-2 py-1 text-base font-normal border rounded-md "
                                        type="text"
                                        value={dataUser.email}
                                        // onChange={handleChange}
                                        name="email"
                                        disabled
                                    />
                                </div> */}
                                <div className="mb-2">
                                    <label htmlFor="" className="inline-block mr-3 text-base font-semibold ">
                                        Số điện thoại:
                                    </label>
                                    <input
                                        className="w-full px-2 py-1 text-base font-normal border rounded-md "
                                        type="text"
                                        value={dataUser.phoneNumber}
                                    />
                                </div>

                                <div className="mb-2">
                                    <label className="inline-block mr-3 text-base font-semibold" htmlFor="">
                                        Trường:
                                    </label>
                                    <input
                                        className="w-full px-2 py-1 text-base font-normal border rounded-md "
                                        type="text"
                                        value={dataUser.school}
                                    />
                                </div>
                                <div className="mb-2">
                                    <label htmlFor="" className="inline-block mr-3 text-base font-semibold text-center">
                                        Ngày sinh:
                                    </label>
                                    <input
                                        className="w-full px-2 py-1 text-base font-normal border rounded-md "
                                        type="text"
                                        value={dataUser.dob}
                                    />
                                </div>
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
                            </div>
                            <button
                                onClick={updatePoint}
                                className="mt-3 py-1 px-2 rounded-lg bg-[#28a745] text-white cursor-pointer hover:opacity-90 float-right"
                            >
                                Cập nhật bảng điểm
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer2 />
        </>
    );
}
