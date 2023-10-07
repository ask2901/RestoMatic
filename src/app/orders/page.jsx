import React from "react";
import Layout from "../components/Layout";
import Nav from "../components/Nav";
import OrderTable from "../components/OrderTable";

const page = () => {
  return (
    <Layout>
      <div className="flex flex-col gap-3">
        <Nav />
        <OrderTable />
      </div>
    </Layout>
  );
};

export default page;
