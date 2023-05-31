import Image from "next/image";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineShopping,
} from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
const Cart = () => {
  return (
    <section className="px-32">
      {/* <div className="mt-4">
        <span className="heading">Your Cart</span>
        <span className="cart-num-items">(23 items)</span>
      </div>
      <div className="flex justify-center items-center flex-col">
        <AiOutlineShopping size={150} />
        <h3 className="text-4xl font-extrabold mt-4">
          Your Shopping Cart is Empty
        </h3>
      </div> */}
      <div className="flex justify-between items-center mb-7">
        <div className="flex gap-5">
          <Image
            src={"/images/p1.png"}
            alt="error"
            width={150}
            height={150}
            className="cart-product-image"
          />
          <div className="mt-8 flex flex-col gap-4">
            <h5>item name</h5>
            <h5>item catagory</h5>
            <h5>item </h5>
          </div>
        </div>
        <div className="flex gap-8 flex-col items-end">
          <div className="">
            <TiDeleteOutline className="text-xl" />
          </div>
          <div className="flex bottom">
            <div>
              <p className="quantity-desc flex  items-center">
                <span className="minus">
                  <AiOutlineMinus />
                </span>
                <span className="num">7</span>
                <span className="plus">
                  <AiOutlinePlus />
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-5">
          <Image
            src={"/images/p1.png"}
            alt="error"
            width={150}
            height={150}
            className="cart-product-image"
          />
          <div className="mt-8 flex flex-col gap-4">
            <h5>item name</h5>
            <h5>item catagory</h5>
            <h5>item </h5>
          </div>
        </div>
        <div className="flex gap-8 flex-col items-end">
          <div className="">
            <TiDeleteOutline className="text-xl" />
          </div>
          <div className="flex bottom">
            <div>
              <p className="quantity-desc flex  items-center">
                <span className="minus">
                  <AiOutlineMinus />
                </span>
                <span className="num">7</span>
                <span className="plus">
                  <AiOutlinePlus />
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8 flex justify-center items-center">
        <button className="border p-2">Process Order</button>
      </div>
    </section>
  );
};

export default Cart;
