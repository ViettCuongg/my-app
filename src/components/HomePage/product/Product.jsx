import css from "./Product.module.css";
import Plane from "../../../assets/plane.png";
import { ProductsData } from "../../../data/homepage/products";
import { useState } from "react";

const Product = () => {
  const [MenuProducts, setMenuProducts] = useState(ProductsData);
  const filter = (type) => {
    setMenuProducts(ProductsData.filter((product) => product.type === type));
  };
  return (
    <div className={css.container}>
      <img src={Plane} />
      <h1>Our Course</h1>
      <div className={css.products}>
        <ul className={css.menu}>
          <li onClick={() => setMenuProducts(ProductsData)}>All</li>
          <li onClick={() => filter("Course1")}>Course1</li>
          <li onClick={() => filter("Course2")}>Course2</li>
          <li onClick={() => filter("Course3")}>Course3</li>
        </ul>

        <div className={css.list}>
          {MenuProducts.map((product, index) => (
            <div className={css.product} key={index}>
              <div className="left-s">
                <div className="name">
                  <span>{product.name}</span>
                  <span>{product.detail}</span>
                </div>
                <span>{product.price}</span>
                <div className=" bg-sky-200 cursor-pointer">Check Now</div>
              </div>
              <img src={product.img} alt=" " className="img-p" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
