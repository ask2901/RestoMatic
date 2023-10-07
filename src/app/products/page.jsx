import React from "react";
import Layout from "../components/Layout";
import ProductTable from "../components/ProductTable";
import Nav from "../components/Nav";

const page = () => {
  return (
    <Layout>
      <div className="flex flex-col gap-3">
        <Nav />
        <ProductTable />
      </div>
    </Layout>
  );
};

export default page;
