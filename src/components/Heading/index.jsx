import PropTypes from "prop-types";

const sizes = {
  s: "text-lg font-bold leading-[27px]",
  xs: "text-base font-bold leading-5",
};

const Heading = ({
  children,
  className = "",
  size = "s",
  as,
  ...restProps
}) => {
  const Component = as || "h6";

  return (
    <Component
      className={`text-blue_gray-900 font-montserrat ${className} ${sizes[size]} hover:text-red `}
      {...restProps}
    >
      {children}
    </Component>
  );
};

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  size: PropTypes.oneOf(["s", "xs"]),
  as: PropTypes.string,
};

export { Heading };
