"use client";

import Image from "next/image";

import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { SlBasket } from "react-icons/sl";

import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { getImageUrl } from "@/app/products/page";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  CartData,
  decrementQuantity,
  incrementQuantity,
} from "@/redux/addToCart";
import { toast } from "react-hot-toast";
export interface productType {
  category: string;
  image: string;
  item: string;
  name: string;
  price: number;
  slug: {
    current: string;
  };
}
const ProductDetails = ({ params }: { params: { slug: string } }) => {
  const { quantity } = useAppSelector((state) => state.addedItems);
  const dispatch = useAppDispatch();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);

  const AddIntoDatabase = async (product: productType, quantity: number) => {
    setLoading(true);
    const res = await fetch("/api/cartTable", {
      method: "POST",
      body: JSON.stringify({ product: product, quantity: quantity }),
    });
    if (res.ok) {
      const result = await res.json();
      const { res: resultData } = result;

      toast.success(`${product.name} Added`);

      dispatch(CartData(resultData));

      setLoading(false);
    } else {
      toast.error("Failed to add item to the cart");
    }
  };
  useEffect(() => {
    const query = '*[_type=="product"]';
    client.fetch(query).then((data) => setProduct(data));
  }, []);

  return (
    <div className="flex flex-col md:flex-row justify-start gap-7 md:px-32 px-4 mt-12">
      {product
        .filter(
          (filterProduct: productType) =>
            filterProduct.slug.current === params.slug
        )
        .map((currProduct: productType, index: number) => (
          <div className="product-card" key={index}>
            <Image
              // @ts-ignore
              src={getImageUrl(currProduct)}
              alt="error"
              width={350}
              height={300}
              sizes="(max-width:768) 100vw ,(max-width:1200px) 50vw, 33vw"
              className="product-image"
            />
            <p className="product-name">{currProduct.name}</p>
            <p className="product-name">{currProduct.item}</p>
            <p className="product-price">${currProduct.price}</p>
            <div className="product-detail-desc">
              <div>
                <h2>Select Size</h2>
                <div>
                  <button type="button">xs</button>
                  <button type="button">s</button>
                  <button type="button">l</button>
                  <button type="button">xl</button>
                </div>
              </div>
              <div className="quantity">
                <h3>Quantity: </h3>
                <p className="quantity-desc flex items-center">
                  <span className="minus">
                    <AiOutlineMinus
                      onClick={() => dispatch(decrementQuantity())}
                    />
                  </span>

                  <span className="num"> {quantity} </span>
                  <span className="plus">
                    <AiOutlinePlus
                      onClick={() => dispatch(incrementQuantity())}
                    />
                  </span>
                </p>
              </div>
              <div className="mt-8">
                <button
                  className="bg-black text-white w-[140px] gap-5 flex p-4 justify-end items-center"
                  onClick={() => {
                    AddIntoDatabase(currProduct, quantity);
                  }}
                >
                  <SlBasket className="text-3xl" />

                  <h3 className="text-center leading-4">
                    {loading ? "loading..." : "Add to Cart"}
                  </h3>
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ProductDetails;
