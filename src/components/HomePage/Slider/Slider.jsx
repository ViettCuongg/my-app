import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './../../../App.css';
import '../../HomePage/Slider/Slider.css';
import { useEffect, useState } from 'react';
import * as http from '../../../api/axios';
import { Link } from 'react-router-dom';
const Slider = () => {
    const [faculty, setFaculty] = useState([]);

    useEffect(() => {
        const fetchApigetFaculty = async () => {
            try {
                const res = await http.get('faculty/');
                setFaculty(res);
                console.log(res);
            } catch (error) {
                console.log(error);
            }
        };
        fetchApigetFaculty();
    }, []);

    return (
        <div className="s-container">
            <Swiper
                modules={[Pagination, Navigation]}
                className="mySwiper"
                navigation={true}
                loopFillGroupWithBlank={true}
                slidesPerView={3}
                spaceBetween={10}
                slidesPerGroup={1}
                loop={true}
            >
                {faculty.length > 0 &&
                    faculty.map((product, index) => (
                        <SwiperSlide className="" key={index}>
                            {product && (
                                <div className="flex gap-4" key={index}>
                                    <img src={product.img} alt=" " className="object-cover w-2/5 h-full" />
                                    <div className="flex flex-col flex-1 py-2 pe-3">
                                        <div className="w-full h-16 mb-2 text-xl font-normal leading-6 text-black transition-all duration-300 cursor-pointer line-clamp-2 hover:underline">
                                            {product.name}
                                        </div>
                                        <div className="h-[62px] w-full leading-5 my-1 line-clamp-3 font-normal text-base">
                                            <span className="font-bold">Thành lập:</span> {product.found}
                                        </div>
                                        <Link
                                            target="_blank"
                                            to={product.url}
                                            className="py-1 mt-2 text-center text-white border rounded-lg cursor-pointer flex-end bg-slate hover:bg-opacity-85"
                                        >
                                            Chi tiết
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </SwiperSlide>
                    ))}
            </Swiper>
        </div>
    );
};

export default Slider;
