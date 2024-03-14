import { useState } from "react";
import css from "./Product.module.css";
import Plane from "../../../assets/plane.png";
import { ProductsData } from "../../../data/homepage/products";
// import { useState } from "react";
import { Link } from "react-router-dom";

const Product = () => {
  const [MenuProducts, setMenuProducts] = useState(ProductsData);
  const [activeIndex, setActiveIndex] = useState(null);
  const filter = (type,index) => {
    setActiveIndex(index);
    setMenuProducts(ProductsData.filter((product) => product.name === type));
  };
  return (
    <div className={css.container}>
      <img src={Plane} className={css.img}/>
      <h1 className="text-2xl font-medium text-black">Our Course</h1>
      <div className={css.products}>
        <ul className="bg-white rounded-lg shadow-lg  list-none flex flex-col font-medium text-[20px] h-[25rem] overflow-y-scroll w-1/5">
          <li className={`px-3 py-4 hover:bg-[#E0FFFF] cursor-pointer ${activeIndex === null ? 'bg-[#E0FFFF]' : ''}`} onClick={() => {
            setMenuProducts(ProductsData)
            setActiveIndex(null)
          }}>All</li>
          {ProductsData.map((item,index)=>(
            <li key={index} className={`px-3 py-5 cursor-pointer hover:bg-[#E0FFFF] ${activeIndex === index ? 'bg-[#E0FFFF]' : ''}`} onClick={() => filter(item.name,index)}>{item.name}</li>
          ))}
        </ul>

        <div className={`grid grid-cols-3 h-[25rem] overflow-y-scroll w-full gap-5 bg-white p-2`}>
          {MenuProducts.map((product) => (
            product.Majors.map((item,index)=>(
              <div className="flex shadow-xl bg-white h-[200px] gap-4" key={index}>
                <img src={product.img} alt=" " className="object-cover w-2/5 h-full" />
                <div className="flex flex-col flex-1 py-2 pe-3">
                  <div className="w-full text-xl font-medium leading-6 text-black transition-all duration-300 cursor-pointer h-11 line-clamp-2 hover:font-semibold">
                    {item.nameMajor}
                  </div>
                  <div className="h-[62px] w-full leading-5 my-4 line-clamp-3 font-normal text-base">{product.detail}</div>
                  
                  <Link to={`/detail/${item.nameMajor}`} className="py-1 mt-2 text-center text-white border rounded-lg cursor-pointer flex-end bg-slate hover:bg-opacity-85">View Detail</Link>
                </div>
              </div>
            ))
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
