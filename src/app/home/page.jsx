
import React from "react";

import Layout from "@/app/components/Layout"
import Card from "../components/Card"
import Nav from "../components/Nav"
import LineChart from "../components/LineChart";
import { Box } from "@mui/material";
import Select from "../components/Select"
import Image from "next/image";
import BiryaniPic from "../../../public/Assets/mario-raj-ysmeQt1dzcw-unsplash.jpg"
import KebabPic from "../../../public/Assets/artem-beliaikin-7b8eGUOBbGE-unsplash.jpg"
import Emp_1 from "../../../public/Assets/Emp-1.jpg"
import Emp_2 from "../../../public/Assets/Emp-2.jpg"
import Emp_3 from "../../../public/Assets/Emp-3.jpg"
import Emp_4 from "../../../public/Assets/Emp-4.jpg"

const page = () => {
  
  return (<Layout>
    <Nav/>
    <div className="flex flex-row gap-3 mt-5 justify-between card-component">
      <Card title={"Active Orders"} value={"18"}/>
      <Card title={"Pending Orders"} value={"7"}/>
      <Card title={"Delivered Orders"} value={"15"}/>
      <Card title={"Cancelled Orders"} value={"5"}/>
    </div>
    <Box className="flex flex-row justify-between w-full main-page">
      <Box className="mt-3 bg-white " sx={{height:8/10,width:6.9/10}}>
        <div className="flex flex-row justify-between items-center px-4 py-2">
          <h1 class="text-xl ">Overview</h1>
          <Select/>
        </div>
        <Box className="h-full bg-white">
          <LineChart />
        </Box>
      </Box>
      <Box className="flex flex-col gap-2 mt-3 ml-8" sx={{height:8/10}}> 
        <Box className="flex flex-col gap-1 bg-white px-6 py-3 max-h-50">
          <h1 class="text-xl">Most Popular</h1>
          <div className="flex flex-row gap-4 items-center">
            <Image className="rounded-full h-10 w-10" src={BiryaniPic}></Image>
            <div className="div flex flex-col gap-1">
              <h2>Special Chicken Biryani</h2>
              <h3>250+ Orders</h3>
              <h3>Rating : 4.5/10</h3>
            </div>
          </div>
          <div className="flex flex-row gap-4 mt-2 items-center">
            <Image className="rounded-full h-10 w-10" src={KebabPic}></Image>
            <div className="flex flex-col gap-1">
              <h2>Chicken Kebab</h2>
              <h3>500+ Orders</h3>
              <h3>Rating : 4.8/10</h3>
            </div>
          </div>
        </Box>
        <Box className="flex flex-col gap-1 mb-3 mt-2 bg-white px-4 py-3 rounded-md">
        <h1 class="text-xl">Employee</h1>
          <div className="flex flex-row gap-4 mt-1">
            <Image className="rounded-full h-11 w-11" src={Emp_1}></Image>
            <Image className="rounded-full h-11 w-11" src={Emp_2}></Image>
            <Image className="rounded-full h-11 w-11" src={Emp_3}></Image>
            <Image className="rounded-full h-11 w-11" src={Emp_4}></Image>
          </div>
        </Box>
      </Box>
    </Box>
  </Layout>)
};

export default page;
