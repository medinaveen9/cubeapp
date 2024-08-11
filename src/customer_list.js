import Card from './card';

export default function CustomerList({ customers, onSelectCustomer, selectedCustomerId }) {
  return (
    <div className="customer-list">
      {customers.map((customer) => (
        <Card
          key={customer.id}
          customer={customer}
          onClick={() => onSelectCustomer(customer)}
          isSelected={customer.id === selectedCustomerId}
        />
      ))}
    </div>
  );
}