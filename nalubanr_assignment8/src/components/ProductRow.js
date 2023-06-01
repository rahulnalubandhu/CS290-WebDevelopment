import React from 'react';
import SelectQuantity from '../components/SelectQuantity';


function OrderRow({ item}) {
  return (
    <tr>
      <td>{item.name}</td>
      <td>{item.price}</td>
      <td><SelectQuantity/></td>
    </tr>
  );
}

export default OrderRow;


