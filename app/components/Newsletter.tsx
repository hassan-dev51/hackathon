import { Sora } from "next/font/google";

const sora = Sora({ subsets: ["latin"] });
const Newsletter = () => {
  return (
    <section
      className={`${sora.className} h-[80vh] flex flex-col justify-end items-center`}
    >
      <div className="relative">
        <h2 className="text-8xl tracking-[3px] opacity-10 font-bold text-center">
          Newsletter
        </h2>
        <div className="absolute space-y-7 text-center -top-[10px] right-[100px]">
          <h2 className="text-2xl font-bold tracking-[3px]">
            Subscribe Our Newsletter
          </h2>
          <p className="text-sm">
            Get the latest information and promo offers directly
          </p>
          <input
            type="text"
            placeholder="input email address"
            className="border border-black px-4 py-1"
          />
          <button
            type="button"
            className="ml-3 border font-bold border-[#242124] px-4 py-1 bg-black text-white"
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
