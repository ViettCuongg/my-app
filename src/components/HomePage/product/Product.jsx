import css from "./Product.module.css";
import Plane from "../../../assets/plane.png";
import { ProductsData } from "../../../data/homepage/products";
// import { useState } from "react";
import { Link } from "react-router-dom";

const Product = () => {
  // const [MenuProducts, setMenuProducts] = useState(ProductsData);
  // const filter = (type) => {
  //   setMenuProducts(ProductsData.filter((product) => product.name === type));
  // };
  return (
    <div className={css.container}>
      <img src={Plane} className={css.img}/>
      <h1 className="text-2xl font-medium text-black">Our Course</h1>
      <div className={css.products}>
        {/* <ul className="list-none flex flex-col gap-4 font-medium text-[20px] w-1/5">
          <li className="cursor-pointer hover:underline" onClick={() => setMenuProducts(ProductsData)}>All</li>
          <li className="cursor-pointer hover:underline" onClick={() => filter("Công Nghệ Thông Tin")}>Công Nghệ Thông Tin</li>
          <li className="cursor-pointer hover:underline" onClick={() => filter("Dược")}>Dược</li>
          <li className="cursor-pointer hover:underline" onClick={() => filter("Điện Điện Tử")}>Điên Điện Tử</li>
        </ul> */}

        <div className={`grid grid-cols-3 h-[25rem] overflow-y-scroll w-full gap-5`}>
          {ProductsData.map((product, index) => (
            <div className="flex  bg-white h-[200px] gap-4" key={index}>
              <img src={product.img} alt=" " className="w-2/5 h-full object-cover" />
              <div className="flex flex-col flex-1 py-2 pe-3">
                <div className="transition-all duration-300 text-xl w-full h-11 leading-6 line-clamp-2 font-medium text-black hover:font-semibold cursor-pointer">
                  {product.name}
                </div>
                <div className="h-[62px] w-full leading-5 my-4 line-clamp-3 font-normal text-base">{product.detail}</div>
                
                <Link to={`/detail/${product.name}`} className="flex-end text-center bg-slate text-white py-1 rounded-lg border cursor-pointer mt-2 hover:bg-opacity-85">View Detail</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
