"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Image from "next/image";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineShopping,
} from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import { getImageUrl } from "../products/page";
import {
  decreaseCartQuantity,
  increaseCartQuantity,
  onRemove,
} from "@/redux/addToCart";
import getStripe from "../lib/getStripe";
import { toast } from "react-hot-toast";

const Cart = () => {
  const { cart, totalquantity, totalPrice } = useAppSelector(
    (state) => state.addedItems
  );
  const dispatch = useAppDispatch();

  const handleCheckout = async () => {
    const stripe = await getStripe();

    const response = await fetch("http://localhost:3000/api/stripe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "no-cors",
      },
      body: JSON.stringify(cart),
    });

    const data = await response.json();

    const result = await stripe?.redirectToCheckout({ sessionId: data.id });

    if (result?.error) {
      toast.error("error");
    } else {
      toast.loading("redirecting");
    }
  };
  return (
    <section className="px-32">
      {cart.length ? (
        <div className="h-[400px] overflow-y-scroll">
          {cart.map((currElem, ind) => (
            <div
              key={ind}
              className="flex md:flex-row border flex-col justify-between items-center mb-7"
            >
              <div className="flex md:flex-row flex-col gap-5">
                <Image
                  // @ts-ignore
                  src={getImageUrl(currElem.product)}
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
                  <TiDeleteOutline
                    className="text-xl cursor-pointer"
                    onClick={() => dispatch(onRemove(currElem))}
                  />
                </div>
                <div className="flex bottom">
                  <div>
                    <p className="quantity-desc flex  items-center">
                      <span className="minus">
                        <AiOutlineMinus
                          onClick={() =>
                            dispatch(decreaseCartQuantity(currElem))
                          }
                        />
                      </span>
                      <span className="num">{currElem.quantity}</span>
                      <span className="plus">
                        <AiOutlinePlus
                          onClick={() =>
                            dispatch(increaseCartQuantity(currElem))
                          }
                        />
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="p-8 flex justify-center items-center">
            <button className="border p-2" onClick={handleCheckout}>
              Process Order
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className="mt-4">
            <span className="heading">Your Cart</span>
            <span className="cart-num-items">({totalquantity} items)</span>
          </div>
          <div className="flex justify-center items-center flex-col">
            <AiOutlineShopping size={150} />
            <h3 className="text-4xl font-extrabold mt-4">
              Your Shopping Cart is Empty
            </h3>
          </div>
        </div>
      )}
      <div className="text-end">total bill ${totalPrice}</div>
    </section>
  );
};

export default Cart;
