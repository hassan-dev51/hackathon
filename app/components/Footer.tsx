import Image from "next/image";
import { GrLinkedinOption } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="flex md:flex-row flex-col md:py-52 py-24 md:px-32 px-7">
        <div className="md:w-1/3 w-full space-y-7 ">
          <Image
            src={"/images/Logo.jpg"}
            alt="footer-logo"
            width={170}
            height={20}
          />
          <p>
            Small, artisan label that offers a thoughtfully curated collection
            of high quality everyday essentials made
          </p>

          <div className="flex justify-start gap-8">
            <div className="bg-gray-300 rounded-[10px] p-3">
              <BsTwitter className=" text-xl " />
            </div>
            <div className="bg-gray-300 rounded-[10px] p-3">
              <FaFacebookF />
            </div>
            <div className="bg-gray-300 rounded-[10px] p-3">
              <GrLinkedinOption />
            </div>
          </div>
        </div>
        <div className="flex md:flex-row flex-col justify-evenly w-full">
          <div>
            <h2 className="text-xl text-gray-[#666666] font-bold">Company</h2>
            <ul className="space-y-4 mt-4 text-gray-400">
              <li>
                <Link href={""}>About</Link>
              </li>
              <li>
                <Link href={""}>Terms of Use</Link>
              </li>
              <li>
                <Link href={""}>Privacy Policy</Link>
              </li>
              <li>
                <Link href={""}>How it works</Link>
              </li>
              <li>
                <Link href={""}>Contact Us</Link>
              </li>
            </ul>
          </div>
          <div>
            {" "}
            <h2 className="text-xl text-gray-400 font-bold">Support</h2>
            <ul className="space-y-4 mt-4">
              <li>
                <Link href={""}>Support Career</Link>
              </li>
              <li>
                <Link href={""}>24th Service</Link>
              </li>
              <li>
                <Link href={""}>Quick Chat</Link>
              </li>
            </ul>
          </div>
          <div>
            {" "}
            <h2 className="text-xl text-gray-400 font-bold">Contact</h2>
            <ul className="space-y-4 mt-4">
              <li>
                <Link href={""}>WhatsApp</Link>
              </li>
              <li>
                <Link href={""}>Support 24th</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t-2 md:px-32 px-7 border-black flex md:flex-row flex-col justify-between  md:items-center items-start md:gap-0 gap-4 py-8 ">
        <p className="text-gray-500">
          Copyright © 2022 Dine <br /> Market
        </p>
        <p>
          <span className="text-gray-500">Design by.</span>
          <span className="font-bold">
            Weird <br />
            Design Studio
          </span>{" "}
        </p>
        <p>
          <span className="text-gray-500">Code by. </span>
          <span className="font-bold">
            Hassan Ali
            <br /> on github
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
