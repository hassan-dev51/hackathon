import Link from "next/link";

const Canceled = () => {
  return (
    <div className="relative flex justify-center items-center flex-col ">
      <div className="absoulte md:text-[120px] text-[60px] text-center opacity-25 ">
        <h3>
          Opps! <br /> <span>Canceld</span>
        </h3>
      </div>

      <div className="absolute md:top-40 top-[80px]">
        <Link href="/">
          <button className="md:px-6 md:py-5 px-3 py-2 bg-black text-[#efefef] rounded-sm">
            Go to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Canceled;
