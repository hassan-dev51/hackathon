import Image from "next/image";
import Link from "next/link";
import { SlBasket } from "react-icons/sl";

import { Sora } from "next/font/google";

const sora = Sora({ subsets: ["latin"] });
const Hero = () => {
  return (
    <section
      className={`flex xl:flex-row flex-col justify-between items-center ${sora.className} md:px-32 px-7`}
    >
      <div className="flex flex-col gap-11 justify-between mt-8 pt-8">
        <span className="bg-blue-100 w-[150px] rounded-[10px] px-6 py-3 text-blue-700 font-bold">
          Sale 70%
        </span>
        <h1 className="text-6xl -tracking-tighter   font-bold">
          An Industrial Take on Streetwear
        </h1>
        <p className="text-1xl w-[300px]">
          Anyone can beat you but no one can beat your outfit as long as you
          wear Dine outfits.
        </p>

        <Link
          href={"/products"}
          className="bg-black text-white w-[140px] flex p-4 justify-end items-center"
        >
          <SlBasket className="text-3xl " />

          <h3 className="text-center leading-4">Start Shopping</h3>
        </Link>
        <div className="flex justify-between gap-6">
          <div className="flex md:flex-row space-x-6 items-end flex-col justify-between">
            <Image
              src={"/images/Featured1.jpg"}
              alt="feature1"
              width={100}
              height={40}
            />
            <Image
              src={"/images/Featured2.jpg"}
              alt="feature2"
              width={100}
              height={40}
            />
          </div>
          <div className="flex md:flex-row flex-col items-end space-x-6 justify-between">
            <Image
              src={"/images/Featured3.jpg"}
              alt="feature3"
              width={100}
              height={40}
            />
            <Image
              src={"/images/Featured4.jpg"}
              alt="feature4"
              width={100}
              height={40}
            />
          </div>
        </div>
      </div>
      <div className="bg-[#FFF8DE] rounded-full">
        <Image src="/images/header.png" alt="hero" width={1240} height={900} />
      </div>
    </section>
  );
};
export default Hero;
