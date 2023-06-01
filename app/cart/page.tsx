"use client";
import { useAppSelector } from "@/redux/hooks";
import Image from "next/image";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineShopping,
} from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
const Cart = () => {
  const { cart } = useAppSelector((state) => state.addedItems);
  console.log(cart);

  return (
    <section className="px-32">
      <div className="mt-4">
        <span className="heading">Your Cart</span>
        <span className="cart-num-items">(23 items)</span>
      </div>
      <div className="flex justify-center items-center flex-col">
        <AiOutlineShopping size={150} />
        <h3 className="text-4xl font-extrabold mt-4">
          Your Shopping Cart is Empty
        </h3>
      </div>

      {cart.map((currElem, ind) => (
        <div
          className="flex md:flex-row flex-col justify-between items-center mb-7"
          key={ind}
        >
          <div className="flex md:flex-row flex-col gap-5">
            <Image
              src={"/images/p1.png"}
              alt="error"
              width={150}
              height={150}
              className="cart-product-image"
            />
            <div className="mt-8 flex flex-col gap-4">
              <h5>Name | {currElem.product.name}</h5>
              <h5>Category | {currElem.product.category}</h5>
              <h5>item | {currElem.product.item}</h5>
              <h5>Price | {currElem.product.price}</h5>
            </div>
          </div>
          <div className="flex gap-8 md:flex-col flex-row items-center md:items-end">
            <div className="">
              <TiDeleteOutline className="text-xl" />
            </div>
            <div className="flex bottom">
              <div>
                <p className="quantity-desc flex  items-center">
                  <span className="minus">
                    <AiOutlineMinus />
                  </span>
                  <span className="num">{currElem.quantity}</span>
                  <span className="plus">
                    <AiOutlinePlus />
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="p-8 flex justify-center items-center">
        <button className="border p-2">Process Order</button>
      </div>
    </section>
  );
};

export default Cart;
