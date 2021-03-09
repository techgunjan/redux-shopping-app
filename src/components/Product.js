import React from "react";
import PRODUCTS from "../Data";



const Product = () =>{
    return(
        <main className="block" > 
        <h2>
            Products List
        </h2>
        <div className="row">
            {PRODUCTS.map((product,index) => (
            <div className="product" key={index}>
             
             <img className="small" src={product.image} alt={product.name} />
             <h3>{product.name}</h3>
             <div>₹{product.price}</div>
             <button>Add to Cart</button>
             </div>
            ))}
            
        </div>
    </main>
    )
            }

export default Product;