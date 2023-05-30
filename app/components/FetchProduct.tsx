"use client";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import imageUrlBuilder from "@sanity/image-url";

const FetchProduct = () => {
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
    <div className="flex flex-wrap gap-7 ">
      {product.map((product: any) => {
        return (
          <div className="product-card" key={product._id}>
            <Image
              //@ts-ignore
              src={getImageUrl(product)}
              alt="error"
              width={250}
              height={200}
              className="product-image"
            />
            <p className="product-name">{product.name}</p>
            <p className="product-name">{product.item}</p>
            <p className="product-price">${product.price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default FetchProduct;
