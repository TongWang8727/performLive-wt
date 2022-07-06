import "./style.css";
export default function RedButton({ value, id ,onClick}) {
  return (
    <>
      <button className="red-button" onClick={onClick}>{value}</button>
    </>
  );
}
