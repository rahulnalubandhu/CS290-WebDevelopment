// import React, { useState } from 'react';
import items from "../data/items";
import OrderTable from "../components/ProductTable";

function OrderPage() {
  return (
    <div className="orderpage-border">
      <h2>Order Your Groceries Here</h2>
      <p> Select the quantity of each item you wish to purchase </p>
      <OrderTable items={items} />
    </div>
  );
}

export default OrderPage;
