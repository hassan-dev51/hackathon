import Image from "next/image";
import React from "react";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/cartTable", {
    method: "GET",
    headers: {
      "Content-Type": "applicaiton/json",
    },
  });
  const result = await res.json();
  return result;
};
const Kids = async () => {
  const { data } = await getData();
  console.log(data);

  return (
    <div>
      <div>
        {data.map((currProduct: any) => (
          <div className="product-card" key={currProduct.id}>
            {/* <Image
              //@ts-ignore
              src={`${currProduct?.image}`}
              alt="error"
              width={350}
              height={300}
              className="product-image"
            /> */}
            <p className="product-name">
              product name : {currProduct.product_id}
            </p>
            <p className="product-name">item : {currProduct.item}</p>
            <p className="product-name">category : {currProduct.category}</p>
            <p className="product-price">price : ${currProduct.price}</p>
            <div className="product-detail-desc">
              <div className="quantity">
                <h3>Quantity: {currProduct.quantity}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Kids;
