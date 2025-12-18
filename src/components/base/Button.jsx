const Button = ({
  children,
  onClick,
  className = "",
  type = "button",
  ...rest
}) => {
  return (
    <button
      type={type}
      className={`btn ${className}`.trim()}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
