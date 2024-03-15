import PropTypes from "prop-types";

const shapes = {
  square: "rounded-[0px]",
  circle: "rounded-[50%]",
  round: "rounded-[13px]",
};
const variants = {
  fill: {
    blue_A700: "bg-blue-A700",
    white_A700: "bg-white-A700 shadow-xs",
    red_700_19: "bg-red-700_19 text-red-700",
    blue_A200: "bg-blue-A200 text-blue-A700",
  },
};
const sizes = {
  md: "h-[56px] px-3",
  sm: "h-[42px] px-3",
  xs: "h-[26px] px-3 text-xs",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  variant = "fill",
  size = "xs",
  color = "blue_A200",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${
        (shape && shapes[shape]) || ""
      } ${(size && sizes[size]) || ""} ${
        (variant && variants[variant]?.[color]) || ""
      }`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["square", "circle", "round"]),
  size: PropTypes.oneOf(["md", "sm", "xs"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf([
    "blue_A700",
    "white_A700",
    "red_700_19",
    "blue_A200",
  ]),
};

export { Button };
