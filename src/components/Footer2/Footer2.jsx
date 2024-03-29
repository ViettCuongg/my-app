import css from './Footer2.module.css';
import logoTDT from '..//..//assets/logo-TDT.png';
import { FaFacebookF } from 'react-icons/fa';
import { FaDribbble } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
const Footer2 = () => {
    return (
        <div className={`w-full bg-white ${css.container} container mx-auto`}>
            <div className="md:max-w-[1480px] m-auto grid md:grid-cols-5 max-[780px]:grid-cols-2  gap-8 max-w-[600px] pt-6 px-4 md:px-0">
                <div className="col-span-2">
                    <img src={logoTDT} className="h-[25px]" />
                    <h3 className="mt-10 text-2xl font-bold">Contact Us</h3>
                    <h3 className="py-2 text-[#6D737A]">Call : 028 3775 5052</h3>
                    <h3 className="py-2 text-[#6D737A]">
                        19 Đ. Nguyễn Hữu Thọ, Tân Hưng, Quận 7, Thành phố Hồ Chí Minh
                    </h3>
                    <h3 className="py-2 text-[#363A3D]">
                        Email: <span className="text-purple">tonducthanguniversity@tdtu.edu.vn</span>
                    </h3>
                    <h3 className="py-2 text-[#363A3D]">
                        Website: <span className="text-purple">https://admission.tdtu.edu.vn</span>
                    </h3>
                    <div className="flex gap-4 py-4">
                        <div className="p-4 bg-[#E9F8F3] rounded-xl hover:bg-red cursor-pointer">
                            <FaFacebookF size={25} style={{ color: '#4DC39E' }} />
                        </div>
                        <div className="p-4 bg-[#E9F8F3] rounded-xl hover:bg-red cursor-pointer">
                            <FaDribbble size={25} style={{ color: '#4DC39E' }} />
                        </div>
                        <div className="p-4 bg-[#E9F8F3] rounded-xl hover:bg-red cursor-pointer">
                            <FaLinkedinIn size={25} style={{ color: '#4DC39E' }} />
                        </div>
                        <div className="p-4 bg-[#E9F8F3] rounded-xl hover:bg-red cursor-pointer">
                            <FaInstagram size={25} style={{ color: '#4DC39E' }} />
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="text-2xl font-bold">Explore</h3>
                    <ul className="py-6 text-[#6D737A]">
                        <li className={`py-2 ${css.explore}`}>Trang chủ </li>
                        <li className={`py-2 ${css.explore}`}>Tính điểm</li>
                        <li className={`py-2 ${css.explore}`}>Ngành học</li>
                        <li className={`py-2 ${css.explore}`}>MBTI</li>
                        <li className={`py-2 ${css.explore}`}>Thông tin</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-2xl font-bold">Category</h3>
                    <ul className="py-6 text-[#6D737A]">
                        <li className={`py-2 ${css.explore}`}>Design</li>
                        <li className={`py-2 ${css.explore}`}>Development</li>
                        <li className={`py-2 ${css.explore}`}>Marketing</li>
                        <li className={`py-2 ${css.explore}`}>Business</li>
                        <li className={`py-2 ${css.explore}`}>Lifestyle</li>
                        <li className={`py-2 ${css.explore}`}>Photography</li>
                        <li className={`py-2 ${css.explore}`}>Music</li>
                    </ul>
                </div>

                <div className="max-[780px]:col-span-2">
                    <h1 className="font-bold w-64">TON DUC THANG UNIVERSITY</h1>
                    <h3 className="py-2 text-[#6D737A]">
                        19 Nguyen Huu Tho street, Tan Phong ward, District 7, Ho Chi Minh City, Vietnam.
                    </h3>
                    <form className="py-4">
                        <input className="bg-[#F2F3F4] p-4 w-full rounded" placeholder="Email here" />
                        <button className="max-[780px]:w-full my-4 px-5 py-3 rounded-md bg-[#20B486] text-white font-medium hover:bg-sky-700">
                            Subscribe Now
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Footer2;
