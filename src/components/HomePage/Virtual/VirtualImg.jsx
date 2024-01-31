import Shade from "../../../assets/shade.png";
import Before from "../../../assets/before1.jpg";
import After from "../../../assets/after1.jpg";
import ReactCompareImage from "react-compare-image";
import css from "./Virtual.module.css";
const VirtualImg = () => {
  return (
    <div>
      <div className={css.Virtual}>
        <div className={css.left}>
          <span>Try-One</span>
          <span>Try to see something new</span>
          <span>Try-Now!!!</span>
          <img src={Shade} alt="" />
        </div>
        <div className={css.right}>
          <div className={css.wrapper}>
            <ReactCompareImage
              className="compare-image"
              leftImage={Before}
              rightImage={After}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtualImg;
