import React, { useState } from 'react';
import jsonData from '../data.json'
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [productsToShow, setProductsToShow] = useState(jsonData);

  // Search function
  const filterProducts = (filterQuery, checkboxState) => {

    const filteredArr = (checkboxState === false)
    ? products.filter(eachProduct => eachProduct.name.includes(filterQuery))
    : products.filter(eachProduct => eachProduct.name.includes(filterQuery) && eachProduct.inStock === true)

    setProductsToShow(filteredArr)
  }

  return (
    <div style={{display: "flex", alignItems: "center", flexDirection: "column"}}>
        <h1>IronStore</h1>

        <SearchBar filterProducts={filterProducts}/>

        <hr width="100%"/>

        <ProductTable products={productsToShow}/>
    </div>
  )
}

export default ProductsPage;
