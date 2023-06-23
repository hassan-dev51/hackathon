import Image from "next/image";

import { Sora } from "next/font/google";

const sora = Sora({ subsets: ["latin"] });
const Promotion = () => {
  return (
    <section className={`${sora.className} md:px-32 px-7`}>
      <div className="text-center my-20 ">
        <span className="uppercase text-center tracking-[4px] text-[12px] text-blue-700 font-bold">
          {" "}
          Promotions
        </span>
        <h1 className="tracking-[2px] font-bold text-3xl">
          Our Promotions Events
        </h1>
      </div>

      <div className="flex xl:flex-row flex-col justify-center gap-4">
        <div className="space-y-6">
          <div className="bg-[#D7D7D9] flex justify-center items-center md:flex-row flex-col">
            <div className="p-8">
              <h2 className="text-[28px] tracking-[2px] font-bold capitalize">
                get up to 60%
              </h2>
              <p className="capitalize text-sm">for the summer season</p>
            </div>
            <div className="relative aspect-video">
              <Image
                src={"/images/event1.png"}
                alt="event1"
                width={300}
                height={200}
              />
            </div>
          </div>

          <div className="bg-[#242124]  text-white text-center py-9">
            <h2 className="text-[28px] tracking-[2px] font-bold uppercase">
              get 30% off
            </h2>
            <div className="p-8">
              <p className="uppercase text-[12px]">use promo code</p>
              <button
                type="button"
                className="uppercase tracking-[5px] border-white border rounded-xl md:px-8 px-2 py-2 bg-[#3B3C36]"
              >
                dine weekend sale
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-4 xl:flex-row flex-col">
          <div className="bg-[#EFE1C7]">
            <div className="p-4">
              <h1>Flex Sweatshirt</h1>
              <p>
                <del>$100.00</del> <span className="font-bold">$75.00</span>
              </p>
            </div>
            <Image
              src={"/images/event2.png"}
              alt="event2"
              width={350}
              height={120}
            />
          </div>
          <div className="bg-[#D7D7D9]">
            <div className="p-4">
              <h1>Flex Push Button Bomber</h1>
              <p>
                <del>$225.00</del> <span className="font-bold">$190.00</span>
              </p>
            </div>
            <Image src={"/images/p1.png"} alt="p1" width={400} height={120} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotion;
