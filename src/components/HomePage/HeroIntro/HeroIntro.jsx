import { MdQuiz } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";
import css from "./HeroIntro.module.css";
import HeroImg from "../../../assets/bts.avif";
import { motion } from "framer-motion";

const Hero = () => {
  const transition = { duration: 3, type: "spring" };
  return (
    <div className={css.container}>
      {/* /* Left*/}
      <div className={css.h_sides}>
        <span className={css.text1}>Do some Quiz</span>
        <span className={css.text1}>Hot New !!!</span>
        <span className={css.text1}>Check your point</span>
        <div className={css.text2}>
          <span>Your Future!</span>
          <span>{""} Your Money Your Feature </span>
          <span>
            {""} Seedily say has suitable disposal and boy. Exercise joy man
            children rejoiced.
          </span>
          <span>{""} Seedily say has suitable disposal and boy</span>{" "}
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
          width={550}
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
          <span className="text-lg leading-10">100.000/ month</span>
          <span>Monba</span>
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
