import React from 'react';

function ProductRow(props) {
  const { category, price, inStock, name, id } = props.products;

  return (
    <tbody>
      {props.products.map((eachProduct) => {
        return (
          <tr key={eachProduct.id}>
            <td style={eachProduct.inStock === false ? {color: "red"} : {color: "black"}}>{eachProduct.name}</td>
            <td>{eachProduct.price}</td>
          </tr>
        );
      })}
    </tbody>
  );
}

export default ProductRow;
