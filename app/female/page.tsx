import Image from "next/image";
import Link from "next/link";
import { fetchProducts, getImageUrl } from "../products/page";

const Female = async () => {
  const product = await fetchProducts();
  return (
    <div className="flex flex-wrap gap-7 px-32 mt-12">
      {product
        .filter((product: any) => product.category === "female")
        .map((product: any) => {
          return (
            <div className="product-card" key={product._id}>
              <Link href={`/product/${product.slug.current}`}>
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
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export default Female;
