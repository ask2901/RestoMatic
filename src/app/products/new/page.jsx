"use client";

import React, { useState } from "react";
import Layout from "../../components/Layout";
import { useRouter } from 'next/navigation';
import ProductForm from "../../components/ProductForm";

const page = () => {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [price, setPrice] = useState("");
//   const [goToProducts , setGoToProducts] = useState(false);
//   const router = useRouter();

//  async function createProduct (event) {
    
//     event.preventDefault();
//     const data = { title, description, price };
//     const response = await fetch("http://localhost:3000/api/products", {
//       method: "POST",
//       body: JSON.stringify({title,description,price}),
//       headers: {
//         "Content-type": "application/json; charset=UTF-8",
//       },
//     });
//     setGoToProducts(true);
//     console.log(response);
    
//   }

//   if(goToProducts){
//     router.push('/products');
//   }

//   return (
//     <Layout>
//       <form onSubmit={createProduct} method="post">
//         <h1>New Product</h1>
//         <label>Product Name</label>
//         <input type="text" placeholder="product name" value={title} onChange={(event) => setTitle(event.target.value)} />
//         <label>Description</label>
//         <textarea placeholder="description" value={description} onChange={(event) => setDescription(event.target.value)}></textarea>
//         <label>Price</label>
//         <input type="text" placeholder="price" value={price} onChange={(event) => setPrice(event.target.value)} />
//         <button type="submit" className="btn-primary">
//           Save
//         </button>
//       </form>
//     </Layout>
//   );

  return (
      <Layout>
        <h1>New Product</h1>
        <ProductForm />
      </Layout>
    );
  
};

export default page;
