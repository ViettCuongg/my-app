import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import css from "./Categoty.module.css";
import { faBitcoin } from "@fortawesome/free-brands-svg-icons";
import { CategoryData } from "../../../data/homepage/category";

const Category = () => {
  return (
    <div className={css.container}>
      <div className={css.category_container}>
        <div className={css.category_left}>
          <h1>Categories</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos iusto
            impedit dolores autem vitae porro corrupti magnam eaque ab suscipit
            soluta obcaecati aperiam alias, perspiciatis non accusamus. Dolorum,
            obcaecati praesentium.
          </p>
          <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
            Learn more
          </button>
        </div>
        <div className={css.category_right}>
          {CategoryData.map((category, index) => (
            <article key={index} className={css.category}>
              <span className={css.category_icon}>
                <FontAwesomeIcon icon={faBitcoin} />
              </span>
              <h5 className="h-30 mt-0 font-bold text-orange">
                {category.name}
              </h5>
              <p>{category.detail} </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
