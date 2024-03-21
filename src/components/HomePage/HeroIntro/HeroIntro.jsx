import { MdQuiz } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";
import css from "./HeroIntro.module.css";
import HeroImg from "../../../assets/CalScore/home-img1.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  const transition = { duration: 3, type: "spring" };
  return (
    <div className={css.container}>
      {/* /* Left*/}
      <div className={css.h_sides}>
        <Link to="/QuizzPersonality" className={css.text1}>
          Trắc nghiệm tính cách
        </Link>
        <Link to="/news" className={css.text1}>
          Tin Tuyển sinh
        </Link>
        <Link to="/CalculateScore" className={css.text1}>
          Tính điểm
        </Link>
        <div className={css.text2}>
          <span className="w-[250px] ">YC-YF</span>
          <span className="w-[250px] mb-2">
            {""}Chọn đúng trường, đúng nghành
          </span>
          <span className="w-[250px] mb-2">
            {""}Tương lai đang ở phía trước
          </span>
          <span className="w-[250px] mb-2">
            {""}2K6 quyết tâm, chúng tôi chờ bạn
          </span>
          <span className="w-[250px] mb-2">{""}Định hướng chọn ngành</span>
          <span className="w-[250px] mb-2">
            {""}Giải đáp mọi băn khoăn về QUY CHẾ TUYỂN SINH năm nay
          </span>
          <span className="w-[250px] mb-2">
            {""}Trò chuyện trực tiếp cùng chuyên gia HOT nhất với 15+ năm kinh
            nghiệm
          </span>
          <span className="w-[150px]">{""} </span>{" "}
        </div>
      </div>

      {/* /* center*/}

      <div className={css.wrapper}>
        <motion.div
          initial={{ bottom: "2rem" }}
          whileInView={{ bottom: "0rem" }}
          className={css.blueCircle}
          transition={transition}
        >
          {" "}
        </motion.div>
        <motion.img
          transition={transition}
          initial={{ bottom: "-2rem" }}
          whileInView={{ bottom: "0rem" }}
          src={HeroImg}
          alt=""
          width={600}
          className="w-30 h-30 py-8 rounded-full text-center justify-center"
        />
        <motion.div
          transition={transition}
          initial={{ right: "4%" }}
          whileInView={{ right: "2%" }}
          className={css.cart2}
        >
          <MdQuiz />
          <div className={css.signup}>
            <span>Check something</span>
            <div>
              <BsArrowRight />
            </div>
          </div>
        </motion.div>
      </div>
      {/* /* right*/}
      <div className={css.h_sides}>
        <div className={css.traffic}>
          <span className="text-lg leading-10"></span>
        </div>
        <div className={css.customers}>
          <span>1240k</span>
          <span>Happy</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
