import Link from "next/link";
import Image from "next/image";

import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";

import { productType } from "../product/[slug]/page";

export const fetchProducts = async () => {
  const res = await client.fetch(`*[_type=="product"]{
    name,
    _id,
    slug,
    price,
    category,
    item,
    image
  }`);
  return res;
};
export const getImageUrl = (product: productType) => {
  if (product.image && product.image.length > 0) {
    const image = product.image[0];
    const builder = imageUrlBuilder(client);
    return builder.image(image).url();
  }
  return null;
};
const Product = async () => {
  const product = await fetchProducts();

  return (
    <div className="flex flex-wrap gap-7 px-32 mt-12">
      {product.map((product: productType, index: number) => {
        return (
          <div className="product-card" key={index}>
            <Link href={`/product/${product.slug.current}`}>
              <Image
                //@ts-ignore
                src={getImageUrl(product)}
                alt="error"
                width={250}
                height={0}
                style={{ height: "auto" }}
                // className="product-image aspect-auto"
              />
              <p className="product-name">{product.name}</p>
              <p className="product-name">{product.item}</p>
              <p className="product-price">${product.price}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
