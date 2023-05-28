import Image from "next/image";
import Link from "next/link";
import { BsSearch } from "react-icons/bs";
import { SlBasket } from "react-icons/sl";

import { Sora } from "next/font/google";

const sora = Sora({ subsets: ["latin"] });
const Navbar = () => {
  return (
    <nav
      className={`py-7 flex justify-between   items-center ${sora.className} px-32`}
    >
      <div className="flex w-1/2 justify-between">
        <Link href={"/"}>
          <Image src="/images/Logo.jpg" width={140} height={30} alt="logo" />
        </Link>

        <ul className={`flex space-x-10 text-[16px]`}>
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
      </div>

      <div className="flex items-center border gap-2 px-2">
        <BsSearch />
        <input
          type="text"
          placeholder="what are you looking..."
          className="outline-none text-sm px-2"
        />
      </div>
      <div className="rounded-[25px] p-3 bg-gray-300">
        <Link href={"/cart"} className="cart-icon">
          <span className="cart-item-qty">3</span>
          <SlBasket />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
