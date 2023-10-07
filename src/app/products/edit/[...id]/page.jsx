"use client";

import React, { useEffect, useState } from "react";
import Layout from "../../../components/Layout";
import { useRouter } from "next/navigation";
import ProductForm from "@/app/components/ProductForm";

const page = ({ params }) => {
  const id = params.id;
  const [productInfo, setProductInfo] = useState(null);

  useEffect(() => {
    if (!id) {
      return;
    }

    const res = fetch("/api/products?id=" + id).then((response) => {
      const res = response.json().then((res) => {
        setProductInfo(res.data);
      });
    });
  }, []);

  console.log(productInfo);

  return (
    <Layout>
      <h1>Edit Product</h1>
      {productInfo && <ProductForm {...productInfo} />}
    </Layout>
  );
};

export default page;
