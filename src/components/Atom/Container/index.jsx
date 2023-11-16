/* eslint-disable react/prop-types */
function Container(props) {
  const { children, className } = props;

  const constyle = "w-[95%] mx-auto";

  return <div className={`${constyle} ${className}`}>{children}</div>;
}

export default Container;
