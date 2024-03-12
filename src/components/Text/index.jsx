import PropTypes from "prop-types";

const sizes = {
  xs: "text-sm font-normal leading-[18px]",
};

const Text = ({ children, className = "", as, size = "xs", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-blue_gray-600 font-montserrat ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  as: PropTypes.string,
  size: PropTypes.oneOf(["xs"]),
};

export { Text };
