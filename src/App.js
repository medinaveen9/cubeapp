import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import CustomerList from "./customer_list.js";
import CustomerDetails from "./customer_details.js";
import { customers } from "./data/customer.js";

function App() {
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  return (
    <div className="app">
      <div className="left-panel">
        <CustomerList
          customers={customers}
          onSelectCustomer={setSelectedCustomer}
          selectedCustomerId={selectedCustomer ? selectedCustomer.id : null}
        />
      </div>
      <div className="right-panel">
        <CustomerDetails customer={selectedCustomer} />
      </div>
    </div>
  );
}

export default App;
