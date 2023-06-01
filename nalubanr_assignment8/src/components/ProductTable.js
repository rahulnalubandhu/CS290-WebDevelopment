import React from 'react';
import items from '../data/items';
import OrderRow from './ProductRow';

function OrderTable() {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item,i) => (
          <OrderRow item={item} key={i}  />
        ))}
      </tbody>
    </table>
  );
}

export default OrderTable;


