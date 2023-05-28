import { Sora } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { SlBasket } from "react-icons/sl";

const sora = Sora({ subsets: ["latin"] });
const Unique = () => {
  return (
    <section className={`${sora.className}`}>
      <div className="flex">
        <div className="w-1/2"></div>
        <h1 className="w-1/2 text-4xl  tracking-[5px] font-bold px-6 pt-6 translate-y-10">
          Unique and <br /> Authentic Vintage <br /> Designer Jewellery
        </h1>
      </div>
      <div className="flex bg-gray-100 py-12 px-32">
        <div className="w-1/2">
          <p className="capitalize opacity-10 text-8xl font-bold">
            different form others
          </p>
        </div>
        <div className="w-1/2 flex space-x-5">
          <Image
            src={"/images/p7.png"}
            alt="product7"
            width={350}
            height={100}
          />
          <div className="">
            <p className="text-sm tracking-[3px] w-[250px] bg-red-300 mb-5">
              This piece is ethically crafted in our small family-owned workshop
              in Peru with unmatched attention to detail and care. The Natural
              color is the actual natural color of the fiber, undyed and 100%
              traceable.
            </p>
            <Link
              href={"/products"}
              className="bg-black text-white text-sm w-[120px] flex p-3 justify-end items-center"
            >
              <h3 className="text-center leading-4">See All Products</h3>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Unique;
