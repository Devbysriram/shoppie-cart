import React, { useEffect, useState } from "react";

const Products = ( { addToCart , cartItems}) => {
  let apiURL = "https://fakestoreapi.com/products";

  let [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(apiURL)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  


  return (
    <div className="flex flex-wrap justify-center">
      {!products ? (
        <h1>Loading...</h1>
      ) : (
        products.map((product) => (
            <div
            key={product.id}
            className=" bg-slate-50 text-black w-80 flex flex-col items-center text-center p-4 m-4 "
          >
            <div className="w-auto h-40" >
                <img className="w-auto h-40 object-fill rounded " src={product.image} />
            </div>
            <p className="bg-slate-50 text-black font-semibold">
              {product.title}
            </p>
            <p className="bg-slate-50 text-black">{product.price}</p>
            <button className="bg-slate-900 text-white px-4 py-2 rounded" onClick={() => addToCart(product.id, product.title, product.price, product.image)}>
              Add to cart
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Products;
