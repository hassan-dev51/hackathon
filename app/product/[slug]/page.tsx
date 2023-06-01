"use client";
import Image from "next/image";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";
import { useEffect, useState } from "react";
import { getImageUrl } from "@/app/products/page";
import { decrementQuantity, incrementQuantity, onAdd } from "@/redux/addToCart";
import { client } from "@/sanity/lib/client";

const ProductDetails = ({ params }: { params: { slug: string } }) => {
  const { quantity } = useAppSelector((state) => state.addedItems);
  const dispatch = useAppDispatch();
  const [product, setProduct] = useState<any>([]);

  useEffect(() => {
    const query = '*[_type=="product"]';
    client.fetch(query).then((data) => setProduct(data));
  }, []);

  return (
    <div className="flex flex-col md:flex-row justify-start gap-7 md:px-32 px-4 mt-12">
      {product
        .filter(
          (filterProduct: any) => filterProduct.slug.current === params.slug
        )
        .map((currProduct: any) => (
          <div className="product-card" key={currProduct.slug}>
            <Image
              //@ts-ignore
              src={getImageUrl(currProduct)}
              alt="error"
              width={350}
              height={300}
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
                  onClick={() =>
                    dispatch(
                      onAdd({ product: currProduct, quantity: quantity })
                    )
                  }
                >
                  <SlBasket className="text-3xl" />

                  <h3 className="text-center leading-4">
                    Add <br /> to Cart
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
