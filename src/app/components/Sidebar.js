import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/Assets/hamburger.png";
import Chart from "../../../public/Assets/bar-chart.png"
import Product from "../../../public/Assets/pizza.png";
import Customer from "../../../public/Assets/customer.png";
import Orders from "../../../public/Assets/shopping-cart.png"
import Admin from "../../../public/Assets/folder.png"
import Settings from "../../../public/Assets/setting.png"

import { usePathname } from 'next/navigation'

const Nav = () => {
    const inactive="flex gap-3 py-3 pl-6 pr-6 ml-6 ";
    const active="flex gap-3 py-3 pl-6 ml-6 pr-6 bg-white text-amber-600"

    const pathname = usePathname();
    console.log({pathname});
    

  return (
    <aside className="text-white pr-0 pt-0 ">
        <Link href="/home" className="bg-amber-600 flex items-center gap-3 mb-9 py-7 pl-8">
            <Image src={Logo} alt="Logo" height={25} width={25} className="object-contain"/>
            <span className="">
                FOODIE
            </span>
        </Link>
        <nav className="flex flex-col gap-2">
            <Link className={pathname &&  pathname.includes('/home')? active : inactive } href="/home"> 
                <Image src={Chart} alt="Logo" height={26} width={26} className="object-contain"/>
                <span className="">
                    Dashboard
                </span>
            </Link>
            <Link className={pathname && pathname.includes('/orders')? active :inactive } href="/orders"> 
                <Image src={Orders} alt="Logo" height={26} width={26} className="object-contain"/>
                <span className="">
                    Orders
                </span>
            </Link>
            <Link className={pathname && pathname.includes('/products')? active :inactive } href="/products"> 
                <Image src={Product} alt="Logo" height={26} width={26} className="object-contain"/>
                <span className="">
                    Products
                </span>
            </Link>
            <Link className={pathname && pathname.includes('/customer')? active :inactive } href="/customer"> 
                <Image src={Customer} alt="Logo" height={26} width={26} className="object-contain"/>
                <span className="">
                    Customers
                </span>
            </Link>
            <Link className={pathname && pathname.includes('/admin')? active :inactive } href="/admin"> 
                <Image src={Admin} alt="Logo" height={26} width={26} className="object-contain"/>
                <span className="">
                    Administrator
                </span>
            </Link>
            <Link className={pathname && pathname.includes('/settings')? active :inactive } href="/settings"> 
                <Image src={Settings} alt="Logo" height={26} width={26} className="object-contain"/>
                <span className="">
                    Settings
                </span>
            </Link>
        </nav>
    </aside>
  )
  
}

export default Nav;
