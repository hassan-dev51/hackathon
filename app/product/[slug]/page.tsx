"use client";
import Image from "next/image";

import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts, getImageUrl } from "@/app/products/page";
import { RootState } from "@/app/redux/store";
import { decrementQuantity, incrementQuantity } from "@/app/redux/addToCart";

const ProductDetails = async ({ params }: { params: { slug: string } }) => {
  const { quantity } = useSelector((state: RootState) => state.addedItems);
  const dispatch = useDispatch();

  const product = await fetchProducts();
  return (
    <div className="flex flex-col md:flex-row justify-start gap-7 md:px-32 px-4 mt-12">
      {product
        .filter((product: any) => product.slug.current === params.slug)
        .map((product: any) => (
          <div className="product-card" key={product.slug}>
            <Image
              //@ts-ignore
              src={getImageUrl(product)}
              alt="error"
              width={350}
              height={300}
              className="product-image"
            />
            <p className="product-name">{product.name}</p>
            <p className="product-name">{product.item}</p>
            <p className="product-price">${product.price}</p>
          </div>
        ))}

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
              <AiOutlineMinus onClick={() => dispatch(decrementQuantity())} />
            </span>

            <span className="num"> {quantity} </span>
            <span className="plus">
              <AiOutlinePlus onClick={() => dispatch(incrementQuantity())} />
            </span>
          </p>
        </div>
        <div className="mt-8">
          <button className="bg-black text-white w-[140px] gap-5 flex p-4 justify-end items-center">
            <SlBasket className="text-3xl" />

            <h3 className="text-center leading-4">
              Add <br /> to Cart
            </h3>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
