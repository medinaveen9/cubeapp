import PhotoList from './photo_list';

export default function CustomerDetails({customer}) {
  if (!customer) return <div className="customer-details">Select a customer</div>;

  return (
    <div className="customer-details">
      <h2>{customer.name}</h2>
      <p>{customer.title}</p>
      <p>{customer.address}</p>
      <PhotoList />
    </div>
  );
}
