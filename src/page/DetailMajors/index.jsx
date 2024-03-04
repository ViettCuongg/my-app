import { Link } from "react-router-dom";
import Footer2 from "../../components/Footer2/Footer2";
import Navbar from "../../components/HomePage/header/Navbar";

import css from '../DetailMajors/DetailMajors.module.scss'

export default function DetailMajors() {
  return (
    <>
        <Navbar/>
           <div className="container px-0 py-0">
             <div className={css.banner}>
                <div className="flex flex-col text-center mb-2 z-10">
                    <h1 className="text-3xl text-white font-semibold cursor-pointer">Danh Sách Ngành học</h1>
                    <div className="text-xl text-white font-normal mt-3">
                        <Link className="hover:underline" to={'/Homepage'}>Trang Chủ</Link> &gt; <span className="hover:underline">Công nghệ thông tin</span>
                    </div>
                </div>
             </div>
           </div>
        <Footer2/>
    </>
  )
}
