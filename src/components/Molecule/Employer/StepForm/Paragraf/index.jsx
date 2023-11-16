function Par(props) {
  const { children, className } = props;
  const paragStyle = "text-sm text-slate-600";

  return <p className={`${paragStyle} ${className}`}>{children}</p>;
}

export default Par;
