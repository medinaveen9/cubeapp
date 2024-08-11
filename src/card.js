export default function Card({ customer, onClick, isSelected }) {
  return (
    <div
      className={`customer-card ${isSelected ? "selected" : ""}`}
      onClick={onClick}
    >
      <h3>{customer.name}</h3>
      <p>{customer.title}</p>
    </div>
  );
}
