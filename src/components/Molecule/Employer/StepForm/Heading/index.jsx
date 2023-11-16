/* eslint-disable react/prop-types */
function Hed2(props) {
  const { variant, className, children } = props;

  let hedStyle = "";

  switch (variant) {
    case "bodyTitle":
      hedStyle += "text-xl font-normal mb-3";
      break;
    case "headTitle":
      hedStyle += "text-[23px] text-slate-500";
      break;
    default:
      hedStyle += "";
      break;
  }

  return <h2 className={`${hedStyle} ${className}`}>{children}</h2>;
}

export default Hed2;
