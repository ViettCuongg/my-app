import { Link, useParams } from 'react-router-dom';
import Footer2 from '../../components/Footer2/Footer2';
import Navbar from '../../components/HomePage/header/Navbar';

import css from '../DetailMajors/DetailMajors.module.scss';
import { useEffect, useState } from 'react';
import * as http from '../../api/axios';

export default function DetailMajors() {
    const { id } = useParams();
    const [major, setMajor] = useState();
    useEffect(() => {
        const fetchApi = async () => {
            try {
                const res = await http.get(`major/${id}`);
                setMajor(res);
                console.log(res);
            } catch (error) {
                console.log(error);
            }
        };
        fetchApi();
    }, [id]);

    return (
        <>
            <Navbar />
            <div className="container px-0 py-0">
                <div className="relative">
                    <div className="bg-[#ccc] w-full h-[200px]" />
                    <div className="absolute z-10 flex flex-col mb-2 text-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                        <h1 className="font-bold text-black text-[46px] drop-shadow-2xl">{major?.facultyName}</h1>
                        <h3 className="my-4 text-3xl font-semibold text-black cursor-pointer">{major?.name}</h3>
                        <div className="text-xl font-normal text-black ">Mã ngành: {major?.code}</div>
                    </div>
                </div>
                <div className="pt-6">
                    <div>
                        <h1 className="text-3xl font-bold drop-shadow-2xl">1. Giới thiệu</h1>
                        <li className="pt-4 text-[18px] text-justify">{major?.intro}</li>
                        <img src={major?.img} alt="" className="w-[600px] h-[316px] object-contain mx-auto" />
                        {/* <li className="pt-4 text-[18px] text-justify">{major?.intro}</li>
                        <li className="pt-4 text-[18px] text-justify">{major?.intro}</li> */}
                    </div>
                    <div className="pt-6 text-[18px]">
                        <h1 className="text-3xl font-bold">2. Điều kiện tuyển sinh</h1>
                        <ul>
                            <li className="flex items-center gap-2">
                                <p className="font-bold">Môn nhân 2 và điều kiện: </p> <p className="">Toán,lý,hóa</p>
                            </li>
                            <li className="flex items-center gap-2">
                                <p className="pb-0 text-xl font-bold">Tổ hợp thi: </p>
                                <p className="flex gap-3 pb-0 font-bold">
                                    {major?.combinations?.map((item, index) => (
                                        <div key={index}>{item.name},</div>
                                    ))}
                                </p>
                            </li>
                        </ul>
                        <div className="pt-6">
                            <h1 className="text-3xl font-bold">3. Các ngành học liên quan</h1>
                            <ul className="mt-3 list-disc">
                                {major?.others?.map((item, index) => (
                                    <li key={index} className="text-[18px] font-normal">
                                        {item.name}: <span>{item.code}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer2 />
        </>
    );
}
