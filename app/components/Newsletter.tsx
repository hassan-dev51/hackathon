import { Sora } from "next/font/google";

const sora = Sora({ subsets: ["latin"] });
const Newsletter = () => {
  return (
    <section
      className={`${sora.className}  flex flex-col justify-end items-center`}
    >
      <div className="flex justify-center items-center pt-28">
        <h2 className="md:text-8xl absolute text-4xl tracking-[3px] opacity-10 font-bold text-center">
          Newsletter
        </h2>
        <div className="space-y-7 text-center">
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
