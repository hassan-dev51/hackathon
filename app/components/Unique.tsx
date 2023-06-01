import { Sora } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { uniqueTitle } from "./checkList";

const sora = Sora({ subsets: ["latin"] });
const Unique = () => {
  return (
    <section className={sora.className}>
      <div className="flex">
        <div className="xl:w-1/2 w-0"></div>
        <h1 className="xl:w-1/2 w-full text-4xl z-10 tracking-[5px] font-bold px-6 pt-6 translate-y-10 md:px-32">
          Unique and <br /> Authentic Vintage <br /> Designer Jewellery
        </h1>
      </div>
      <div className="flex flex-col relative xl:flex-row bg-gray-100 py-16 md:px-32 px-7  ">
        <div className="md:w-1/2  w-full max-h-max ">
          <p className="capitalize absolute md:w-1/2  md:tracking-[8px] tracking-[6px] opacity-10  md:text-8xl text-5xl  font-extrabold">
            different form others
          </p>

          <div className="flex flex-wrap max-h-max">
            {uniqueTitle.map((item) => (
              <div className="w-[250px]   p-2" key={item.id}>
                <h2 className="text-[18px] font-bold tracking-[1px] mb-5">
                  {item.title}
                </h2>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="md:w-1/2 w-ful items-center flex md:flex-row  flex-col space-x-5">
          <Image
            src={"/images/p7.png"}
            alt="product7"
            width={350}
            height={100}
          />
          <div className="md:mt-[0px] mt-6">
            <p className="text-sm tracking-[3px] md:w-[250px] w-full  text-justify mb-5">
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
