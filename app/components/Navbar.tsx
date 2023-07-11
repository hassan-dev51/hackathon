"use client";
import Image from "next/image";
import Link from "next/link";
import { SlBasket } from "react-icons/sl";
import { RxHamburgerMenu } from "react-icons/rx";
import { Sora } from "next/font/google";
import { useAppSelector } from "@/redux/hooks";
import { useState } from "react";

const sora = Sora({ subsets: ["latin"] });
const Navbar = () => {
  const { totalquantity } = useAppSelector((state) => state.addedItems);

  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <nav
        className={`py-7 flex justify-between items-center ${sora.className} md:px-32 px-5`}
      >
        <div className="flex gap-12 ">
          <Link href={"/"}>
            <Image src="/images/Logo.jpg" width={140} height={30} alt="logo" />
          </Link>
        </div>

        <ul className={`flex space-x-10 text-[16px] res-navbar`}>
          <li>
            <Link href="/female">Female</Link>
          </li>
          <li>
            <Link href="/male">Male</Link>
          </li>
          <li>
            <Link href="/kids">Kids</Link>
          </li>
          <li>
            <Link href="products">All Products</Link>
          </li>
        </ul>

        <div className="rounded-[25px] p-3 bg-gray-300 res-navbar">
          <Link href={"/cart"} className="cart-icon">
            <span className="cart-item-qty">{totalquantity}</span>
            <SlBasket />
          </Link>
        </div>

        <div className="mob-navbar cursor-pointer">
          <RxHamburgerMenu onClick={() => setToggle(!toggle)} />
        </div>
      </nav>
      <div className="flex relative">
        {toggle && (
          <div className="absolute right-5 z-10 mt-3 -top-[30px] p-5 rounded-lg bg-white border min-w-[210px] flex flex-col gap-2 justify-start items-start">
            <Link href="/female" onClick={() => setToggle(false)}>
              Female
            </Link>
            <Link href="/male" onClick={() => setToggle(false)}>
              Male
            </Link>
            <Link
              href="/products"
              className="text-sm font-inter text-gray-700 hover:text-gray-500 font-medium"
              onClick={() => setToggle(false)}
            >
              Products
            </Link>
            <div className="rounded-[25px] p-3 bg-gray-300">
              <Link
                href={"/cart"}
                className="cart-icon"
                onClick={() => setToggle(false)}
              >
                <span className="cart-item-qty">{totalquantity}</span>
                <SlBasket />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
