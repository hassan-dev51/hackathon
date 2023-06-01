"use client";
import Image from "next/image";
import Link from "next/link";
import { BsSearch } from "react-icons/bs";
import { SlBasket } from "react-icons/sl";
import { RxHamburgerMenu } from "react-icons/rx";
import { Sora } from "next/font/google";
import { useAppSelector } from "@/redux/hooks";

const sora = Sora({ subsets: ["latin"] });
const Navbar = () => {
  const { totalquantity } = useAppSelector((state) => state.addedItems);

  return (
    <nav
      className={`py-7  flex justify-between items-center ${sora.className} md:px-32 px-5`}
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

      <div className="mob-navbar">
        <RxHamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;
