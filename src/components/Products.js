import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ProductsHeader from "./ProductsHeader";

function Products() {
  const [data, setData] = useState([]);
  const [filter, setFiltered] = useState(data);
  console.log();
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setData(data.products));
      
  }, []);

  useEffect(()=>{
    setFiltered(data)

  },[data])

  const handleSearch = (e) => {
    const searchbar = e.target.value;
    if(searchbar){
    const searchProducts = data.filter(item =>  item.category.toLocaleLowerCase().includes(searchbar.toLowerCase()));
    setFiltered(searchProducts)}

    else {
      setFiltered(data)
    }
}
  // setData(resp)

  

  return (
    <>
    <Navbar />

    <ProductsHeader
        title="Products"
        subtitle="Browse our selection of high-quality products"
      />
      <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={handleSearch} />
          
        </form>
   
  <div className="products">

    {
      data.length===0 ? <h1 >No data</h1> : 
    
      filter.map((item) => (
    <div className="items" key={item.id}>
      <img src={item.images[0]} />
      <h6>{item.title}</h6>
      <p>{item.description} </p>
      <span>$ {item.price}</span>
      <button >Add to cart</button>
      
    </div>
  ))}
  </div>
  <Footer/>
  </>
  )
}

export default Products;
