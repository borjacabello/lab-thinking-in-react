import React from 'react'
import ProductRow from './ProductRow'

function ProductTable(props) {

  const {products} = props;

  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <ProductRow products={products}/>
        </table>
    </div>
  )
}

export default ProductTable