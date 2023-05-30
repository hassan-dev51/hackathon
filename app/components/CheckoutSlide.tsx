"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { checkList } from "./checkList";
import styles from "./CheckoutSlide.module.css";
import { Sora } from "next/font/google";

const sora = Sora({ subsets: ["latin"] });
const CheckoutSlide = () => {
  return (
    <div className={sora.className}>
      <Swiper watchSlidesProgress={true} slidesPerView={3} className="mySwiper">
        {checkList.map((item) => (
          <SwiperSlide key={item.id}>
            <div className={styles.slideCard}>
              <div className="slide-card-content">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={400}
                  height={250}
                  className="product-image"
                />
                <div className="p-2 text-xl font-bold">
                  <p className="product-name">{item.name}</p>
                  <p className="product-price">${item.price}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CheckoutSlide;
