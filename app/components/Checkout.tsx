import CheckoutSlide from "./CheckoutSlide";

const Checkout = () => {
  return (
    <section className="padding">
      <div className="text-center my-20 ">
        <span className="uppercase text-center tracking-[4px] text-[12px] text-blue-700 font-bold">
          PRODUCTS
        </span>
        <h1 className="tracking-[2px] font-bold text-3xl">
          Check What We Have
        </h1>
      </div>
      <div className="mb-24">
        <CheckoutSlide />
      </div>
    </section>
  );
};

export default Checkout;
