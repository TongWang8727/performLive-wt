import "./style.css";
export default function RedButton({ value, id ,onNext}) {
  return (
    <>
      <button className="red-button" onClick={onNext}>{value}</button>
    </>
  );
}
