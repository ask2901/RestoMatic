"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import EditButton from "../../../public/Assets/edit-button.png";
import DeleteButton from "../../../public/Assets/trash.png";
import Image from "next/image";
import Modal from "./Modal";
import ConfirmButton from "../../../public/Assets/check.png";
import DetailsButton from "../../../public/Assets/list.png";
import Select from "../components/Select"

const table = (props) => {
  const [Data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [currId, setCurrId] = useState(-1);

  function handleOpen(props) {
    setOpen(!open);
    // console.log("ID",{currId});
  }

  useEffect(() => {
    const res = fetch("/api/products").then((response) => {
      const d = response.json().then((res) => {
        setData(res.data);
        // console.log(Data);
      });
    });
  }, [Data]);

  return (
    <>
      {open && <Modal _id={currId} handleOpen={handleOpen} />}
      <div>
        <div class="flex flex-col gap-4 p-5 h-screen bg-slate-100">
          <div className="flex flex-row items-center justify-between px-4">
            <h1 class="text-xl mb-2">All Orders</h1>
            <Select/>
            
          </div>

          <div class="overflow-auto rounded-lg shadow hidden md:block">
            <table class="w-full">
              <thead class="bg-[#a3a3a3] border-b-2 border-gray-200">
                <tr>
                  <th class="w-16 text-center p-3 text-sm font-semibold tracking-wide">Item ID</th>
                  <th class="w-20 p-3 text-sm font-semibold tracking-wide text-center">Name</th>
                  <th class="w-20 p-2 text-sm font-semibold tracking-wide text-center">Quantity</th>
                  <th class="w-20 text-sm font-semibold tracking-wide text-center">Amount</th>
                  <th class="w-24 p-2 text-sm font-semibold tracking-wide text-center">Status</th>
                  <th class="w-16 p-2 text-sm font-semibold tracking-wide text-center">Payment</th>
                  <th class="w-16 p-2 px-0 text-sm font-semibold tracking-wide text-center">Details</th>
                  <th class="w-16 p-2 px-0 text-sm font-semibold tracking-wide text-center">Confirm</th>
                  <th class="w-16 p-2 px-0 text-sm font-semibold tracking-wide text-center">Delete</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {Data.map((product) => {
                  return (
                    <tr key={product._id} className="bg-white">
                      <td className="p-3 text-sm text-gray-700 whitespace-nowrap text-center">
                        <Link href="#" class="font-bold text-blue-500 hover:underline">
                          10001
                        </Link>
                      </td>
                      <td className="p-3 text-sm text-gray-700 whitespace-nowrap text-center">Kring </td>
                      <td className="p-2 text-sm text-gray-700 whitespace-nowrap text-center">
                        <span className="text-center p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">{product.title}</span>
                      </td>
                      <td className="text-center p-2 text-sm text-gray-700 whitespace-nowrap">{product.description}</td>
                      <td className="text-center p-3 text-sm text-gray-700 whitespace-nowrap">{product.price}</td>
                      <td align="center" className="px-0 py-2 text-sm text-gray-700 whitespace-nowrap  ">
                        <Link href={"/products/edit/" + product._id}>
                          <Image src={EditButton} height={25} width={25}></Image>
                        </Link>
                      </td>
                      <td align="center" className="px-0 py-2 text-sm text-gray-700 whitespace-nowrap">
                        <Image
                          id={product._id}
                          onClick={(event) => {
                            event.preventDefault();
                            setCurrId(event.target.id);
                            handleOpen(event.target.id);
                          }}
                          src={DetailsButton}
                          height={25}
                          width={25}
                        ></Image>
                      </td>
                      <td align="center" className="px-0 py-2 text-sm text-gray-700 whitespace-nowrap">
                        <Link href={"/products/edit/" + product._id}>
                          <Image src={ConfirmButton} height={25} width={25}></Image>
                        </Link>
                      </td>
                      <td align="center" className="px-0 py-2 text-sm text-gray-700 whitespace-nowrap">
                        <Link href={"/products/edit/" + product._id}>
                          <Image src={DeleteButton} height={25} width={25}></Image>
                        </Link>
                      </td>
                    </tr>
                  );
                })}
                {/* <tr class="bg-white">
                <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                  <Link href="#" class="font-bold text-blue-500 hover:underline">
                    10001
                  </Link>
                </td>
                <td class="p-3 text-sm text-gray-700 whitespace-nowrap">Kring </td>
                <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                  <span class="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">Delivered</span>
                </td>
                <td class="p-3 text-sm text-gray-700 whitespace-nowrap">16/10/2021</td>
                <td class="p-3 text-sm text-gray-700 whitespace-nowrap">$200.00</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                  <Link href="#" class="font-bold text-blue-500 hover:underline">
                    10002
                  </Link>
                </td>
                <td class="p-3 text-sm text-gray-700 whitespace-nowrap">Kring </td>
                <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                  <span class="p-1.5 text-xs font-medium uppercase tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-50">Shipped</span>
                </td>
                <td class="p-3 text-sm text-gray-700 whitespace-nowrap">16/10/2021</td>
                <td class="p-3 text-sm text-gray-700 whitespace-nowrap">$200.00</td>
              </tr>
              <tr class="bg-white">
                <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                  <Link href="#" class="font-bold text-blue-500 hover:underline">
                    10002
                  </Link>
                </td>
                <td class="p-3 text-sm text-gray-700 whitespace-nowrap">Kring </td>
                <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                  <span class="p-1.5 text-xs font-medium uppercase tracking-wider text-gray-800 bg-gray-200 rounded-lg bg-opacity-50">Cancelled</span>
                </td>
                <td class="p-3 text-sm text-gray-700 whitespace-nowrap">16/10/2021</td>
                <td class="p-3 text-sm text-gray-700 whitespace-nowrap">$200.00</td>
              </tr> */}
              </tbody>
            </table>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
            <div class="bg-white space-y-3 p-4 rounded-lg shadow">
              <div class="flex items-center space-x-2 text-sm">
                <div>
                  <a href="#" class="text-blue-500 font-bold hover:underline">
                    #1000
                  </a>
                </div>
                <div class="text-gray-500">10/10/2021</div>
                <div>
                  <span class="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">Delivered</span>
                </div>
              </div>
              <div class="text-sm text-gray-700">Kring New Fit office chair, mesh + PU, black</div>
              <div class="text-sm font-medium text-black">$200.00</div>
            </div>
            <div class="bg-white space-y-3 p-4 rounded-lg shadow">
              <div class="flex items-center space-x-2 text-sm">
                <div>
                  <a href="#" class="text-blue-500 font-bold hover:underline">
                    #1001
                  </a>
                </div>
                <div class="text-gray-500">10/10/2021</div>
                <div>
                  <span class="p-1.5 text-xs font-medium uppercase tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-50">Shipped</span>
                </div>
              </div>
              <div class="text-sm text-gray-700">Kring New Fit office chair, mesh + PU, black</div>
              <div class="text-sm font-medium text-black">$200.00</div>
            </div>
            <div class="bg-white space-y-3 p-4 rounded-lg shadow">
              <div class="flex items-center space-x-2 text-sm">
                <div>
                  <a href="#" class="text-blue-500 font-bold hover:underline">
                    #1002
                  </a>
                </div>
                <div class="text-gray-500">10/10/2021</div>
                <div>
                  <span class="p-1.5 text-xs font-medium uppercase tracking-wider text-gray-800 bg-gray-200 rounded-lg bg-opacity-50">Canceled</span>
                </div>
              </div>
              <div class="text-sm text-gray-700">Kring New Fit office chair, mesh + PU, black</div>
              <div class="text-sm font-medium text-black">$200.00</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default table;
