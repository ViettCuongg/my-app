
import Navbar from '../../components/HomePage/header/Navbar'
import Footer2 from '../../components/Footer2/Footer2'
import { useState } from 'react';

export default function Profile() {
    const [inputValue, setInputValue] = useState('Phạm Văn Vĩ');
    const handleChange = (event) => {
        setInputValue(event.target.value);
      };
  return (
    <>
        <Navbar/>
        <div className='container px-0 py-0 mx-auto mt-2'>
            <div className='grid grid-cols-3 gap-6'>
                <div className='flex flex-col items-center col-span-1 bg-white rounded-lg px-4'>
                    <div className='w-[150px] h-[150px] mt-2'>
                        <img src="https://i.pinimg.com/236x/a2/9b/d0/a29bd0059d58604110bb2f996c8ece65.jpg" alt="avatar" className='object-cover w-full h-full rounded-full cursor-pointer' />
                    </div>
                    <form>
                        <div className='grid grid-cols-1 gap-2'>
                            <div className='mb-2'>
                                <label htmlFor="fname" className='inline-block mr-3 text-base font-semibold'>Họ Tên:</label>
                                <input name='fname' id='fname' onChange={handleChange} className='w-full px-2 py-1 text-base font-normal border rounded-md ' type="text" value={inputValue}/>
                                
                            </div>
                            <div className='mb-2'>
                                <label htmlFor="" className='inline-block mr-3 text-base font-semibold '>Email:</label>
                                <input className='w-full px-2 py-1 text-base font-normal border rounded-md ' type="text" value="phamviabc2@gmail.com"/>
                            </div>
                            <div className='mb-2'>
                                <label htmlFor="" className='inline-block mr-3 text-base font-semibold '>Số điện thoại:</label>
                                <input className='w-full px-2 py-1 text-base font-normal border rounded-md ' type="text" value="0901816726"/>
                            </div>
                        
                            <div className='mb-2'>
                                <label className='inline-block mr-3 text-base font-semibold' htmlFor="">Trường:</label>
                                <input className='w-full px-2 py-1 text-base font-normal border rounded-md ' type="text" value="THPT Nguyễn Chí Thanh" />
                            </div>
                            <div className='mb-2'>
                                <label htmlFor="" className='inline-block mr-3 text-base font-semibold text-center'>Ngày sinh:</label>
                                <input className='w-full px-2 py-1 text-base font-normal border rounded-md ' type="date" />
                            </div>
                            <div className='mb-2'>
                                <label htmlFor="" className='inline-block mr-3 text-base font-semibold'>Giới tính:</label>
                                <select className='w-full px-2 py-1 text-base font-normal border rounded-md ' name="" id="">
                                    <option>Nam/Nữ</option>
                                    <option value="nam">Nam</option>
                                    <option value="nu">Nữ</option>
                                </select>
                                
                            </div>
                        </div>           
                    </form>
                </div>
                <div className='flex flex-col col-span-2 p-4 bg-white rounded-lg'>
                    
                   <div className='w-full border p-2 border-[#ccc] rounded-lg relative'>
                        <h1 className='text-2xl font-semibold text-center'>Bảng điểm</h1>
                        <div className='grid grid-cols-3 gap-2'>
                            <div className='flex flex-col'>
                                <label className='text-base italic font-bold text-[#000]' htmlFor="">Toán</label>
                                <input className='px-2 py-1 border border-[#ccc] focus:border-[#ccc] focus:outline-none rounded-lg' type="text" value={"8.9"} />
                            </div>
                            <div className='flex flex-col'>
                                <label className='text-base italic font-bold text-[#000]' htmlFor="">Văn</label>
                                <input className='px-2 py-1 border border-[#ccc] focus:border-[#ccc] focus:outline-none rounded-lg' type="text" value={"8.9"} />
                            </div>
                            <div className='flex flex-col'>
                                <label className='text-base italic font-bold text-[#000]' htmlFor="">Anh</label>
                                <input className='px-2 py-1 border border-[#ccc] focus:border-[#ccc] focus:outline-none rounded-lg' type="text" value={"8.9"} />
                            </div>
                           
                            <div className='flex flex-col'>
                                <label className='text-base italic font-bold text-[#000]' htmlFor="">Sử</label>
                                <input className='px-2 py-1 border border-[#ccc] focus:border-[#ccc] focus:outline-none rounded-lg' type="text" value={"8.9"} />
                            </div>
                            <div className='flex flex-col'>
                                <label className='text-base italic font-bold text-[#000]' htmlFor="">Địa</label>
                                <input className='px-2 py-1 border border-[#ccc] focus:border-[#ccc] focus:outline-none rounded-lg' type="text" value={"8.9"} />
                            </div>
                            <div className='flex flex-col'>
                                <label className='text-base italic font-bold text-[#000]' htmlFor="">Giáo dục công dân</label>
                                <input className='px-2 py-1 border border-[#ccc] focus:border-[#ccc] focus:outline-none rounded-lg' type="text" value={"8.9"} />
                            </div>
                            <div className='flex flex-col'>
                                <label className='text-base italic font-bold text-[#000]' htmlFor="">Lý</label>
                                <input className='px-2 py-1 border border-[#ccc] focus:border-[#ccc] focus:outline-none rounded-lg' type="text" value={"8.9"} />
                            </div>
                            <div className='flex flex-col'>
                                <label className='text-base italic font-bold text-[#000]' htmlFor="">Hóa</label>
                                <input className='px-2 py-1 border border-[#ccc] focus:border-[#ccc] focus:outline-none rounded-lg' type="text" value={"8.9"} />
                            </div>
                            <div className='flex flex-col'>
                                <label className='text-base italic font-bold text-[#000]' htmlFor="">Sinh</label>
                                <input className='px-2 py-1 border border-[#ccc] focus:border-[#ccc] focus:outline-none rounded-lg' type="text" value={"8.9"} />
                            </div>

                            <div className='flex flex-col'>
                                <label className='text-base italic font-bold text-[#000]' htmlFor="">Tin</label>
                                <input className='px-2 py-1 border border-[#ccc] focus:border-[#ccc] focus:outline-none rounded-lg' type="text" value={"8.9"} />
                            </div>
                            <div className='flex flex-col'>
                                <label className='text-base italic font-bold text-[#000]' htmlFor="">Giáo dục công dân</label>
                                <input className='px-2 py-1 border border-[#ccc] focus:border-[#ccc] focus:outline-none rounded-lg' type="text" value={"8.9"} />
                            </div>
                            <div className='flex flex-col'>
                                <label className='text-base italic font-bold text-[#000]' htmlFor="">Giáo dục quốc phòng</label>
                                <input className='px-2 py-1 border border-[#ccc] focus:border-[#ccc] focus:outline-none rounded-lg' type="text" value={"8.9"} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer2/>
    </>
  )
}
