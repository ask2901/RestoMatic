"use client";

import React, { useState } from "react";
import UploadIcon from "../../../public/Assets/upload.png"
import Image from "next/image";

import { useRouter } from 'next/navigation';

const ProductForm = ({
    _id,
    title:currTitle,
    description:currDesc,
    price:currPrice,
    images}) => {

    const [title, setTitle] = useState(currTitle || "");
    const [description, setDescription] = useState(currDesc || "");
    const [price, setPrice] = useState(currPrice || "");
    const [goToProducts , setGoToProducts] = useState(false);
    const router = useRouter();
  
    // function uploadImage(event){
        
    //     const files=event.files;
    //     if(files?.length>0)
    //     {
    //         const data = new FormData();
    //         files.map(async(file)=>{
    //             const res=await fetch("/api/upload");
    //             console.log(await res.json());
    //         })     
    //     }

    //     // console.log(event.target.files.length);
    // }

   async function createProduct (event) {
      
    const files=event.files;
    // if(files?.length>0)
    // {
    //     const data = new FormData();
    //     files.map(async(file)=>{
    //         const res=await fetch("/api/upload");
    //         console.log(await res.json());
    //     })     
    // }

    console.log(event.target.files.length);



      event.preventDefault();
      const data = { title, description, price };

        if(_id)
        {
            // update

            const response = await fetch("http://localhost:3000/api/products", {
            method: "PUT",
            body: JSON.stringify({_id,title,description,price}),
            headers: {
            "Content-type": "application/json; charset=UTF-8",
            },
            });
            
        }
        else{

            // create 

            const response = await fetch("http://localhost:3000/api/products", {
                method: "POST",
                body: JSON.stringify({title,description,price}),
                headers: {
                  "Content-type": "application/json; charset=UTF-8",
                },
              });
        }

        
      setGoToProducts(true);
    //   console.log(response);
      
    }
  
    if(goToProducts){
      router.push('/products');
    }
    
  return (
    <form onSubmit={createProduct} method="post" encType="multipart/form-data">
      
      <label>Product Name</label>
      <input type="text" placeholder="product name" value={title} onChange={(event) => setTitle(event.target.value)} />
      <label>Description</label>
      <textarea placeholder="description" value={description} onChange={(event) => setDescription(event.target.value)}></textarea>
      <label>Photos</label>
      <div className="mb-2">
        <label className="w-24 h-24 cursor-pointer border flex items-center justify-center gap-2 mb-2 mt-2 text-sm text-gray-600 rounded-lg bg-gray-200">
            <Image src={UploadIcon} height={20} width={20}/>
            <div>Upload</div>
            <input onChange={(event)=>uploadImage(event)} type="file" name="productImage" className="hidden"/>
        </label>
        {!images?.length && (
            <div>
                No photos in this product
            </div>
        )}
      </div>
      <label>Price</label>
      <input type="text" placeholder="price" value={price} onChange={(event) => setPrice(event.target.value)} />
      <button type="submit" className="btn-primary">
        Save
      </button>
    </form>  
  );
};

export default ProductForm;
