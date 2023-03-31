import React from 'react';

function ProductsHeader({ title, subtitle }) {
  return (
    <div className="products-header">
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
}

export default ProductsHeader;
