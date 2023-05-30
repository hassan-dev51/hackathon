"use client";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { useState, useEffect } from "react";
import imageUrlBuilder from "@sanity/image-url";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";
import Link from "next/link";
const ProductDetails = ({ params }: { params: { slug: string } }) => {
  const [product, setProduct] = useState<any>([]);

  useEffect(() => {
    const query = '*[_type=="product"]';
    client.fetch(query).then((data) => setProduct(data));
  }, []);
  // Function to get the URL of the first image
  const getImageUrl = (product: any) => {
    if (product.image && product.image.length > 0) {
      const image = product.image[0]; // Get the first image
      const builder = imageUrlBuilder(client);
      return builder.image(image).url();
    }
    return null;
  };
  return (
    <div className="flex justify-start gap-7 px-32 mt-12">
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
          <h3>Quantity:</h3>
          <p className="quantity-desc flex items-center">
            <span className="minus">
              <AiOutlineMinus />
            </span>
            <span className="num">23</span>
            <span className="plus">
              <AiOutlinePlus />
            </span>
          </p>
        </div>
        <div className="mt-8">
          <button className="bg-black text-white w-[140px] gap-5 flex p-4 justify-end items-center">
            <SlBasket className="text-3xl " />

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
