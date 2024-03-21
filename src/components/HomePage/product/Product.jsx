import { useEffect, useState } from 'react';
import css from './Product.module.css';
import Plane from '../../../assets/plane.png';
import { ProductsData } from '../../../data/homepage/products';
// import { useState } from "react";
import { Link } from 'react-router-dom';
import * as http from '../../../api/axios';
// import logo from '../../../assets/goalss.jpg';
const Product = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const [faculty, setFaculty] = useState([]);
  const [majors, setMajors] = useState([]);
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
    const fetchApigetMajor = async () => {
      try {
        const res = await http.get('major/');
        setMajors(res);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchApigetMajor();
    fetchApigetFaculty();
  }, []);
  const filter = (type, index) => {
    setActiveIndex(index);
    const fetchApigetMajorByFaculty = async () => {
      try {
        const res = await http.get(`major/faculty/${type}`);
        setMajors(res);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchApigetMajorByFaculty();
  };
  return (
    <div className={css.container}>
      <img src={Plane} className={css.img} />
      <h1 className="text-2xl font-medium text-black">Our Course</h1>
      <div className={css.products}>
        <ul className="bg-white rounded-lg shadow-lg  list-none flex flex-col font-medium text-[20px] h-[25rem] overflow-y-scroll w-1/5">
          <li
            className={`px-3 ml-0 py-4 text-base cursor-pointer hover:bg-[#E0FFFF] ${activeIndex === null ? 'bg-[#E0FFFF]' : ''
              }`}
            onClick={() => {
              faculty(ProductsData);
              setActiveIndex(null);
            }}
          >
            All
          </li>
          {faculty.map((item, index) => (
            <li
              key={index}
              className={`px-3 ml-0 py-4 text-base cursor-pointer hover:bg-[#E0FFFF] ${activeIndex === index ? 'bg-[#E0FFFF]' : ''
                }`}
              onClick={() => filter(item.id, index)}
            >
              {item.name}
            </li>
          ))}
        </ul>

        <div className={`grid grid-cols-3 h-[25rem] overflow-y-scroll w-full gap-5 bg-white p-2`}>
          {majors.map((item, index) => (
            <div className="flex shadow-xl bg-white h-[200px] gap-4" key={index}>
              <img src={item.img} alt=" " className="object-cover w-2/5 h-full" />
              <div className="flex flex-col flex-1 py-2 pe-3">
                <div className="w-full h-20 mb-2 text-xl font-normal leading-7 text-black transition-all duration-300 cursor-pointer line-clamp-2">
                  {item.name}
                </div>
                <div className="h-[62px] w-full leading-8 my-4 line-clamp-3 font-normal text-base">
                  {' '}
                  <span className="font-bold">Mã ngành:</span> {item.code}
                </div>
                <div className={`grid grid-cols-3 h-[25rem] overflow-y-scroll w-full gap-5 bg-white p-2`}>
                  {majors.map((item, index) => (
                    <div className="flex shadow-xl bg-white h-[200px] gap-4" key={index}>
                      <img src={item.img} alt=" " className="object-cover w-2/5 h-full" />
                      <div className="flex flex-col flex-1 py-2 pe-3">
                        <div className="w-full h-20 mb-2 text-xl font-normal leading-7 text-black transition-all duration-300 cursor-pointer line-clamp-2">
                          {item.name}
                        </div>
                        <div className="h-[62px] w-full leading-8 my-4 line-clamp-3 font-normal text-base">
                          {' '}
                          <span className="font-bold">Mã ngành:</span> {item.code}
                        </div>

                        <Link
                          to={`/detail/${item.id}`}
                          className="py-1 mt-2 text-center text-black border rounded-lg cursor-pointer flex-end bg-[#effaf6] hover:bg-opacity-85"
                        >
                          View Detail
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
};

          export default Product;
