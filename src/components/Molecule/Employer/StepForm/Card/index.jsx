/* eslint-disable react/prop-types */

function Card(props) {
  const { children, className } = props;
  const cardStyle = "bg-white shadow-lg p-16 rounded-[5px]";

  return <div className={`${cardStyle} ${className}`}>{children}</div>;
}

export default Card;
