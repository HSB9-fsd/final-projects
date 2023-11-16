/* eslint-disable react/prop-types */
function Button(props) {
  const { className, type, onClick, variant, children } = props;
  let buttonStyle = "";
  switch (variant) {
    case "primary":
      buttonStyle +=
        "bg-blue-600 text-white rounded-md hover:bg-blue-800 hover:transition-all duration-300";
      break;
    case "outline":
      buttonStyle +=
        "border-2 border-blue-600 rounded-md hover:bg-blue-200 hover:transition-all duration-300";
      break;
    default:
      buttonStyle += "";
      break;
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${buttonStyle} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
